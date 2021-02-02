import React from 'react'
import { menus } from "../database";
import { Link } from "@reach/router";
import SubMenu from './SubMenu'

const ScreenNav = () => {

    const renderMenu = menus.map(menu => 
        <li className="relative group py-6">
            <Link to={menu.children ? '#' : menu.link} className={`hover:text-hover ${menu.children && 'flex space-x-1'}`}>
                <span>{menu.name}</span>
                {menu.children &&
                    <svg className="w-4 align-text-bottom" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg> 
                }
            </Link>
            {menu.children && <SubMenu subs={menu.children} /> }
        </li>    
    )
    return (
        <>
            <ul className="hidden h-full relative md:block md:flex space-x-5 uppercase text-gray-50">
                { renderMenu }
            </ul>
        </>
    )
}

export default ScreenNav
