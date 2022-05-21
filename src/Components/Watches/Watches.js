import React from 'react'
import { watches } from '../Api'
import Header from '../Home/Header/Header'
import Card from '../Home/Section_1/Card'

const Watches = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='row justify-content-center pt-5'>

                    {
                        watches.map((products) => {
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

export default Watches