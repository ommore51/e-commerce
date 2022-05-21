import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Header from '../Components/Home/Header/Header';
import { loginUser } from './authSlice';
import { StyledFrom } from './styledForm';
import "./registerform.css"
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()



    const auth = useSelector((state) => state.auth);

    console.log(auth)

    useEffect(() => {
        if (auth._id) {
            navigate("/Cart")
        }
    }, [auth._id, navigate])


    const [user, setUser] = useState({
        email: "",
        password: "",

    });

    console.log("user:", user)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(user))
    };


    return (
        <>
            <div className='register_nav'>
                <Header />
            </div>
            <StyledFrom onSubmit={handleSubmit}>
                <h2 className='text-center'>Login</h2>
                <input type="email" placeholder='email' onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <input type="password" placeholder='password' onChange={(e) => setUser({ ...user, password: e.target.value })} />
                <button>{auth.loginStatus === "pending" ? 'Submitting' : 'Login'}</button>

                {auth.loginStatus === "rejected" ? (<p>{auth.loginError}</p>) : null}


            </StyledFrom>
        </>
    )
}

export default LoginForm