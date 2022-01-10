import {useState} from "react";
import FilterOptions from "./FilterOptions";
import FilterInfo from "./FilterInfo";
import {Button, Container} from "react-bootstrap";

interface Props{
    open: boolean;
}

function FilterConfigurationBox({open}: Props) {
    const [showFilterBoxState, setShowFilterBoxState] = useState(open);

    const toggle = () => {
        setShowFilterBoxState(!showFilterBoxState);
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