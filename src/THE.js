import React from 'react'
import Layout from './components/layout'
import Section from './components/Section'
import RoundedBottomBorder from './components/roundedBottomBorder'

const THE = () => {
    return (
        <Layout title="Heavy Equipment Transportation" subtitle="Heavy Equipment Transportation">
            <Section
                classes="bg-white"
                title={
                    {
                        section1: "Heavy Equipment",
                        section2: "Transportation",
                    }
                }
            >
                <div className="text-left font-poppins text-gray-500 leading-loose">
                    <p>Ramani Investment Co Ltd has been servicing and transporting heavy equipment since 2007. All our trucks are GPS equipped to ensure your delivery arrives on time, without a hitch. What you need is to provide correct dimensions and Weight.</p>
                    <div className="mt-3">
                        <span className="font-oswald text-3xl text-transparent-black capitalize font-medium tracking-wide">Licensed and Insured</span>
                        <RoundedBottomBorder />
                    </div>
                    <p>Our professionally trained drivers are ready to load and deliver your equipment in time. Specializing in construction equipment transportation, our company can handle up to 80,000Kg in payload capacity with special semitrailers lowbed with Argo-Boggie suspensions. Our services are properly licensed and insured through every step of the process, from loading your equipment to delivering it safely.</p>
                </div>
            </Section>
        </Layout>
    )
}

export default THE
