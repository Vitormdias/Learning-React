import React from 'react'
import UserList from './components/UserList'
import { getUserList } from '../../services/user';

export class UserPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userList: []
    }
  }

  componentDidMount() {
    getUserList()
      .subscribe(userList => this.setState({ userList }))
  }

  render() {
    const { userList } = this.state

    return <UserList content={userList} />
  }
}