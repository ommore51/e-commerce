import React, { useEffect, useState } from 'react'
import { FaUserAlt, FaBriefcase, FaSearch } from "react-icons/fa";
import "../../styles/header.css"
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {



    const [qty, setQty] = useState([]);

    const cartQty = useSelector((state) => state.cart);

    useEffect(() => {
        setQty(cartQty);
        console.log(cartQty)
    }, [cartQty])


    return (
        <>
            <div className='header'>

                <div className='header_1'>
                    <select className='header_1_lang'><option>EN</option> </select>
                    <select className='header_1_currency'><option>$</option> </select>
                </div>

                <div className='header_2'>
                    <div className='header_2_profile'> <FaUserAlt /><p>My profile</p></div>
                    <div className='header_2_cart'> <Link to='/Cart'><FaBriefcase /></Link><p>{cartQty.cartItems.length} items</p></div>
                    <div className='header_2_search'><FaSearch /></div>
                </div>

            </div>
            <Nav />

        </>
    )
}

export default Header




