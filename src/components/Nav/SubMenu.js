import React from 'react'
import _ from 'lodash'
import { Link } from "@reach/router";

const SubMenu = ({ subs }) => {

    subs = _.orderBy(subs, ['name'], ['asc']);

    const renderSubMenu = subs.map(submenu => 
        <Link to={submenu.link()} className="border-b border-solid border-gray-75 text-black-faint px-4 pt-3 pb-2 block hover:bg-hover hover:text-white text-14px">
            {submenu.name}
        </Link>
    )
    return (
        <div className={`absolute -left-px border-t-2 border-solid border-yellow min-w-250 top-full z-20 overflow-hidden text-base text-gray-750 capitalize text-left bg-white transition duration-500 ease-in hidden group-hover:block max-h-80 group-hover:overflow-auto animate-fadeInUp`}>
            <div className="relative w-full">
                {renderSubMenu}
            </div>
        </div>
    )
}

export default SubMenu