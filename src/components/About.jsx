import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AnimationCompAbout from './AnimationCompAbout'
import ModelInfoCont from './ModelInfoCont'
import FrequentlyCont from './FrequentlyCont'

function About() {
    return (

        <div className='flex flex-col h-[100vh]'>
            <Header />
            <main>
                <div className='bg-[#101010] flex flex-col justify-start  gap-5 pb-10 min-h-[100vh]'>
                    <AnimationCompAbout/>
                    <ModelInfoCont/>
                    <FrequentlyCont/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default About
