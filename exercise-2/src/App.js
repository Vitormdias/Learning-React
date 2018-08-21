import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './validationComponent';
import CharComponent from './charComponent';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }

  onClick = (index) => {
    const text = this.state.content.split('');
    text.splice(index, 1);
    const content = text.join('');
    this.setState({ content });
  }

  render() {
    return (
      <div className="App">
        <input onChange={(event) => this.setState({ content: event.target.value })} value={this.state.content} />
        <p>{this.state.content.length}</p>
        <ValidationComponent textLenght={this.state.content.length} />
        {
          this.state.content.split('').map((char, index) => {
            return <CharComponent char={char} key={index} onClick={() => this.onClick(index)} />
          })
        }
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
