import React from 'react'
import "../../styles/background.css"
import home_bg_image from "../../../Images/miscellaneous/2_corousel.png"

const Background = () => {
    return (
        <>
            <div className='home_bg'>
                <div className='home_bg_img'> <img src={home_bg_image}></img></div>
            </div>
        </>
    )
}

export default Background