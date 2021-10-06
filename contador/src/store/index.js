import reducerCounter from "./model/contador/reducers";
import { createStore, combineReducers } from "redux";

const reducers = combineReducers({ counter: reducerCounter });

const store = createStore(reducers);

export default store;
