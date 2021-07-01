import { Action } from '@ngrx/store';

export const LOGIN_START='[Auth] Login Start';
export const LOGIN = '[Auth] Login';
export const LOGIN_FAIL='[Auth] Login Fail';
export const LOGOUT='[Auth] Logout';
export const CLEAR_ERROR='[Auth] Clear Error';
export const AUTO_LOGIN='[AUTH] Auto Login';
export const USER_ROLE='[AUTH] User Role';

export class Login implements Action {
    readonly type=LOGIN;

    constructor(
        public payload:{
            email:string;
            userId:string;
            token:string;
            expirationDate:Date;
            role:string
        }
    ){}
}

export class Logout implements Action{
    readonly type=LOGOUT;
}

export class LoginStart implements Action{
    readonly type=LOGIN_START;
    constructor(public payload:{
        email:string,
        password:string,
        role:string
    }){}
}

export class LoginFail implements Action{
    readonly type=LOGIN_FAIL;
    constructor(public payload:string){}
}

export class ClearError implements Action{
    readonly type=CLEAR_ERROR;
}
export class AutoLogin implements Action{
    readonly type=AUTO_LOGIN;
}
export class UserRole implements Action{
    readonly type=USER_ROLE;
    constructor(public payload:{email:string,password:string,role:string}){}
}

export type AuthActions = Login | Logout | LoginStart | LoginFail | ClearError | AutoLogin | UserRole;