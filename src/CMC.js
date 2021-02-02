import React from 'react'
import Layout from './components/layout'
import Section from './components/Section'
import rc1 from './images/services/rc1.jpg'
import rc2 from './images/services/rc2.jpg'
import diamond from './images/services/diamond.jpg'

const CMC = () => {
    const rc_samples = [
        {
            'image': rc1,
            'description': 'Samples in Calco Bags',
        },
        {
            'image': rc2,
            'description': 'Samples in Chip Tray',
        },
    ]
    const dd_samples = [
        {
            'image': diamond,
            'description': 'Diamond Drilling Core Sample',
        },
    ]

    const factors = [
        'Required Production',
        'Terrain',
        'Material characteristics',
        'Type and size of excavating and hauling equipment',
        'Proximity to vibration-sensitive areas',
        'Bench height',
        'Explosives type and size'
    ]
    return (
        <Layout title="Construction &amp; Mining Contructors" subtitle="Construction &amp; Mining Contructors">
            <Section
                classes="bg-white"
                title={
                    {
                        section1: "Reverse Circulation",
                        section2: "RC",
                    }
                }
            >
                <div className="text-left font-poppins text-gray-500 leading-loose">
                    <p>Effectiveness of Reverse Circulation drilling (RC) depends upon the quality and quantity of the sample used at the mine. Ramani Investment provides RC services inorder to ensure that the clients quality of the blocks planned for mining and the minerals meet the standards of their refinery. This is so that our client's processing cost can be reduced by minimizing the amount of waste that will be mined with the ore. If the dilution is high it will cause an increase in the processing cost and thus, increases operating costs. This is why RC drilling is important to help control the delivery of suitable ore to the processing plant, so to control the overall operating costs.</p>
                    <p className="mt-3">RC Sampling in geology can be defined as a process of providing a series of high quality, representative samples for analysis, so that mineralization can be modeled and help separate the waste from the ore. During sampling a number of samples are collected and these samples are collected in the form of chips in a chip tray as well as in the form of powder in calco bags. The samples are collected at intervals for accurate mineralization classification.</p>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-3">
                    {
                        rc_samples.map( sample => 
                            <div className="m-auto py-5">
                                <div className="w-96 h-auto">
                                    <img src={sample.image} alt={sample.description} />
                                </div>
                                <div className="font-poppins text-gray-500 text-center mt-5">
                                    {sample.description}
                                </div>
                            </div>
                        )
                    }
                </div>
            </Section>
            <Section
                classes="bg-gray-100"
                title={
                    {
                        section1: "Diamond",
                        section2: "Drilling",
                    }
                }
            >
                <div className="text-left font-poppins text-gray-500 leading-loose">
                    <p>Diamond drilling is a high precision form of core drilling, allowing for exact hole measurements and unparalleled depth control. This offers an advantage in more accurate reading on mineralization classification as compared to convectional drilling (e.g. RC Drilling). Diamond drilling offers our client's not only a more accurate cut but also higher standard of performance and reduced risk of inadvertently causing structural damage. With diamond drilling, less debris is produced, which can help save both time and disposal costs for our clients.</p>
                    <p className="mt-3">Diamond Drilling also provides clients with an environmentally friendly method of drilling as less noise and no dust is produced making it suitable to drill without disturbing other workers. This method is a more cost effective and efficient solution for our clients multiple planned drill holes or accurate planned trajectories during mineral exploration.</p>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-3">
                    {
                        dd_samples.map( sample => 
                            <div className="m-auto py-5">
                                <div className="w-96 h-auto">
                                    <img src={sample.image} alt={sample.description} />
                                </div>
                                <div className="font-poppins text-gray-500 text-center mt-5">
                                    {sample.description}
                                </div>
                            </div>
                        )
                    }
                </div>
            </Section>
            <Section
                classes="bg-white"
                title={
                    {
                        section1: "Loading &",
                        section2: "Hauling (Contractor)",
                    }
                }
            >
                <div className="text-left font-poppins text-gray-500 leading-loose">
                    <p>Loading and Hauling in mining is a necessary process for the movement of ore and waste from the face to stockpiles or processing plant. The process of loading and hauling is a complementary service that must contribute to the efficiency of the mining process as a whole. It is an essential part of calculating a productive mining process and must be considered when taking matters of machinery and equipment utilized against outsourcing waste movements and haulage, to better predict any mining project’s efficiency in terms of production as well as excellence in the process.</p>
                    <p className="mt-3">By outsourcing your loading and hauling operations to Ramani you can spend your money where it serves you best, in processing. As Ramani owns, operates and maintains a large modern mining fleet that can cater for your requirements.</p>
                    <p className="mt-3">As your loading and hauling contractor, Ramani will ensure your material is moved in conjunction with your mine plan safely and efficiently so you can concentrate on the rest of your business as we have the equipment and experience already. With a large fleet in our range our clients can rest assured that we’ll get the job completed safely, on time and within budget.</p>
                    <p className="mt-3">As a matter of fact; Ramani Investment Ltd prides in choosing best practices possible to ensure maximum efficiency in any mining project. We utilize modern vigorous loaders and haulage trucks in addition to auxiliary machines and equipment available to support all other loading and hauling mining machines thus ensuring we achieve best standards of productivity, safety, and reliability even in the roughest mining terrains.</p>
                </div>
            </Section>
            <Section
                classes="bg-gray-100"
                title={
                    {
                        section1: "Blast Hole",
                        section2: "Drilling",
                    }
                }
            >
                <div className="text-left font-poppins text-gray-500 leading-loose">
                    <p>In the drilling and blasting process, we recognize that drilling is the most critical element of the two. A drilled hole or blast hole is considered a cylindrical vehicle that has been designed and strategically situated to hold and contain an explosives charge so that it can be detonated in the most efficient and optimum manner possible. If the hole is poorly placed, then the blasting system won’t be truly effective (i.e. excessive burden and spacing, sized incorrectly for desired results, insufficient in depth, etc.).</p>
                    <p className="mt-3">Drilling is considered expensive because it requires a sizeable upkeep and investment. If this is done in an improper manner, the effects can be felt throughout the production cycle (e.g. Loading and Hauling, Crushing, etc.) and that is why Ramani offers these services in order to ease the load on our clients and let them concentrate on other Business and Production chains.</p>
                    <div>
                        <span className="font-oswald text-transparent-black font-semibold capitalize tracking-wide text-normal">Ramani makes sure to factor in:</span>
                        <ul>
                            {
                                factors.map( factor => 
                                    <li>- {factor}</li>    
                                )
                            }
                        </ul>
                    </div>
                    <p className="mt-3">So as to meet the optimum drill capacity and provide our clients with the outmost results which in turn lowers their Operational Costs and maximizes profit. Ramani uses a Rotary-Percussive drill rig that uses both rotary (grinding) and percussive (chipping and hammering) action in order to chip away rock and produce a hole.</p>
                </div>
            </Section>
        </Layout>
    )
}

export default CMC
