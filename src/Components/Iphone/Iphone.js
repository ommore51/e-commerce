import React from 'react'
import { iphone } from '../Api'
import Header from '../Home/Header/Header'
import Card from '../Home/Section_1/Card'

const Iphone = () => {
    return (
        <>
            <Header />

            <div className='container'>
                <div className='row justify-content-center pt-5'>

                    {
                        iphone.map((products) => {
                            return (
                                <>
                                    <Card key={products.id} title={products.title} imgurl={products.imgurl} price={products.price} products={products} />
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Iphone