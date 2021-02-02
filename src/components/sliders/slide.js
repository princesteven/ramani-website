import React from 'react'
import bg from '../../images/bg/bg.jpg'

const Slide = ({ image, classes, subtitle, title }) => {
    return (
        <div className="relative py-16 bg-fixed" style={{backgroundImage: `url(${bg})`, boxShadow: `inset 0 0 0 2000px rgba(9, 20, 38, 0.7)`}}>
            <div className={`w-full ${classes} overflow-hidden font-oswald`}>
                <div className="text-white py-5">
                    <h2 className={`pt-3 font-semibold tracking-wide text-58px uppercase`}>{title}</h2>
                </div>
                <div className="py-5">
                    <h2 className={`text-white text-18px pt-3 font-medium tracking-widest capitalize`}>Home &#62; <span className="text-yellow">{subtitle}</span></h2>
                </div>
            </div>
        </div>
    )
}

export default Slide
