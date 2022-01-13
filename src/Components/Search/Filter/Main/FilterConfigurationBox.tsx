import {useContext, useState} from "react";
import FilterOptions from "./FilterOptions";
import FilterInfo from "./FilterInfo";
import {Button, Container} from "react-bootstrap";
import {FilterOpenContext} from "../../../../AppStateProvider";
import {OPEN_FILTER} from "../../../Shared/FilterOpenReducer";

function FilterConfigurationBox() {
    const {filterOpenState, filterOpenDispatch} = useContext(FilterOpenContext);
    const [showFilterBoxState, setShowFilterBoxState] = useState(filterOpenState.isOpened);

    const toggle = () => {
        setShowFilterBoxState(!showFilterBoxState);

        if(showFilterBoxState){
            filterOpenDispatch({type: 'CLOSE_FILTER'});
        }else{
            filterOpenDispatch({type: 'OPEN_FILTER'});
        }
    }

    return (
        <Container fluid>
            <Button className="btn btn-primary w-100 mb-3" onClick={toggle}> Toggle filtering.</Button>
            {showFilterBoxState &&
                <Container>
                    <FilterOptions/>
                    <hr/>
                    <FilterInfo/>
                </Container>
            }
        </Container>
    );
}

export default FilterConfigurationBox;