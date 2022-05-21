import React from 'react'
import Card from '../Section_4/Card'
import '../../styles//section_4.css'
import { featured, featured_1 } from '../../Api'


const Section_4 = () => {
    return (
        <>
            <div className='section_4_heading'><h1>Featured Products</h1></div><hr></hr>

            <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-inner ">

                    <div className="carousel-item active ">
                        <div className='carousel_main d-flex justify-content-center '>
                            {featured.map((feature) => {
                                return (
                                    <>
                                        < Card title={feature.title} imgurl={feature.imgurl} price={feature.price} />
                                    </>
                                )

                            })}
                        </div>
                    </div>

                    <div className="carousel-item  ">
                        <div className='carousel_main d-flex justify-content-center'>
                            {featured_1.map((feature_1) => {
                                return (
                                    <>
                                        < Card title={feature_1.title} imgurl={feature_1.imgurl} price={feature_1.price} />
                                    </>
                                )

                            })}


                        </div>
                    </div>
                </div>


                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" >
                    <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="90" fill="black" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg></span>
                    <span className="visually-hidden"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="90" fill="black" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <hr></hr>
        </>
    )
}

export default Section_4