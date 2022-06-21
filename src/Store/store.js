import { createStore } from "redux";
import Spinnerreducer from "./Reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";



const store=createStore(Spinnerreducer,composeWithDevTools())

export default store