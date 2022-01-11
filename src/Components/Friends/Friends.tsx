import {Container} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../App";

interface Props{
    username?: string;
}

function Friends(props: Props){
    const {state} = useContext(AuthContext);
    const [friends, setFriends] = useState<any>();

    useEffect(() =>{
        if(props.username){
            axios.get('https://localhost:5001/api/Friends/friends/' + props.username)
                .then(response => console.log(response.data))
                .catch(error => console.log(error));
        }else{
            axios.get('https://localhost:5001/api/Friends/friends/' + state.username)
                .then(response => console.log(response.data))
                .catch(error => console.log(error));
        }
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