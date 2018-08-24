import React from 'react';

export default class Form extends React.Component {
  render() {
    const { onDeposit, onWithdraw, value } = this.props;

    return <div>
      <div className="formContainer">
        <input placeholder="quantidade" ref='input' />
        <button onClick={() => onDeposit(this.refs.input.value)}>Depositar</button>
        <button onClick={() => onWithdraw(this.refs.input.value)}>Sacar</button>
      </div>
      <p id="quantity">{value}</p>
    </div>
  }
}