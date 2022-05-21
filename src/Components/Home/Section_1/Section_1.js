import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import products from "../../Api"
import "../../styles/section_1.css"
import { products_1 } from '../../Api';
import Card from './Card';





const Section_1 = () => {

    const [data, setData] = useState(products);
    const [data_1, setData_1] = useState(products_1);
    const [load, setLoad] = useState(false);

    const filterProduct = (cat) => {
        const updatedList = products.filter((x) => x.cat === cat);
        const updatedList2 = products_1.filter((x) => x.cat === cat);
        setData(updatedList);
        setData_1(updatedList2);
    }

    const myRef1 = useRef(null);
    const myRef2 = useRef(null);

    const Load = () => {

        setLoad(true);
        // myRef1.current.scrollIntoView();
    }
    const Less = () => {
        setLoad(!true);
        myRef2.current.scrollIntoView();
    }





    const ShowProducts = () => {




        return (
            <>
                <div className='buttons d-flex justify-content-center mb-2 pb-3 '  >
                    <button className='btn btn-outline-none fs-5 filter-btn' onClick={() => { setData(products); setData_1(products_1); }}>All</button>
                    <button className='btn btn-outline-none fs-5 filter-btn' onClick={() => filterProduct("macbook")}>Mac</button>
                    <button className='btn btn-outline-none fs-5 filter-btn' onClick={() => filterProduct("iphone")}>iPhone</button>
                    <button className='btn btn-outline-none fs-5 filter-btn' onClick={() => filterProduct("ipad")}>iPad</button>
                    <button className='btn btn-outline-none fs-5 filter-btn' onClick={() => filterProduct("accessories")}>Accessories</button>

                </div>
                {

                    data.map((products) => {
                        return (
                            <>
                                <Card key={products.id} title={products.title} imgurl={products.imgurl} price={products.price} products={products} />
                            </>
                        )
                    })
                }





                {
                    load &&
                    data_1.map((products) => {
                        return (
                            <>
                                <Card key={products.id} title={products.title} imgurl={products.imgurl} price={products.price} ref={myRef1} products={products} />

                            </>
                        )
                    })
                }


                <div className='btn_div justify-content-center d-flex'>
                    {load === false ? (<button type="button" className="btn btn-link" onClick={Load}  >Load More</button>)
                        : (<button type="button" className="btn btn-link" onClick={Less}>Show Less</button>)}
                </div>

            </>
        )
    }

    return (
        <>
            <div className='container my-2 py-5 ' >
                <div className='row'>
                    <div className='col-12 mb-5' ref={myRef2}>
                        <h1 className='display-6 fw-bolder text-center' >BEST SELLER</h1><hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {<ShowProducts />}
                </div>


            </div>




        </>
    )
}

export default Section_1


















