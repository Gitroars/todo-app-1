import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';


const Register = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
  
    const onSubmit = async (e) => {
      e.preventDefault()
      await createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
          const user = userCredential.user;
          console.log(user);
          navigate("/login")
        })
        .catch((error)=>{
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode,errorMessage)
        });
    }

    return (
        <main>
            <section>
                <div>
                    <div>
                    <form>
                            <div>
                                <label htmlFor='email-address'>
                                    Email Address
                                </label>
                                <input
                                type = "email"
                                label="Email address"
                                value={email}
                                onChange = {(e)=> setEmail(e.target.value)}
                                required
                                placeholder='Email address'>
                                </input>
                            </div>
                            <div>
                                <label htmlFor='password'>
                                    Password
                                </label>
                                <input
                                type = "password"
                                label="Password"
                                value={password}
                                onChange = {(e)=> setPassword(e.target.value)}
                                required
                                placeholder='Password'>
                                </input>
                            </div>
                            <button
                            type="submit"
                            onClick={onSubmit}>Register</button>
                        </form>
                        <p>
                            Alreadyd registered?{''}
                            <NavLink to="/login">
                                Login
                            </NavLink>
                        </p>
                    </div>
                </div>
            </section>
        </main>

        
    )

}
  





export default Register