import React from 'react'
import Header from './Header';
import Footer from './Footer'

const Index = ({ children, title, subtitle }) => {
    return (
        <div>
            <Header title={title} subtitle={subtitle} />

            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Index