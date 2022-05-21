import React from 'react'
import "../../styles/section_3.css"

const Section_3 = ({ title, content, imgurl }) => {
    return (
        <>

            <div className="card m-1 p-3 d-flex justify-content-center align-items-center no-border">
                <img src={imgurl} className="card-img-top section3_img "></img>
                <div className="card-body text-items-center w-100">
                    <h5 className="card-title text-align-justify">{title}</h5>
                    <p className="card-text ">{content}</p>

                </div>
            </div>




        </>
    )
}

export default Section_3