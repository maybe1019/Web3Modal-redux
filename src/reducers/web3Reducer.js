import config from '../utils/config'

const initialState = {
  web3: null
}

const web3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case config.actions.WALLET_CONNECTED:
      state = {
        ...state,
        web3: action.payload
      }
      break;
    case config.actions.WALLET_DISCONNECTED:
      state = {
        ...state,
        web3: null
      }
      break;
    default:
      break;
  }
  return state
}

export default web3Reducer