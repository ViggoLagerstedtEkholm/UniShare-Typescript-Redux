import {Container, Spinner} from "react-bootstrap";
import {Filter, FilterProvider, OptionsMap, Order} from "../../Context/InputValueContext";
import FilterBox from "../../Search/Filter/Main/FilterBox";
import {useState} from "react";
import {Pagination} from "../Courses/CoursesSearch";
import PeopleSearchPreviewItem from "./PeopleSearchPreviewItem";

export interface User {
    id: string;
    firstname: string;
    lastname: string;
    username: string;
    visits: number;
    joined: Date;
    lastSeenDate: Date;
    image: string;
    isFriend: boolean;
    isSent: boolean;
    isReceived: boolean;
}

export interface UserSearch {
    users: User[];
    pagination: Pagination;
    totalMatches: number;
}

function PeopleSearch(){
    const [results, setResults] = useState<UserSearch | null>(null);
    const [search, setSearch] = useState("");

    const options: OptionsMap = {
        Visits: 'Visits',
        Firstname: 'Firstname',
        Lastname: 'Lastname',
        Username: 'Username',
        LastSeenDate: 'LastSeenDate',
        Joined: 'Joined'
    };

    const filter: Filter<UserSearch> = {
        Page: 1,
        Search: "",
        Order: Order.Descending,
        Options: options,
        ShowFilter: true,
        SelectedOption: options.Visits,
        APIEndpoint: 'https://localhost:5001/api/Search/users',
        Result: onResults
    }

    function onResults(results: UserSearch | null, search: string) {
        setSearch(search);
        setResults(results);
    }

    return(
        <Container>
            <FilterProvider startFilter={filter}>
                <FilterBox>
                    {!results ? <Spinner animation="grow" variant="light" className="m-auto"/> : null}

                    {
                        results?.users.map((user, index) =>{
                            return <PeopleSearchPreviewItem user={user} search={search} key={index}/>
                        })
                    }
                </FilterBox>
            </FilterProvider>
        </Container>
    )
}

export default PeopleSearch;