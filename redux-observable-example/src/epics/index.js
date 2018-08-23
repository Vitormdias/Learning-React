import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';

import {
  FETCH_WHISKIES,
  fetchWhiskiesFailure,
  fetchWhiskiesSuccess
} from "../actions";

const url = 'https://evening-citadel-85778.herokuapp.com/whiskey/'; // The API for the whiskies
/*
    The API returns the data in the following format:
    {
        "count": number,
        "next": "url to next page",
        "previous": "url to previous page",
        "results: array of whiskies
    }
    since we are only interested in the results array we will have to use map on our observable
 */

export function fetchWhiskiesEpic(action$) { // action$ is a stream of actions
  // action$.ofType is the outer Observable
  return action$
    .ofType(FETCH_WHISKIES) // ofType(FETCH_WHISKIES) is just a simpler version of .filter(x => x.type === FETCH_WHISKIES)
    .switchMap(() => {
      // ajax calls from Observable return observables. This is how we generate the inner Observable
      return ajax
        .getJSON(url) // getJSON simply sends a GET request with Content-Type application/json
        .map(data => data.results) // get the data and extract only the results
        .map(whiskies => whiskies.map(whisky => ({
          id: whisky.id,
          title: "whisky.title",
          imageUrl: whisky.img_url
        })))// we need to iterate over the whiskies and get only the properties we need
        // filter out whiskies without image URLs (for convenience only)
        .map(whiskies => whiskies.filter(whisky => !!whisky.imageUrl))
      // at the end our inner Observable has a stream of an array of whisky objects which will be merged into the outer Observable
    })
    .map(whiskies => fetchWhiskiesSuccess(whiskies)) // map the resulting array to an action of type FETCH_WHISKIES_SUCCESS
    // every action that is contained in the stream returned from the epic is dispatched to Redux, this is why we map the actions to streams.
    // if an error occurs, create an Observable of the action to be dispatched on error. Unlike other operators, catch does not explicitly return an Observable.
    .catch(error => Observable.of(fetchWhiskiesFailure(error.message)))
}

export default {
  fetchWhiskiesEpic
}