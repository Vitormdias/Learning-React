import { connect } from 'react-redux'
import { deposit, withdraw } from '../actions'
import Form from '../components/form'

const mapStateToProps = (state) => {
  return {
    value: state.cashOperation.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeposit: (value) => dispatch(deposit(value)),
    onWithdraw: (value) => dispatch(withdraw(value))
  }
}

const CashOperations = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default CashOperations;