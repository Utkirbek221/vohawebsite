import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from '../Pages/Main'
import Location from './Location'
import Architecture from './Architecture'
import SwipBtn from './SwipBtn'
import City from './City'
import Consultation from './Consultation'

export default function Home() {

    return (
        <>
            <div className=''>
                <Header />
                <Main/>
                <Location/>
                <Architecture/>
                <SwipBtn/>
                <City/>
                <Consultation/>
                <Footer/>
            </div>
        </>
    )
}
