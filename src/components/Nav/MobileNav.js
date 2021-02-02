import React, { useState } from 'react'
import { menus } from "../database";
import { Link } from "@reach/router";
import SubMenu from "./SubMenu";
import { Divide as Hamburger } from 'hamburger-react'

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [showScroll, setShowScroll] = useState(false)

    const checkScroll = () => {
        if (!showScroll && window.pageYOffset > 100){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 100){
            setShowScroll(false)
        }
    };

    window.addEventListener('scroll', checkScroll)

    const renderMenu = menus.map(menu => 
        <li className="relative group py-6">
            <Link to={menu.children ? '#' : menu.link} className={`hover:text-hover ${menu.children && 'flex justify-between'}`}>
                <span>{menu.name}</span>
                {menu.children &&
                    <svg className="w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg> 
                }
            </Link>
            {menu.children && <SubMenu subs={menu.children} /> }
        </li>    
    )

    return (
        <div className="block md:hidden">
            <div className="border border-gray-300 border-solid rounded">
                <Hamburger toggled={isOpen} toggle={setIsOpen} color="#FFF" />
            </div>
            <div className={`absolute mt-2 left-2 right-2 ${isOpen ? 'block' : 'hidden'}`}>
                <div className={`${showScroll ? 'bg-transparent-black' : 'bg-black-half-transparent'} h-full w-12/12 text-white uppercase px-4`}>
                    <ul>
                        { renderMenu }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileNav
