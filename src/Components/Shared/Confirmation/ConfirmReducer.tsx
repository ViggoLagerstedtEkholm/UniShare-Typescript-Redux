export interface SHOW_CONFIRM {
    type: 'SHOW_CONFIRM';
    text: string;
}

export interface HIDE_CONFIRM {
    type: 'HIDE_CONFIRM';
}

export type ConfirmAction = SHOW_CONFIRM | HIDE_CONFIRM;

export interface ConfirmState{
    show: boolean,
    text: string | undefined,
}

export const initialState: ConfirmState = {
    show: false,
    text: ''
};

export const ConfirmReducer = (state: ConfirmState, action: ConfirmAction) => {
    switch (action.type) {
        case "SHOW_CONFIRM":
            return {
                show: true,
                text: action.text
            };
        case "HIDE_CONFIRM":
            return initialState;
        default:
            return initialState;
    }
}