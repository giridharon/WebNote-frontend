import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import '../styles/Login.css';

import axios from "axios"
import API_URL from "../../config/global"
import { useNavigate } from "react-router-dom";
 const Login = () => {
    const [formData, setFormData] = useState({
    
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const{name,value}=e.target
            setFormData({...formData,[name]:value});
    };

    const handleSubmit =async (e) =>{
        e.preventDefault();
        console.log(formData)
        const response = await axios.post(`${API_URL}/login`,formData)
        console.log(response)
        localStorage.setItem("userInfo",JSON.stringify(response.data))
        if(response.data==="Invalid User name or Password"){
            alert("Invalid User name or Password")

        }else if(response.data === "Server Busy"){
            alert("Verify email")
        }else if(response.status){
            localStorage.setItem("userInfo",JSON.stringify(response.data))
            navigate("/note")
        }
    }
    return (
        <Container>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group><Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
                {/* <p>New user?<Link to="/">Sign Up</Link></p> */}
            </Form>
        </Container>
    )
}
export default Login
