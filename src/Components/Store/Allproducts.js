import React from 'react'
import Card from '../Home/Section_1/Card'


const Allproducts = ({ allproducts }) => {






    return (
        <>
            <div className='container'>
                <div className='row justify-content-center pt-5'>

                    {
                        allproducts.map((products) => {
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

export default Allproducts