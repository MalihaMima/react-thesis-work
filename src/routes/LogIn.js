import React from "react";
import '../pages/registration.css';

export default function LogIn (){
    return(
        <div className="formdiv">
        <div className="center">
        <form className="formdesign">
        <label className="laveldesign">
        Name:
        <input type="text" name="name" />
        </label>
    
        <label>
        Email
        <input type="email" name="email" />
        </label>
    
        <label>
        Password:
        <input type="password" name="password" />
        </label>
    
        <input type="submit" value="Submit" />
        </form>
        </div>
        </div>
    )
}