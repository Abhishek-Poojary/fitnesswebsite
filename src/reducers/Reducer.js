import { combineReducers } from "redux";
import { userLoginReducer } from "./UserReducer";

const Reducer=combineReducers({
    login:userLoginReducer
  
});

export default Reducer;