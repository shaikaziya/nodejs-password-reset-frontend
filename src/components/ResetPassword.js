import React,{ useState } from 'react'
import { useParams } from "react-router-dom";

const ResetPassword = () => {
   
    const { id, token} = useParams();

    const [ newPassword, setNewPassword ] = useState("")
    const [ confirmPassword, setConfirmPassword ] = useState("")

    const passwordMatch=(e)=>{
        e.preventDefault();       
        if(newPassword === confirmPassword){
            handleSubmit()
        }
        else{
            window.alert("Passwords does not match")
        }
    }

    const handleSubmit=()=>{       
        const updatePassword = {
            password : newPassword                      
        };    
        console.log(updatePassword)
        fetch(`https://resetpassword1.herokuapp.com//users/reset-password/${id}/${token}`, {
            method: "POST",
            body: JSON.stringify(updatePassword),
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((data) => data.json())
            .then((data) => {
                if(data.message === "User not exists!!"){
                    window.alert("User not exists!! Please sign up and create a new one")
                }                
                if(data.message === "Password updated"){
                    window.alert("Password updated successfully!!")                         
                } 
                if(data.message === "Something went wrong"){
                    window.alert("Token expired!!")
                }
            })
    }
    
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Reset Password</h3>                                      
                    <div className="form-group mt-3">
                        <label>New Password</label>
                        <input type="password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} className="form-control mt-1" placeholder="New Password" autoComplete='off'/>
                    </div>
                    <div className="form-group mt-3">
                        <label>Confirm Password</label>
                        <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className="form-control mt-1" placeholder="Confirm Password" autoComplete='off' />
                    </div>   
                                                                                                  
                    <div className="d-grid gap-2 mt-4">
                        <button type="submit" className="btn btn-primary" onClick={passwordMatch}>                        
                            Submit
                        </button>
                    </div>                   
                </div>
            </form>
        </div>
    )
}

export default ResetPassword
