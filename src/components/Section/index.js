import React from 'react'
import Title from './sectionTitle'

const Section = ({ classes, title, children }) => {
    return (
        <div className={`w-full py-10 px-3 md:px-28 ${classes}`}>
            {title && <Title section1={title.section1} section2={title.section2} classes={title.classes && title.classes} />}
            {children}
        </div>
    )
}

export default Section
