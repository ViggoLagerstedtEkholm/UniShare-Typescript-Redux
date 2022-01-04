import React from "react";
import {Stack} from "react-bootstrap";
import Overview from "./Overview";
import ShowcaseUser from "../Shared/ShowcaseUser";

function Home() {
    return (
        <Stack className="gap-4">
            <ShowcaseUser/>
            <Overview/>
        </Stack>
    );
}

export default Home;
