import React, { useState } from "react";
import "./App.css";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,
onAuthStateChanged,signOut } from "firebase/auth";
import Title from "./components/Title";
import {auth} from "./firebase"

function App() {
  const [registerEmail,setRegisterEmail] = useState("")
  const [registerPassword,setRegisterPassword] = useState("")
  const [loginEmail,setLoginEmail] = useState("")
  const [loginPassword,setLoginPassword] = useState("")
  const [user,setUser] = useState({});

  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
  });

  const register = async () =>{
    try{
      const user = await createUserWithEmailAndPassword(
        auth,registerEmail,registerPassword
      );
      console.log(user);
    } catch(error){
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };



  return (
    <div className="app">
      {/*Registration Form */}
      <div>
        <h3>User Registration</h3>
        <input placeholder="Email" onChange = {(e)=>{setRegisterEmail(e.target.value);
        }}></input>
        <input placeholder="Password" onChange={(e)=>{setRegisterPassword(e.target.value);
        }}></input>
        <button onClick={register}>Register</button>
      </div>
        {/*Login Form */}
      <div>
        <h3>User Login</h3>
        <input placeholder="Email" onChange={(e)=>{setLoginEmail(e.target.value);}}></input>
        <input placeholder="Password" onChange={(e)=>{setLoginPassword(e.target.value);}}></input>
        <button onClick={login}>Login</button>
      </div>
      <h4>User: </h4>
      {user?.email}
      <button onClick={logout}>Logout</button>
      <Title />
      
    </div>
    
  );
}

export default App;
