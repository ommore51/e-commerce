import React from 'react'
import "../../styles/section_2.css"
import section_2_bg_image from "../../../Images/miscellaneous/2_corousel.png"


const Section_2 = () => {
    return (
        <>

            <div className='section_2 '>
                <div className='section_2_content container'>

                    <h3 className='section_2_h3'>iPhone 6 Plus</h3>
                    <p className='section_2_p'>Performance and design. Taken right to the edge.</p>
                    <button className='btn btn-link section_2_btn'>Shop Now</button>


                </div>

                <div className='section_2_bg_img'> <img src={section_2_bg_image} /></div>
            </div>




        </>
    )
}

export default Section_2