import React,{ useState } from 'react'
import { useNavigate } from "react-router-dom";

const SignUp = () => {
   
    const navigate = useNavigate();
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();       
        const newUser = {
            email: email, 
            password: password                              
        };    
        fetch("https://resetpassword1.herokuapp.com//users/signup", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((data) => data.json())
            .then((data) => {
                if(data.message === "Username already taken"){
                    window.alert("Username already taken")
                }               
                if(data.acknowledged === true ){
                    window.alert("Account created Successfully!!!")
                    navigate("/forgot-password")         
                }                 
            })
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>  
                                                       
                    <div className="form-group mt-3">
                        <label>Email Address</label>
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control mt-1" placeholder="Enter email" />
                    </div> 

                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control mt-1" placeholder="Enter password" autoComplete='off'/>
                    </div>   

                    <div className="text-center mt-3">
                        Already registered ?{""}
                        <span className="link-primary" style={{textDecoration:"underline"}} onClick={()=>navigate("/forgot-password")}>
                            &nbsp;&nbsp;Forgot Password
                        </span>
                    </div>    
                    
                    <div className="d-grid gap-2 mt-4">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>                        
                            Submit
                        </button>
                    </div>                   
                </div>
            </form>
        </div>
    )
}

export default SignUp
