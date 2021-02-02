import React from 'react'
import { Link } from "@reach/router";
import Layout from './components/layout'
import Section from './components/Section'
import Statistics from './components/Statistics'
import RoundedBottomBorder from './components/roundedBottomBorder'

const About = () => {
    const ramani_statistics = [
        {
          'figure': '3',
          'description': 'Ongoing Projects',
        },
        {
          'figure': '100+',
          'description': 'Happy Clients',
        },
        {
          'figure': '12+',
          'description': 'Years of Experience',
        },
    ]

    const ramani_features = [
        {
            'name': 'Team of proffesionals',
            'description': <p>At Ramani Investment Ltd, we pride ourselves in having a group of qualified and dedicated professionals, who are experienced in managing and running Fleet operations in both Mining and Construction operations. <Link to="team" className="text-yellow hover:text-hover">Our team</Link> prides itself in providing the best customer experience through offering reliability, experience, delivery and all round communication with clients during operations. We are happy to introduce to you, our team that ensures Ramani’s success in any project undertaken.</p>
        },
        {
            'name': 'Reliable Machinery',
            'description': <p>Ramani runs a fleet of durable and well maintained machinery, ready to undertake any task. We find joy in supplying our clients with well maintained machines by keeping them well maintained during operations with regular planned maintenance to ensure that our client’s targets are met, so they can concentrate on more important matters like higher profit margins.</p>
        },
        {
            'name': 'Affordable Prices',
            'description': <p>Ramani Investment offers quality service at an affordable pricing that is proportional to our client’s needs to keep them smiling at all times.</p>
        },
        {
            'name': 'Reliable Transportation',
            'description': <p>Are you looking for quality transportation for your Equipment and Machinery? Look no further, Ramani Investment has everything you need. We offer timely delivery, guaranteed safety and effective communication so your precious cargo can get where you want it to get without worries.</p>
        },
        {
            'name': 'Seeking Market Leadership',
            'description': <p>We aspire to elevate the rental sector by being the most competitive company in Tanzania by reaching our customers and delivering on their interests, exceeding their expectations and walking the extra mile to set an example of how timely and satisfactory services should be delivered.</p>
        },
        {
            'name': 'We\'re Here to stay',
            'description': <p>Ramani Investment have been in business for over 12 years serving over 100 clients making us one of the top machine rental companies in Tanzania. Through our incredible journey of growth and service, we have matured into being a trustworthy, reliable and effective company. <span className="font-semibold">Ramani Aims to Please!!!</span></p>
        },
    ]

    return (
        <Layout title="About" subtitle="About">
            <Section
                classes="bg-gray-100"
                title={
                  {
                    section1:"About ",
                    section2:"Us"
                  }
                }
            >
                <p className="font-poppins text-left tracking-wide leading-loose text-gray-700">
                    Ramani Investment Ltd is a leading provider of rental services of Earth moving equipment duly registered and incorporated under the laws of Tanzania in East Africa. The company was formed solely to provide Rental of Equipment’s in Mining, Agriculture & Civil construction market in Tanzania and East Africa. We rent equipment so that our customers can focus on what they do best rather than maintaining and servicing equipment they may use only once a year. We make sure the equipment is there when it needs to be and is ready to work immediately and efficiently.
                </p>
                <Statistics statistics={ramani_statistics} />
            </Section>
            <Section 
                classes="bg-white"
                title={
                    {
                        section1: "Why",
                        section2: "Choose Us",
                    }
                }
            >
                <div className="md:grid md:grid-cols-3 md:gap-3">
                    {ramani_features.map( feature => 
                        <div>
                            <span className="tracking-wide font-oswald text-24px font-semibold capitalize text-transparent-black">
                                {feature.name}
                                <RoundedBottomBorder />
                            </span>
                            <span className="tracking-wide leading-relaxed md:leading-loose font-poppins text-gray-500">
                                {feature.description}
                            </span>
                        </div>
                    )}
                </div>
            </Section>
        </Layout>
    )
}

export default About
