import {useState, useEffect} from "react";

export enum STORED_VALUES{
    REFRESH_TOKEN = "REFRESH_TOKEN",
    TOKEN = "TOKEN"
}

function getSavedValue(key: STORED_VALUES, initialValue: any){
    const savedValue = JSON.parse(localStorage.getItem(key) as string);
    if(savedValue) return savedValue;

    if(initialValue instanceof Function) return initialValue()
    return initialValue;
}

function useLocalStorage(key: STORED_VALUES, initialValue: any){
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue)
    });

    useEffect(() =>{
        localStorage.setItem(key, JSON.stringify(value));
    }, [value])

    return[value, setValue];
}

export default useLocalStorage;