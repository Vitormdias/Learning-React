import React from 'react';

export default class Form extends React.Component {
  render() {
    const { onDeposit, onWithdraw, value } = this.props;

    return <div>
      <div className="formContainer">
        <input placeholder="quantidade" />
        <button onClick={onDeposit}>Depositar</button>
        <button onClick={onWithdraw}>Sacar</button>
      </div>
      <p id="quantity">{value}</p>
    </div>
  }
}