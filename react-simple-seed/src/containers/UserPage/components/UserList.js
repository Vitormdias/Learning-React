import React from 'react'
import User from './User'

const UserList = (content) => {
  return content.map((item, index) => {
    return <User name={item.name} key={index} />
  })
}

export default UserList