export interface LOGIN_ACTION {
    type: 'LOGIN_ACTION';
    username: string;
    token: string;
    refreshToken: string;
    id: string;
}

export interface LOGOUT_ACTION {
    type: 'LOGOUT_ACTION';
}

type AuthAction = LOGIN_ACTION | LOGOUT_ACTION;

export interface State{
    isAuth: boolean,
    username: string | undefined,
    token: string | undefined,
    refreshToken: string | undefined;
    id: string | undefined;
}

export const initialState: State = {
    isAuth: false,
    username: undefined,
    token: undefined,
    refreshToken: undefined,
    id: undefined
};

export const AuthReducer = (state: State, action: AuthAction) => {
    switch (action.type) {
        case 'LOGIN_ACTION':
            return {
                ...state,
                isAuth: true,
                username: action.username,
                token: action.token,
                refreshToken: action.refreshToken,
                id: action.id
            };
        case 'LOGOUT_ACTION':
            return {
                ...state,
                isAuth: false,
                username: undefined,
                token: undefined,
                refreshToken: undefined,
                id: undefined
            };
        default:
            return state;
    }
};
