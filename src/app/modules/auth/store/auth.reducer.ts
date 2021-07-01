import { User } from "../model/user.model";
import * as AuthActions from './auth.actions';

export interface State{
    user:User;
    role:string,
    authError:string;
    loading:boolean;
}

const initialState:State={
    user:null,
    role:null,
    authError:null,
    loading:false
}


export function authReducer(state=initialState, action:AuthActions.AuthActions){
    switch(action.type){
        case AuthActions.LOGIN:
            const user=new User(
                action.payload.email,
                action.payload.userId,
                action.payload.token,
                action.payload.expirationDate
            );
            return{
                ...state,
                authError:null,
                user:user,
                loading:false,
                role:action.payload.role
            };
        case AuthActions.LOGOUT:
            return{
                ...state,
                authError:null,
                user:null,
                role:null
            };
        case AuthActions.LOGIN_START:
            return{
                ...state,
                authError:null,
                loading:true,
                role:action.payload.role
            };
        case AuthActions.LOGIN_FAIL:
            return{
                ...state,
                user:null,
                authError:action.payload,
                loading:false,
                role:null
            };
        case AuthActions.CLEAR_ERROR:
            return{
                ...state,
                authError:null
            };
        case AuthActions.USER_ROLE:
            return{
                ...state
            };
        default:
            return state;
    }
}