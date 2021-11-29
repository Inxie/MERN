import React, { useState } from  'react';
    
    
const Form = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");  
    const [password, setpassword] = useState("");  
    const [confirmPassword, setconfirmPassword] = useState("");
    
    const createNewUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setfirstName('')
        setlastName('')
        setemail('')
        setpassword('')
        setconfirmPassword('')
    };
    
    return(
        <form onSubmit={ createNewUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setfirstName(e.target.value) } value={ firstName }/>
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setlastName(e.target.value) } value={ lastName }/>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ (e) => setemail(e.target.value) } value={ email }/>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setpassword(e.target.value) } value={ password }/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setconfirmPassword(e.target.value) } value={ confirmPassword }/>
            </div>
            <input type="submit" value="Create New User" />
        </form>
    );
};
    
export default Form;
