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
                            <div className="border border-solid bg-gray-50 border-gray-50 py-6 px-3 mt-5">
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
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.9310867112495!2d39.25408681434594!3d-6.778242068170094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4c3fd505f519%3A0xba001684e0f62d59!2sSpanish+Tiles!5e0!3m2!1sen!2stz!4v1566197771293!5m2!1sen!2stz" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen title="Ramani Investment"></iframe>
            </div>
        </Layout>
    )
}

export default Contacts
