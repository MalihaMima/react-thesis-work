import React from "react";
import '../pages/registration.css';
import { useNavigate} from 'react-router-dom';

export default function SignUP (){
  
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    navigate('/userprofile');
  };

return(
    <div className="signbody">
    <div className="formdiv">
  <div className="center">
    <form className="formdesign" onSubmit={handleSubmit}>
    <label className="laveldesign">
    Name:
    <input type="text" name="name" />
    </label>

    <label>
    Profession:
    <input type="text" name="profession" />
    </label>

    <label>
    Email
    <input type="email" name="email" />
    </label>
   
    <label>
    Date of Birth:
    <input type="number" name="dateofbith" />
    </label>

    <label>
    Contact Number:
    <input type="number" name="contact" />
    </label>

    <label>
    Password:
    <input type="password" name="password" />
    </label>
 
    <input type="submit" value="Submit" />
    
    </form>
    </div>
    </div>
    </div>
  );
}
    
