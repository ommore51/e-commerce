import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Header from '../Components/Home/Header/Header';
import { registerUser } from './authSlice';
import { StyledFrom } from './styledForm';
import "./registerform.css"
import { useNavigate } from 'react-router-dom';


const RegisterForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const auth = useSelector((state) => state.auth);

    console.log(auth)



    useEffect(() => {
        if (auth._id) {
            navigate("/Cart");
        }
    }, [auth._id, navigate])

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",

    });

    console.log("user:", user)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(user))
    };


    return (
        <>
            <div className='register_nav'>
                <Header />
            </div>
            <StyledFrom onSubmit={handleSubmit}>
                <h2 className='text-center'>Register</h2>
                <input type="text" placeholder='name' onChange={(e) => setUser({ ...user, name: e.target.value })} />
                <input type="email" placeholder='email' onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <input type="password" placeholder='password' onChange={(e) => setUser({ ...user, password: e.target.value })} />
                <button>{auth.registerStatus === "pending" ? 'Submitting' : 'Register'}</button>
                {auth.registerStatus === "rejected" ? (<p>{auth.registerError}</p>) : null}


            </StyledFrom>
        </>
    )
}

export default RegisterForm