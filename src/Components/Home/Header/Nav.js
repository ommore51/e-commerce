import React, { useEffect, useState } from 'react'
import "../../styles/nav.css"
import logo from "../../../Images/Web/iSHOP Logo.svg"
import { Link, NavLink } from 'react-router-dom'
import { FaUserAlt, FaBriefcase, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from "../../../AuthSlice/authSlice"
import { toast } from 'react-toastify';


const Nav = () => {

    const [qty, setQty] = useState([]);

    const dispatch = useDispatch();

    const cartQty = useSelector((state) => state.cart);
    const auth = useSelector((state) => state.auth)

    useEffect(() => {
        setQty(cartQty);
        console.log(cartQty)
    }, [cartQty])


    return (
        <>


            <nav className="navbar navbar-expand-lg navbar-light  sticky-top bg-light">

                <div className="container d-flex flex-lg-column justify-content-between align-items-center">
                    <div className='d-flex align-items-center checkout_login_register'>
                        <Link to="/"> <div className='logo'><img src={logo}></img></div></Link>
                        <div className='d_left'>  {
                            auth._id ? <div className='logout' onClick={() => {
                                dispatch(logoutUser(null));
                                toast.warning("Logged Out", { position: "bottom-left" })
                            }}>
                                Logout</div> : <div className="login_register"><Link to="/login">Login</Link><Link to="/Register">Register</Link></div>
                        }</div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarTogglerDemo02">

                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item responsive_header responsive_header_li d-flex justify-content-between my-3">

                                <div className='header_2_cart m-0'> <Link to='/Cart'><FaBriefcase /></Link><p>{cartQty.cartItems.length} items</p></div>
                                <div className='header_2_profile'> <FaUserAlt /><p>My profile</p></div>
                                <div className='header_1'>
                                    <select className='header_1_lang'><option>EN</option> </select>
                                    <select className='header_1_currency m-0'><option>$</option> </select>
                                </div>
                            </li>
                            <li className="nav-item responsive_header_search position-relative mb-2"><input type="text" className='responsive_search_input w-100' /> <FaSearch className='responsive_search' /></li>
                            <li className="nav-item ">
                                <NavLink to="/" exact="true" activeclassname="active">HOME </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink to="/store" activeclassname="active" > STORE</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/iphone" > IPHONE</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink to="/ipad" > WATCHES</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/macbook" > MACBOOK</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink to="/accessories" > HEADPHONES</NavLink>

                            </li>

                        </ul>
                    </div>

                </div>
            </nav >



        </>
    )
}

export default Nav


