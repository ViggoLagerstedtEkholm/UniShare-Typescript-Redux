import {Container} from "react-bootstrap";
import {Filter, FilterProvider, OptionsMap, Order} from "../../Context/InputValueContext";
import FilterBox from "../../Search/Filter/Main/FilterBox";
import Loading from "../../Shared/Loading";
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
        page: 1,
        search: "",
        order: Order.Descending,
        options: options,
        showFilter: true,
        selectedOption: options.Visits,
        APIEndpoint: 'https://localhost:5001/api/Search/users',
        result: onResults
    }

    function onResults(results: UserSearch | null, search: string) {
        console.log(results);
        setSearch(search);
        setResults(results);
    }

    return(
        <Container>
            <FilterProvider startFilter={filter}>
                <FilterBox>
                    {!results ? <Loading/> : null}

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