import React, { useState } from 'react'
import ScreenNav from '../Nav/ScreenNav'
import MobileNav from '../Nav/MobileNav'
import logo from '../../images/logo.jpg'

const Nav = () => {
    const [showScroll, setShowScroll] = useState(false)

    const checkScroll = () => {
        if (!showScroll && window.pageYOffset > 100){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 100){
            setShowScroll(false)
        }
    };

    window.addEventListener('scroll', checkScroll)


    return (
        <nav className={`w-full px-2 shadow-header z-10 text-normal ${showScroll ? 'fixed bg-transparent-black-animated shadow-header' : 'relative'}`}>
            <div className="grid grid-cols-3 gap-2">
                <div className="py-1 lg:py-2 ml-12 lg:ml-24 md:ml-16">
                    <img src={logo} className="lg:w-40 md:w-40 sm:h-full" alt="logo" />
                </div>
                <div className="col-span-2 justify-self-end sm:mt-auto sm:mb-auto md:justify-self-center font-oswald">
                    <ScreenNav />
                    <MobileNav />
                </div>
            </div>
        </nav>
    )
}

export default Nav
