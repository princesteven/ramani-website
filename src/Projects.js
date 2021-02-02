import React from 'react'
import Layout from './components/layout'
import Section from './components/Section'
import { projects } from "./components/database";

const Projects = () => {
    return (
        <Layout title="Projects Undertaken" subtitle="Projects">
            <Section
                classes="bg-white"
            >
                <div className="font-poppins text-left">
                    <span className="font-semibold text-normal text-gray-600">
                        Ramani Investment Ltd are civil contructors assocoiated with bringing to life multiple projects across different regions in Tanzania. Some of these projects we have been involved in includes: -
                    </span>
                    <div className="md:grid md:grid-cols-2 md:gap-3 mt-8">
                        {
                            projects.map( project => 
                                <div className="flex space-x-4 border-b border-gray-400 border-solid mt-4 py-3 px-3">
                                    <div className="mt-auto mb-auto ml-0 mr-0 text-gray-500">
                                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <div className="text-gray-600 text-normal">
                                        {project.description}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Section>
        </Layout>
    )
}

export default Projects
