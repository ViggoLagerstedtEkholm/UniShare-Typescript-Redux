import React, {useState} from "react";

export interface Auth{
    loggedIn: boolean;
}

const isOwner = (pageID: string, id: string): boolean => {
    return pageID === id;
}

// Custom hook implementation
const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("Viggo");
    const [id, setID] = useState("1");

    return {
        isLoggedIn,
        username,
        id,
        setIsLoggedIn: (loggedIn: boolean) => setIsLoggedIn(loggedIn),
        setUsername: (username: string) => setUsername(username),
        setID: (id: string) => setID(id),
        isOwner: (pageID: string) => isOwner(pageID, id)
    }
};

const TodoContext = React.createContext<ReturnType<typeof useAuth> | null>(
    null
);

export const useAuthContext = () => React.useContext(TodoContext)!;

export function AuthProvider({ children }: { children: React.ReactNode }) {
    return (
        <TodoContext.Provider value={useAuth()}>
            {children}
        </TodoContext.Provider>
    );
}