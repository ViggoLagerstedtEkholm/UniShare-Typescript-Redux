import {Container} from "react-bootstrap";
import {Filter, FilterProvider, OptionsMap, Order} from "../Context/InputValueContext";
import {UserSearch} from "../Discover/PeopleSearch/PeopleSearch";
import FilterBox from "../Search/Filter/Main/FilterBox";

interface Props{
    username: string
}

function CommentSearch({username}: Props){

    const options: OptionsMap = {
        Added: 'Date'
    };

    const filter: Filter<UserSearch> = {
        Page: 1,
        Search: "",
        Order: Order.Descending,
        Options: options,
        ShowFilter: true,
        SelectedOption: options.Added,
        APIEndpoint: 'https://localhost:5001/api/Search/comments',
        Result: onResults,
        ProfileId: username
    }

    function onResults(result: any, search: string){
        console.log(result);
    }

    return(
        <Container className="bg-secondary bg-opacity-10 pt-4 px-4">
            <h2>Comments</h2>
            <FilterProvider startFilter={filter}>
                <FilterBox>
                    <h1>Test!</h1>
                </FilterBox>
            </FilterProvider>
        </Container>
    )
}

export default CommentSearch;