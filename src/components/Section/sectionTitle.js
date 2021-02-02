import React from 'react'

const SectionTitle = ({ section1, section2, classes }) => {
    return (
        <div className="text-center py-10">
            <h2 className={`text-yellow text-5xl uppercase font-oswald font-semibold tracking-wide ${classes}`}><span className="text-transparent-black">{ section1 }</span> { section2 }</h2>
        </div>
    )
}

export default SectionTitle
