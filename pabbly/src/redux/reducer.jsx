import { EDIT_USER, GET_USER, LOADING, LOGIN_USER, LOGOUT_USER, NOT_LOADING, POST_USER, RESET_USER } from './actiontype'

const initialState = {
    user : {},
    loggedIn: false,
    status:"",
    token:"",
    
    isLoading: false
}

export const Reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_USER : return {...state, user:payload}
        case EDIT_USER : return {...state, user:payload}
        case POST_USER : return {...state,status:payload}
        case LOGIN_USER: return {...state,user:payload.currUser,status:payload.statuscode,loggedIn:true,token:payload.token}
        case LOGOUT_USER :return{...state,user:{},loggedIn:false,token:""}
        case RESET_USER :return{...state,status:payload}
        case LOADING: return {...state,isLoading:true}
        case NOT_LOADING: return {...state,isLoading:false}
        default : return state
    }
}

