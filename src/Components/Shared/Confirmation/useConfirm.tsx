import {useContext} from "react";
import {ConfirmContext} from "./ConfirmContextProvider";
import {HIDE_CONFIRM, SHOW_CONFIRM} from "./ConfirmReducer";

let resolveCallback: { (arg0: boolean): void; (value: unknown): void; };
function useConfirm() {
    const {state, dispatch} = useContext(ConfirmContext);

    const onConfirm = () => {
        closeConfirm();
        resolveCallback(true);
    };

    const onCancel = () => {
        closeConfirm();
        resolveCallback(false);
    };

    const confirm = (text: string) => {
        console.log('Test!', text);
        dispatch({
            type: "SHOW_CONFIRM",
            text: text
        });
        return new Promise((res, rej) => {
            resolveCallback = res;
        });
    };

    const closeConfirm = () => {
        dispatch({
            type: "HIDE_CONFIRM"
        });
    };

    return { confirm, onConfirm, onCancel, state };
}

export default useConfirm;