import React from 'react'
import _ from 'lodash'
import Layout from './components/layout'
import Section from './components/Section'
import { team } from "./components/database";
import ReactReadMoreReadLess from "react-read-more-read-less";

const Team = () => {
    const members = _.orderBy(team, ['hierarchy', 'asc'])

    return (
        <Layout title="Team" subtitle="Team">
            <Section
                classes="bg-white"
            >
                <div className="md:grid md:grid-cols-3 md:gap-5">
                    {
                        members.map( member =>
                            <div className="bg-white mt-3 shadow-lg">
                                <img src={member.image} alt={member.names} className="w-full" />
                                <div className="py-4 px-2">
                                    <div className="relative text-center text-22px uppercase tracking-wide text-transparent-black font-oswald font-semibold">
                                        {member.names}
                                        <div className="mt-3">
                                            <div className="absolute left-0 right-0 mt-0 mb-0 mr-auto ml-auto bg-yellow h-0.5 w-10 z-10"></div>
                                            <div className="absolute left-0 right-0 mt-0 mb-0 mr-auto ml-auto bg-gray-400 h-0.5 w-20"></div>
                                        </div>
                                    </div>
                                    <div className="mt-6 text-center text-yellow capitalize font-oswald">
                                        <span className="text-22px font-semibold">{member.position}</span>
                                        <div className="text-22px font-semibold">{member.location}</div>
                                    </div>
                                    <div className="mt-6 font-poppins text-left text-gray-500">
                                    <ReactReadMoreReadLess
                                        charLimit={100}
                                        readMoreText="Read more ▼"
                                        readLessText="Read less ▲"
                                        ellipsis="....."
                                        readMoreStyle={{color: '#FFCC00', cursor: 'pointer'}}
                                        readLessStyle={{color: '#FFA73C', cursor: 'pointer'}}
                                    >
                                        {member.description}
                                    </ReactReadMoreReadLess>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </Section>
        </Layout>
    )
}

export default Team
