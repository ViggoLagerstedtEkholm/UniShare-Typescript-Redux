import {Button, Stack} from "react-bootstrap";
import {Dispatch, SetStateAction} from "react";

interface Props{
    setPage: Dispatch<SetStateAction<any>>;
}

function Sidebar({setPage} : Props){
    return(
        <Stack className="gap-3">
            <Button className="bg-transparent" onClick={() => setPage(0)}>
                Account
            </Button>
            <Button className="bg-transparent" onClick={() => setPage(1)}>
                Handles
            </Button>
            <Button className="bg-transparent" onClick={() => setPage(2)}>
                Change Password
            </Button>
        </Stack>
    )
}

export default Sidebar;