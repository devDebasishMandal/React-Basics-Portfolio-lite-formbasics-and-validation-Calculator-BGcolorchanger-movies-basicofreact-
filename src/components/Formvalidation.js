import React, { useState } from "react";

const Formvalidation = () => {
  // to maintaine the variables we can do two things
  // maintain many useSate variables.
  //  const[name,setName]=useState("");
  //  const[email,setEmail]=useState("");
  //  const[password,setPassword]=useState("");
  //  const[confirmPassword,setConfirmPassword]=useState("");
  // create an Object for the user

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const[message,setMessage]=useState("");
// when there is object state variable destructure it 

const {name,email,password,confirmPassword}=user;
// insted of using seperate function for all the state variables
// function handleName(e){
// setUser({...user,name:e.target.value});
// }
// we can use a single function to update the whole user
function handleUser(e){

// setUser({ ...user, name: e.target.value });
// setUser({ ...user, email: e.target.value });
// setUser({ ...user, password: e.target.value });
// OR
// e.target.value --- gives the updated value
// e.target.name --- give the property of the object which is updated 
// so to change the keys of an object we ned to put the key in array 
let key=e.target.name;
setUser({...user,[key]:e.target.value});

// console.log(e.target.name, e.target.value);

}


function submitUser(e){
e.preventDefault();
// basic Validation
if(!name ||!email ||!password || !confirmPassword){
  alert("Please Fill all the fields");
}else if(password !== confirmPassword){
  alert("password does not match");
}else{
  setMessage("User Registred Successfully");
}
}


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
    {message ? <h1>Hey {name} Your registration is successfull..!</h1>:null}
      <h1>Form Validation</h1>
      <form onSubmit={submitUser}>
        <input type="text" placeholder="Name" onChange={handleUser} value={name} name="name"/>
        <br />
        <input type="email" placeholder="Email" onChange={handleUser} value={email} name="email"  />
        <br />
        <input type="password" placeholder="New Password" onChange={handleUser} value={password} name="password"/>
        <br />
        <input type="password" placeholder="Confirm Password" onChange={handleUser} value={confirmPassword} name="confirmPassword" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Formvalidation;
