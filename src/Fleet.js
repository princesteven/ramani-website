import React from 'react'
import Layout from './components/layout'
import Section from './components/Section'
import { menus, fleet_details, pdf } from "./components/database";
import RoundedBottomBorder from './components/roundedBottomBorder'

const Fleet = ({ fleetID }) => {
    const fleets = menus.filter( fleet => fleet.name.toLowerCase() === 'our fleet' )
    let fleet = fleets.map( fleet => fleet.children)
    fleet = fleet[0].filter( vehicle => vehicle.id === fleetID )
    let fleetDetails = fleet_details.filter( fleet => fleet.id === fleetID)
    console.log('fleet details', fleetDetails[0].machineries)
    
    
    return (
        <Layout title={fleet[0].name} subtitle="Our fleet">
            {
                fleetDetails[0].machineries.map( (fleet, index) => 
                <Section
                    classes={index%2 === 0 ? 'bg-white' : 'bg-gray-50' }
                >
                    <div className="md:grid md:grid-cols-3 md:gap-2">
                        <div className="md:col-span-2">
                            <div className="font-oswald text-left text-transparent-black text-3xl tracking-wide font-semibold mb-3 capitalize">
                                {fleet.title}
                            </div>
                            <div className="font-poppins text-left mb-3 text-gray-400 tracking-wide leading-loose">
                                {fleet.description}
                            </div>
                            {fleet.specsKey ? 
                                <div>
                                    <div className="font-oswald text-left text-transparent-black text-3xl tracking-wide font-semibold mb-3 capitalize">
                                        <span className="mb-1">Specifications</span>
                                        <RoundedBottomBorder />
                                    </div>
                                    {
                                        fleet.specsKey.map( (specsKey, index) => 
                                            <div className="grid grid-cols-2 gap-1 font-poppins text-gray-400 text-left">
                                                <div>{specsKey}</div>
                                                <div>
                                                    {
                                                        fleet.specsValues[index].map( specsValues => 
                                                            <div>{specsValues}</div>    
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }
                                    {fleet.docs ? 
                                        <div className="mt-3">
                                            <span className="font-poppins capitalize font-semibold text-normal text-gray-400">Attachment: </span>
                                            <a href={fleet.docs} target="_blank" rel="noreferrer">
                                                <img src={pdf} alt="pdf-icon"/>
                                            </a>
                                        </div>
                                    : ''}
                                </div>
                            : ''}
                        </div>
                        <div className="overflow-hidden">
                            <img src={fleet.image} alt={fleet.title} className="hover:scale-110 transition duration-500 ease-in-out transform hover:cursor-pointer" />
                        </div>
                    </div>
                </Section>
                )
            }
        </Layout>
    )
}

export default Fleet
