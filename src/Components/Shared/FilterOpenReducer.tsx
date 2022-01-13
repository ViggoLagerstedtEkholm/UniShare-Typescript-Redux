export interface OPEN_FILTER {
    type: 'OPEN_FILTER';
}

export interface CLOSE_FILTER {
    type: 'CLOSE_FILTER';
}

type FilterAction = OPEN_FILTER | CLOSE_FILTER;

export interface OpenState{
    isOpened: boolean;
}

export const initialFilterState: OpenState = {
    isOpened: false,
};

export const FilterOpenReducer = (state: OpenState, action: FilterAction) => {
    switch (action.type) {
        case 'OPEN_FILTER':
            return {
                ...state,
                isOpened: true,
            };
        case 'CLOSE_FILTER':
            return {
                ...state,
                isOpened: false,
            };
        default:
            return state;
    }
};
