import {
    REQUEST_FOR_USER_LOGIN,
    REQUEST_FOR_USER_LOGIN_FAIL,
    REQUEST_FOR_USER_LOGIN_SUCCESS,
    REQUEST_TO_REGISTER_USER,
    REQUEST_TO_REGISTER_USER_FAIL,
    REQUEST_TO_REGISTER_USER_SUCCESS
} from '../constants/UserConstants'

export const userLoginReducer=( state={},action)=>{
    switch(action.type){
        case REQUEST_TO_REGISTER_USER:
        case REQUEST_FOR_USER_LOGIN:
        return {
            loading:true,
            isAuthenticated:false
        }
        case REQUEST_TO_REGISTER_USER_FAIL:
        case REQUEST_FOR_USER_LOGIN_FAIL:
            return {
                loading:false,
                isAuthenticated:false,
                user:null,
                error:action.error
            }
        case REQUEST_TO_REGISTER_USER_SUCCESS:
        case REQUEST_FOR_USER_LOGIN_SUCCESS:
            return {
                loading:false,
                isAuthenticated:true,
                user:action.payload
            }
        
        default: return state;
    }

}