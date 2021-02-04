import React from 'react'
import Layout from './components/layout'
import _ from 'lodash'
import { Link } from "@reach/router";
import h1 from './images/h-1.jpg'
import Section from './components/Section'
import Statistics from './components/Statistics'
import Title from './components/Section/sectionTitle'
import { fleet_thumbs } from "./components/database";
import { menus } from "./components/database";

function Home() {
  const thumbs = _.orderBy(fleet_thumbs, ['name'], ['asc']);
  
  const fleets = menus.filter( fleet => fleet.name.toLowerCase() === 'our fleet' )
  
  let fleet = fleets.map( fleet => fleet.children)

  fleet = _.orderBy(fleet[0], ['name'], ['asc'])

  const ramani_features = ['Team of proffesionals', 'Reliable Machinery', 'Affordable Prices'];
  
  const ramani_statistics = [
    {
      'figure': '100+',
      'description': 'Happy Clients',
    },
    {
      'figure': '12+',
      'description': 'Years of Experience',
    },
  ]
  
  const renderFleetThumbs = thumbs.map( (thumb, index) => 
    <div className="mt-6 md:w-350px bg-transparent-black group relative">
      <div className="md:h-350px relative overflow-hidden hover:cursor-pointer group">
        <img src={thumb.image} alt={thumb.name} className="group-hover:scale-110 transition duration-500 ease-in-out transform w-full h-full" />
        <div className="absolute top-0 right-0 left-0 h-full group-hover:bg-transparent-hover"></div>
        <div className="absolute top-1/2 left-1/3">
          <Link to={fleet[index].link()} className="bg-transparent-gray tracking-wider rounded-full py-3 px-6 text-center border border-black border-solid text-black uppercase font-oswald font-semibold hidden group-hover:block hover:bg-transparent-hover hover:text-white">Read More</Link>
        </div>
      </div>
      <div className="px-6 py-2 font-oswald uppercase group-hover:bg-white">
        <h2 className="text-yellow font-semibold text-22px tracking-wider">{ thumb.name }</h2>
        <div className="flex space-x-1">
          <h4 className="text-white tracking-wider group-hover:text-black">{thumb.type}</h4>
          <div className="h-px bottom-3px bg-yellow"></div>
        </div>
      </div>
  </div>)

  return (
    <Layout>
      <Section 
        classes="bg-gray-100"
        title={
          {
            section1:"Our ",
            section2:"Fleet"
          }
        }
      >
        <div className=" text-center">
          <p className="text-gray-400 text-normal">We Offer You the best rental services. Below is our fleet</p>
        </div>

        <div className="py-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-1">
          { renderFleetThumbs }
        </div>
      </Section>
      <Section 
        classes="bg-white md:grid md:grid-cols-3 md:gap-1"
      >
        <div className="md:col-span-2">
          <Title section1="Our" section2="Company" classes="md:text-left text-38px" />
          <div className="pt-1 font-poppins tracking-wide text-gray-500 leading-loose">
            <p>
              Ramani Investment Ltd is a leading provider of rental services of earth moving equipment duly registered and incorporated under the laws of Tanzania. The company was formed solely to provide Rental Equipment in Mining, Agriculture & Civil construction market in Tanzania and East Africa. We rent equipment so that our customers can focus on what they do best rather than maintaining and servicing equipment they may use only once a year. We make sure the equipment is there when it needs to be and is ready to work immediately and efficiently.
            </p>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-3 pt-6">
            {
              ramani_features.map(feature =>
                <div className="flex space-x-3 mt-3 text-15px">
                  <div className="bg-gray-200 p-1">
                    <svg className="w-4 h-4 text-center text-transparent-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                  <div className="font-oswald text-gray-500 capitalize">{feature}</div>
                </div>
              )
            }
          </div>
          <Statistics statistics={ramani_statistics} />
          
        </div>
        <div className="bg-yellow ">
            <img src={h1} alt={'h1'} className="w-full" />
            <div className="grid grid-cols-3 gap-0 bottom-0 py-3">
              <span className="text-white font-oswald font-semibold text-24px text-center col-span-2 border-r border-white border-solid">Ramani Investment</span>
              <div className="justify-self-center">
              <svg className="w-12 h-12 text-white font-oswald font-semibold text-24px" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
              </svg>

              </div>
            </div>
        </div>
      </Section>
    </Layout>
  );
}

export default Home;
