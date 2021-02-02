import React from 'react'
import Layout from './components/layout'
import Section from './components/Section'
import { contacts } from './components/database'

const Contacts = () => {
    return (
        <Layout title="contacts" subtitle="contacts">
            <Section
                classes="bg-white"
            >
                <div className="md:grid md:grid-cols-3 md:gap-3">
                    {
                        contacts.map( contact =>
                            <div className="border border-solid bg-gray-100 border-gray-100 py-6 px-3 mt-5 shadow-md">
                                <div className="flex space-x-2">
                                    <div className="bg-yellow p-3 rounded-full h-16 w-16 flex items-center justify-center">
                                        { contact.icon }
                                    </div>
                                    <div>
                                        <div className="text-left uppercase font-oswald text-normal font-semibold text-transparent-black">
                                            <span>{contact.title}</span>
                                        </div>
                                        <div className="font-poppins text-14px text-gray-600 mt 2">
                                            {
                                                contact.content ? 
                                                    contact.content.map( content => 
                                                        <p>{content}</p>
                                                    ) : 
                                                    <span>
                                                        {
                                                            contact['content-keys'].map( (key,index) => 
                                                                <p>{key} : {contact['content-values'][index]}</p>
                                                            )
                                                        }
                                                    </span>
                                            }
                                        </div>
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

export default Contacts
