import React from 'react'
import Header from './Header';
import Footer from './Footer'

const Index = ({ children, title, subtitle }) => {
    return (
        <div className="relative">
            <Header title={title} subtitle={subtitle} />

            <div className="content">
                {children}
            </div>
            <Footer />
            <div className="absolute bg-yellow hover:bg-transparent-black text-white hover:text-yellow hover:cursor-pointer h-6 w-6 rounded-full right-4 bottom-4 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path></svg>
                {/* <div className="">
                </div> */}
            </div>
        </div>
    )
}

export default Index