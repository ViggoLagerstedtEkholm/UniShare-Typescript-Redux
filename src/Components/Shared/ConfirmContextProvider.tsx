import {createContext, Dispatch, ReactNode, useReducer} from "react";
import {ConfirmAction, ConfirmReducer, ConfirmState, initialState} from "./ConfirmReducer";

interface DispatchState {
    state: ConfirmState;
    dispatch: Dispatch<ConfirmAction>;
}

export const ConfirmContext = createContext<DispatchState>({
    state: initialState,
    dispatch: () => null,
});

interface Props{
    children: ReactNode;
}

export const ConfirmContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(ConfirmReducer, initialState);
    const value = {state, dispatch};

    return (
        <ConfirmContext.Provider value={value}>
            {children}
        </ConfirmContext.Provider>
    );
};