import React from 'react'
import "../styles/store_nav.css"

const Store_nav = ({ title }) => {
    return (
        <>
            <div className='container'>
                <div className='row store_nav mt-3 mb-5'>
                    <div className='col-lg-12 d-flex justify-content-center align-items-center mt-3 mb-3'>
                        <a>{title}</a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Store_nav