import {AuthReducer, initialState, State} from "./Components/Shared/AuthReducer";
import {createContext, Dispatch, useReducer} from "react";
import {Action} from "redux";
import {FilterOpenReducer, initialFilterState, OpenState} from "./Components/Shared/FilterOpenReducer";

interface DispatchAuthState {
    authState: State;
    authDispatch: Dispatch<Action>;
}

interface DispatchFilterOpenState {
    filterOpenState: OpenState;
    filterOpenDispatch: Dispatch<Action>;
}

export const AuthContext = createContext<DispatchAuthState>({
    authState: initialState,
    authDispatch: () => null,
});

export const FilterOpenContext = createContext<DispatchFilterOpenState>({
    filterOpenState: initialFilterState,
    filterOpenDispatch: () => null,
});

interface Props{
    children: JSX.Element;
}

function AppStateProvider({children}: Props){
    const [authState, authDispatch] = useReducer(AuthReducer, initialState);
    const [filterOpenState, filterOpenDispatch] = useReducer(FilterOpenReducer, initialFilterState);

    const auth = {authState, authDispatch};
    const filterOpen = {filterOpenState, filterOpenDispatch};

    return(
        <AuthContext.Provider value={auth}>
            <FilterOpenContext.Provider value={filterOpen}>
                {children}
            </FilterOpenContext.Provider>
        </AuthContext.Provider>
    )
}

export default AppStateProvider;