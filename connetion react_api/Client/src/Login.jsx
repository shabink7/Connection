import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom"; 

function Login() {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");

    const navigate =useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/login', {email, password: pass })
            .then(result => {
                console.log(result);
                if(result.data.status === 'success'){
                  navigate('/home')
                } else {
                    setError(result.data.message);  // Display error message from response
                }
               
            })
            .catch(error => {
                console.log(error);
                setError("Registration failed. Please try again.");
            });
    };

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
                <div className="bg-white p-3 rounded w-25">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Email</strong>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter email"
                                autoComplete="off"
                                name="email"
                                className="form-control rounded-0"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">
                                <strong>Password</strong>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter password"
                                autoComplete="off"
                                name="password"
                                className="form-control rounded-0"
                                onChange={(e) => setPass(e.target.value)}
                            />
                        </div>
                        {error && <p className="text-danger">{error}</p>}
                        <button type="submit" className="btn btn-success w-100 rounded-0">
                            Login
                        </button>
                    </form>
                    <p>Already have an Account?</p>
                    <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
