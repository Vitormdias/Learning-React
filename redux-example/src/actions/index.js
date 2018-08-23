export const DEPOSIT = 'DEPOSIT'
export const WITHDRAW = 'WITHDRAW'

export function deposit(value) {
  return {
    type: DEPOSIT,
    value
  }
}

export function withdraw(value) {
  return {
    type: WITHDRAW,
    value
  }
}

export default {
  deposit,
  withdraw
}