import React from "react";
import {Stack} from "react-bootstrap";
import Overview from "./Overview";
import ShowcaseUser from "../Shared/ShowcaseUser";
import {useAuthContext} from "../Context/AuthContext";

function Home() {
    const {isLoggedIn} = useAuthContext();

    return (
        <Stack className="gap-4">
            {
                isLoggedIn ? <ShowcaseUser/> : <h2>Hello! Welcome to UniShare</h2>
            }
            <Overview/>
        </Stack>
    );
}

export default Home;
