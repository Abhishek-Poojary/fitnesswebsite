import { combineReducers } from "redux";
import { loadUserReducer, userLoginReducer } from "./UserReducer";

const Reducer=combineReducers({
    login:userLoginReducer,
    user:loadUserReducer
  
});

export default Reducer;