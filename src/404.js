import React from 'react'
import Layout from './components/layout'
import Section from './components/Section'

const NotFound = () => {
    return (
        <Layout title="Page Not Found" subtitle="404">
            <Section
                classes="bg-hover"
            >
                <div className="text-center">
                    <div className="font-oswald text-250px font-semibold text-transparent-black">404</div>
                    <div className="font-poppins tracking-widest leading-loose text-18px">Page was not found</div>
                    <button className="bg-yellow hover:bg-hover text-white font-poppins text-18px tracking-wider py-3 px-3 uppercase mt-4">
                        Go Back Home
                    </button>
                </div>
            </Section>
        </Layout>
    )
}

export default NotFound
