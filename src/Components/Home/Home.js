import React, { useEffect } from 'react'
import Section_3 from '../Home/Section 3/Section_3'
import Header from './Header/Header'
import Section_1 from './Section_1/Section_1'
import Section_2 from './Section_2/Section_2'
import { section_3 } from '../Api'
import "../styles//home.css"
import Section_4 from './Section_4/Section_4'
import Footer from './Footer'
import Background from './Header/Background'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <Header />
            <Background />
            <Section_1 />
            <Section_2 />

            <div className='card_group container  my-2 py-5 d-flex mt-3 '>{
                section_3.map(section3 => {
                    return (
                        <Section_3 title={section3.title} imgurl={section3.imgurl} content={section3.content} />
                    )
                })


            }
            </div>
            <Section_4 />
            <Footer />
        </>
    )
}

export default Home