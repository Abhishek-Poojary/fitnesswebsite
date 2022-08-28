import { combineReducers } from "redux";
import { adminUpdateReducer, classDetailReducer, eventDateReducer, loadUserReducer, userLoginReducer } from "./UserReducer";

const Reducer=combineReducers({
    login:userLoginReducer,
    user:loadUserReducer,
    updateAdmin:adminUpdateReducer,
    event:eventDateReducer,
    classes:classDetailReducer
  
});

export default Reducer;