import { combineReducers, legacy_createStore } from "redux";
import { countReducer } from '../../reducer/countReducer'
import { ColorReducer } from "../reducer/ColorReducer";

const rootReducer = combineReducers({ countReducer, ColorReducer})

export const store = legacy_createStore(rootReducer);
