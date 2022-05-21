import React from 'react'
import "../../styles/carousel_card.css"

const Card = ({ imgurl, title, price }) => {
    return (
        <>

            <div className='container carousel_card_main '>
                <div className='row'>

                    <div className='carousel_card mt-3 mb-5'>
                        <div className=' carousel_card_img'>
                            <img src={imgurl} alt="1" ></img> </div>
                        <div className='carousel_card_content d-flex flex-column mt-3 '><h6>{title}</h6>
                            <p className='mt-5'>₹{price}</p></div>

                    </div>
                </div>
            </div>



        </>
    )
}

export default Card





