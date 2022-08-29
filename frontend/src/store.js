import {createStore,applyMiddleware}  from 'redux'
import thunk from 'redux-thunk';
import Reducer from './reducers/Reducer';
import {composeWithDevTools} from 'redux-devtools-extension'



let initialState={
    login:localStorage.getItem("loginState") ? JSON.parse(localStorage.getItem("loginState")):{},
}


const store = createStore(
  Reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;