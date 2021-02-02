import React from 'react'
import Layout from './components/layout'
import Section from './components/Section'

const HL = () => {
    return (
        <Layout title="Hiring &amp; Leasing Of Earth moving equipment" subtitle="Hiring &amp; Leasing Of Earth moving equipment">
            <Section
                classes="bg-white"
                title={
                    {
                        section1: "Rental",
                        section2: "Services",
                    }
                }
            >
                <div className="text-left font-poppins text-gray-500 leading-loose">
                    <p>Ramani Investment Ltd offers individual rental services of Earth Moving Equipment and Machinery to clients who are seeking to rent one or more machines for various projects. This allows small – scale clients to rip the benefits that Ramani offers through its services by offering affordable options to these clients.</p>
                </div>
            </Section>
        </Layout>
    )
}

export default HL
