import {Container} from "react-bootstrap";
import {useContext, useEffect} from "react";
import axios from "axios";
import {AuthContext} from "../../AppStateProvider";

function Friends(){
    const {authState} = useContext(AuthContext);
    //const [friends, setFriends] = useState<any>();

    useEffect(() =>{
            axios.get('https://localhost:5001/api/Friends/friends/' + authState.username)
                .then(response => console.log(response.data))
                .catch(error => console.log(error));
        return () => console.log('test');
    }, [])

    return(
        <Container>
            <h1 className="bg-secondary bg-opacity-10 p-4 rounded">Friend list</h1>
            <hr/>
        </Container>
    )
}

export default Friends;