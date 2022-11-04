import React,{ useState } from 'react'
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
   
    const navigate = useNavigate();
    const [ email, setEmail ] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();       
        const user = {
            email: email,                            
        };           
        fetch("https://resetpassword1.herokuapp.com//users/forgot-password", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((data) => data.json())
            .then((data) => {
                if(data.message === "User not exists!!"){
                    window.alert("User not exists!! Please sign up and create a new one")
                }                
                if(data.message === "Email sent successfully"){
                    window.alert("Password reset link sent to your mail. Please check your mail")                         
                }                 
            })
    }
   
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Forgot Password</h3>  
                                                       
                    <div className="form-group mt-3">
                        <label>Email Address</label>
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control mt-1" placeholder="Enter email" />
                    </div>   

                    <div className="text-center mt-3">
                        Not registered yet?{""}
                        <span className="link-primary" onClick={()=>navigate("/sign-up")}>
                            Sign Up
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

export default ForgotPassword
