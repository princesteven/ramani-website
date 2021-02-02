import React from 'react'
import Clients from '../clients'
import { Link } from "@reach/router";
import RoundedBottomBorder from '../roundedBottomBorder'

const Footer = () => {

    let date = new Date()

    return (
        <div className="footer">
            <Clients />

            <div className="bg-transparent-black font-poppins pt-16 pb-6 px-5 md:px-20">
                <div className="md:grid md:grid-cols-4 md:gap-16 py-4 px-6">
                    <div className="md:col-span-2">
                        <div className="md:mt-0 md:text-left mt-4 text-center uppercase font-oswald font-semibold">
                            <h4 className="text-white pb-3 text-xl tracking-wider">About <span className="text-yellow">Us</span></h4>
                            <RoundedBottomBorder />
                        </div>
                        <div className="pt-3">
                            <p className="text-gray-400 text-left leading-8 tracking-wide sm:text-sm">
                                Ramani Investment Ltd Is The Leading Contructor Offering Rental Services Of Earth Moving Equipment, Mining Operations, Mineral Exploration And Construction Operations, Duly Registered And Incorporated Under The Laws Of Tanzania. The Company Was Formed Solely To Provide Rental Equipment In Mining, Agriculture & Civil Construction Market In Tanzania And East Africa.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="md:mt-0 md:text-left mt-4 text-center uppercase font-oswald font-semibold">
                            <h4 className="text-white pb-3 text-xl tracking-wider">Useful <span className="text-yellow">Links</span></h4>
                            <RoundedBottomBorder />
                        </div>
                        <div className="pt-3">
                            <ul>
                                <li className="mb-3 text-gray-400 hover:text-white hover:pl-3">
                                    <Link to="#">Who We Are</Link>
                                </li>
                                <li className="mb-3 text-gray-400 hover:text-white hover:pl-3">
                                    <Link to="#">Our Fleet</Link>
                                </li>
                                <li className="mb-3 text-gray-400 hover:text-white hover:pl-3">
                                    <Link to="#">Our Team</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="md:mt-0 md:text-left mt-4 text-center uppercase font-oswald font-semibold">
                            <h4 className="text-white pb-3 text-xl tracking-wider">Quick <span className="text-yellow">Contacts</span></h4>
                            <RoundedBottomBorder />
                        </div>
                        <div className="pt-3">
                            <ul>
                                <li className="mb-3 text-gray-400 hover:text-white hover:pl-3 flex space-x-1">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <Link to="#">Phone: +255 752 222 220</Link>
                                </li>
                                <li className="mb-3 text-gray-400 hover:text-white hover:pl-3 flex space-x-1">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <Link to="#">Tel: +255 22 277 3112</Link>
                                </li>
                                <li className="mb-3 text-gray-400 hover:text-white hover:pl-3 flex space-x-1">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    <Link to="mailto:">Email: info@ramani-equipment.co.tz</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="text-center text-gray-400 bg-transparent-black pt-20 pb-6">
                    &copy; {date.getFullYear()}, All Rights Reserved
                </div>

            </div>
        </div>
    )
}

export default Footer
