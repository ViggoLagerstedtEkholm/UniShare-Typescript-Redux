import {useContext} from "react";
import {AuthContext} from "../../AppStateProvider";
import { Navigate } from 'react-router-dom'

interface Props{
    children: JSX.Element;
}

function RequireAuth({children}: Props){
    const {authState} = useContext(AuthContext);
    return authState.isAuth ? children : <Navigate to='/login'/>;
}
export default RequireAuth;