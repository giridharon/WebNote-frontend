import React from 'react';
import { Container,Button} from 'react-bootstrap';
import "../styles/Home.css";
import { Link, useNavigate } from "react-router-dom";

const Home = () =>{
    return(
        <Container>
            <h1>Welcome!</h1>
            <p> You're lookin at home page</p>
            <Link to ="/"><Button variant="primary">Sign Up</Button></Link>
            
        </Container>
    )
}
export default Home