import React from 'react'
import { withProps } from 'recompose'

const UserDetail = ({ name, age }) => {
  return <React.Fragment>
    <p>Nome: {name}</p>
    <p>Idade: {age}</p>
  </React.Fragment>
};

const WrappedUserDetail = withProps({ name: 'Vitor', age: 21 })(UserDetail);

export { UserDetail, WrappedUserDetail };