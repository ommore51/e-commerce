import React from 'react'
import "../styles/footer.css"
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import mastercard from "../../Images/icons8-mastercard.svg"
import visa from "../../Images/icons8-visa.svg"

const Footer = () => {
    return (
        <>
            <div className='footer '>

                <div className='footer_1 '>

                    <div className='container my-2 py-5 '>
                        <div className='row '>
                            <div className='col-lg-4 '>
                                <h3 className='ishop mt-3'>iSHOP</h3>
                                <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
                            </div>
                            <div className='col-lg-4'>
                                <h3 className="mt-3">Follow Us</h3>
                                <p className='mt-4 '> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
                                <div className='icons'>
                                    <div> <FaFacebookSquare /></div>
                                    <div className="icons_twit"> <FaTwitter /></div>

                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <h3 className="mt-3">Contact Us</h3>
                                <p className='mt-4'>iShop: address @building 124 Call us now: 0123-456-789 Email: support@whatever.com</p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='footer_2'>

                    <div className='container my-2 py-5 d-flex '>
                        <div className='row'>
                            <div className='col-lg-2 col-sm-4 col-md-4 '>
                                <h6 className='mb-4 mt-4'>Information</h6>
                                <p>About Us</p>
                                <p>Information</p>
                                <p>Privacy Policy</p>
                                <p>Terms & Conditions</p>
                            </div>
                            <div className='col-lg-2 col-sm-4 col-md-4'>
                                <h6 className='mb-4 mt-4'>Service</h6>
                                <p>About Us</p>
                                <p>Information</p>
                                <p>Privacy Policy</p>
                                <p>Terms & Conditions</p>
                            </div>
                            <div className='col-lg-2 col-sm-4 col-md-4'>
                                <h6 className='mb-4 mt-4'>Extras</h6>
                                <p>About Us</p>
                                <p>Information</p>
                                <p>Privacy Policy</p>
                                <p>Terms & Conditions</p>
                            </div>
                            <div className='col-lg-2 col-sm-4 col-md-4'>
                                <h6 className='mb-4 mt-4'>My Account</h6>
                                <p>About Us</p>
                                <p>Information</p>
                                <p>Privacy Policy</p>
                                <p>Terms & Conditions</p>
                            </div>
                            <div className='col-lg-2 col-sm-4 col-md-4'>
                                <h6 className='mb-4 mt-4'>Userful Links</h6>
                                <p>About Us</p>
                                <p>Information</p>
                                <p>Privacy Policy</p>
                                <p>Terms & Conditions</p>
                            </div>
                            <div className='col-lg-2 col-sm-4 col-md-4'>
                                <h6 className='mb-4 mt-4'>Our Offices</h6>
                                <p>About Us</p>
                                <p>Information</p>
                                <p>Privacy Policy</p>
                                <p>Terms & Conditions</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr></hr>
                <div className='footer_3 ' >
                    <img src={mastercard} alt="1"></img>
                    <img src={visa} alt="1"></img></div>



            </div>





        </>
    )
}

export default Footer