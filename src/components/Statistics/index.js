import React from 'react'

const Statistics = ({ statistics }) => {
    return (
        <div className="md:grid md:grid-cols-3 md:gap-1 mt-3">
            {
                statistics.map( statistics => 
                    <div className="flex flex-col mt-2">
                      <span className="text-yellow text-42px text-left font-semibold font-oswald">{statistics.figure}</span>
                      <span className="text-transparent-black uppercase text-24px font-semibold tracking-wider font-oswald">{statistics.description}</span>
                    </div>
                  )
            }
        </div>
    )
}

export default Statistics
