import { combineReducers, createStore } from "redux";
import web3Reducer from './reducers/web3Reducer';

const rootReducer = combineReducers({
  web3Reducer
})

const store = createStore(rootReducer)

export default store