import {Container} from "react-bootstrap";
import FilterBox from "../../Search/Filter/Main/FilterBox";
import {useState} from "react";
import {Filter, FilterProvider, OptionsMap, Order} from "../../Context/InputValueContext";
import {useAuthContext} from "../../Context/AuthContext";
import CourseSearchPreviewItem from "./CourseSearchPreviewItem";
import Loading from "../../Shared/Loading";

export interface Course {
    id: number;
    name: string;
    credits: number;
    university: string;
    rating: number;
    city: string;
    country: string;
    added: Date;
    code: string;
    link: string;
    inActiveDegree: boolean;
}

export interface Pagination {
    pageFirstResultIndex: number;
    resultsPerPage: number;
    totalPages: number;
}

export interface CourseSearch {
    courses: Course[];
    pagination: Pagination;
    totalMatches: number;
}

function CoursesSearch(){
    const [results, setResults] = useState<CourseSearch | null>(null);
    const [search, setSearch] = useState("");

    const {id} = useAuthContext();

    const options: OptionsMap = {
        Name: 'Name',
        Credits: 'Credits',
        Added: 'Added',
        Country: 'Country',
        City: 'City',
        University: 'University',
        Code: 'Code',
        Link: 'Link',
        Rating: 'Rating'
    };

    const filter: Filter<CourseSearch> = {
        page: 1,
        search: "",
        order: Order.Descending,
        options: options,
        showFilter: true,
        activeDegreeUserId: id,
        selectedOption: options.Name,
        APIEndpoint: 'https://localhost:5001/api/Search/courses',
        result: onResults
    }

    function onResults(results: CourseSearch | null, search: string) {
        setSearch(search);
        setResults(results);
    }

    return(
        <Container>
            <FilterProvider startFilter={filter}>
                <FilterBox>
                    {!results ? <Loading/> : null}

                    {
                        results?.courses?.map((course, index) =>{
                            return <CourseSearchPreviewItem course={course} search={search} key={index}/>
                        })
                    }
                </FilterBox>
            </FilterProvider>
        </Container>
    )
}

export default CoursesSearch;