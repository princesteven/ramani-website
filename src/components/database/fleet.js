import pdf from '../../images/icons/pdf.jpg'
import { 
    excavator320D,
    excavator323D,
    excavator325D,
    excavator330C,
    excavator330D,
    excavator336D,
    excavator345D,
    excavator349D,
    excavator374D,
    excavator974,
    adtB40D,
    adtB45D,
    adt730C,
    adtA40D,
    adtA40E,
    bulldozerD6H,
    bulldozerD6R,
    bulldozerD7R,
    bulldozerD8R,
    compactorCompactor,
    compactorSheep_roller,
    fuelP310,
    grader140G,
    breaker320C,
    lbt220,
    lbt420,
    allmand,
    tipperF3000,
    tipperfaw,
    water94C,
    water124C,
    pumpSykes,
    loader966H,
    loader950G,
    drillDP1500i,
} from "./images/fleet_images";

import { 
    excavatordoc320D,
    excavatordoc323D,
    excavatordoc325D,
    excavatordoc330C,
    excavatordoc330D,
    excavatordoc336D,
    excavatordoc345D,
    excavatordoc349D,
    excavatordoc374D,
    excavatordoc974,
    adtdocB40DB45D,
    adtdoc730C,
    adtdocA40D,
    adtdocA40E,
    bulldozerdocD6R,
    bulldozerdocD7R,
    bulldozerdocD8R,
    compactordocCompactor,
    compactordocSheep_roller,
    drilldocDP1500i,
    fueldocP310,
    graderdoc140G,
    breakerdoc320C,
    docallmand,
    pumpdocSykes,
    loaderdoc950G,
    loaderdoc966H,
} from "./documents/fleet_documents";

export { pdf }

export let fleet_details = [
    {
        'id': 'excavtors',
        'machineries': [
            {
                'title': '374D Hydraulic Excavator',
                'description': 'High level of sustained production, improved quarry, heavy construction, demolition and trenching/pipelaying performance, improved reliability and durability increase your productivity and lower your operating costs.',
                'image': excavator374D,
                'specsKey': ['Engine Type', 'Power – ISO 9249 (metric)', 'Power – ISO 14396 (metric)', 'Operating Weight (Long Undercarriage )', 'Maximum Reach', 'Maximum Digging Depth'],
                'specsValues': [['Cat C15'], ['355 kW/483 hp'], ['378 kW/514 hp'], ['70,959 kg (Minimum – Reach Configuration )', '75 596 kg (Maximum – Mass Configuration)'], ['14 230 mm'], ['9660 mm']],
                'docs': excavatordoc374D,
            },
            {
                'title': '320D Hydraulic Excavator',
                'description': 'The Caterpillar 320D excavator provides all the elements to give you the lowest cost to own and operate. At the end of the day, it all comes down to how much work you got done and how much did it cost you. Caterpillar and the 320D offer you the tools to help lower your owning and operating costs.',
                'image': excavator320D,
                'specsKey': ['Engine Type', 'Engine Power', 'Operating Weight (Std. Undercarriage )', 'Maximum Reach', 'Maximum Digging Depth'],
                'specsValues': [['Cat C6.4'], ['103 kW/140 hp'], ['21,200 to 21,900 kg'], ['9830 mm'], ['6690 mm']],
                'docs': excavatordoc320D,
            },
            {
                'title': '323D Hydraulic Excavator',
                'description': 'The 323D hydraulic system and component locations are designed to provide a high level of system efficiency. The main pumps, control valves and hydraulic tank are located close together to allow for shorter tubes and lines between components to reduce friction loss, and pressure drops. The layout further provides greater operator comfort by placing the radiator on the cab side of the upper structure. This allows incoming air to enter the engine compartment from the operator side and hot air and corresponding engine sound to exit on the opposite side away from the operator. This reduces engine compartment heat and sound being transmitted to the operator.',
                'image': excavator323D,
                'specsKey': ['Engine Type', 'Engine Power', 'Operating Weight (Std. Undercarriage )', 'Maximum Reach', 'Maximum Digging Depth'],
                'specsValues': [['Cat C6.4'], ['110 kW/147 hp'], ['22,300 kg to 2300 kg'], ['9850 mm'], ['6710 mm']],
                'docs': excavatordoc323D,
            },
            {
                'title': '325D Hydraulic Excavator',
                'description': 'Fast, easy service has been designed in with extended service intervals, advanced filtration, convenient filter access and user-friendly electronic diagnostics for increased productivity.',
                'image': excavator325D,
                'specsKey': ['Engine Type', 'Engine Power', 'Operating Weight (Std. Undercarriage )', 'Operating Weight (Long Undercarriage )', 'Maximum Reach', 'Maximum Digging Depth'],
                'specsValues': [['Cat C7'], ['140 kW/188 hp'], ['26,900 kg to 59,300 lb'], ['29,240 kg to 64,500 lb'], ['10 600 mm'], ['7 170 mm']],
                'docs': excavatordoc325D,
            },
            {
                'title': '330C Hydraulic Excavator',
                'description': 'Fast, easy service has been designed in with extended service intervals, advanced filtration, convenient filter access and user-friendly electronic diagnostics for increased productivity.',
                'image': excavator330C,
                'specsKey': ['Engine Type', 'Engine Power', 'Operating Weight (Std. Undercarriage )', 'Operating Weight (Long Undercarriage )', 'Maximum Reach', 'Maximum Digging Depth'],
                'specsValues': [['Cat C9'], ['184 kW/247 hp'], ['33,400 kg to 73,600 lb'], ['34,800 kg to 76,700 lb'], ['11.64 m (38\'2")'], ['8.09 m (26\'7")']],
                'docs': excavatordoc330C,
            },
            {
                'title': '330D Hydraulic Excavator',
                'description': 'Built for good performance and long service life, Caterpillar® booms and sticks are large, welded, stress relieved, box-section structures with thick, multi-plate fabrications to resist high stress. The bucket linkage pins have been enlarged to improve reliability and durability.',
                'image': excavator330D,
                'specsKey': ['Engine Type', 'Engine Power', 'Operating Weight (Std. Undercarriage )', 'Maximum Reach', 'Maximum Digging Depth'],
                'specsValues': [['Cat C9'], ['200 kW/268 hp'], ['36 151 kg to 79,700 lb'], ['11 714 mm (38\'5")'], ['8185 mm (26\'10")']],
                'docs': excavatordoc330D,
            },
            {
                'title': '336D Hydraulic Excavator',
                'description': 'Built for good performance and long service life, Caterpillar® booms and sticks are large, welded, stress relieved, box-section structures with thick, multi-plate fabrications to resist high stress. The bucket linkage pins have been enlarged to improve reliability and durability.',
                'image': excavator336D,
                'specsKey': ['Engine Type', 'Engine Power', 'Operating Weight (Std. Undercarriage )', 'Operating Weight (Long. Undercarriage )', 'Maximum Reach', 'Maximum Digging Depth'],
                'specsValues': [['Cat C9'], ['200 kW/268 hp'], ['33,070 kg'], ['35,020 kg'], ['11 640 mm'], ['8090 mm']],
                'docs': excavatordoc336D,
            },
            {
                'title': '345D Hydraulic Excavator',
                'description': 'The 345D hydraulic excavator’s high performance and rugged durability combine to maximize your productivity',
                'image': excavator345D,
                'specsKey': ['Engine Type', 'Engine Power', 'Operating Weight (Std. Undercarriage )', 'Maximum Reach', 'Maximum Digging Depth'],
                'specsValues': [['Cat C13'], ['283 kW'], ['44,970 kg'], ['12 940 mm'], ['8920 mm']],
                'docs': excavatordoc345D,
            },
            {
                'title': '349D Hydraulic Excavator',
                'description': 'The 349D offers outstanding performance, excellent control, high stick and bucket forces, impressive lift capacity, simplified service and a comfortable operator station to increase your productivity and lower operating costs.',
                'image': excavator349D,
                'specsKey': ['Engine Type', 'Engine Power', 'Operating Weight (Std. Undercarriage )', 'Maximum Reach', 'Maximum Digging Depth'],
                'specsValues': [['Cat C13 Diesel Engine'], ['283 kW/380 hp'], ['44,856 to 51,073 kg'], ['12.1 m'], ['8.4 m']],
                'docs': excavatordoc349D,
            },
            {
                'title': '974 Crawler Excavator',
                'description': 'High level of sustained production, improved quarry, heavy construction, demolition and trenching/pipelaying performance, improved reliability and durability increase your productivity and lower your operating costs.',
                'image': excavator974,
                'specsKey': ['Engine Type', 'Engine Power', 'Operating Weight', 'Bucket Capacity', 'Shovel Capacity'],
                'specsValues': [['8 cylinder V-engine'], ['400 kW / 544 HP'], ['84,500 kg – 101,300 kg (with Backhoe Attachment)', '90,200 kg – 106,000 kg (with Shovel Attachment)'], ['2.00 – 6.80 m³'], ['4.40 – 6.50 m³']],
                'docs': excavatordoc974,
            },
        ],
        
    },
    {
        'id': 'hydraulic-breakers',
        'machineries': [
            {
                'title': '320C Hydraulic Excavator',
                'description': 'Cat 3066 T engine and hydraulics give the 320C exceptional power, efficiency and controllability unmatched in the industry for consistently high performance in all applications.',
                'image': breaker320C,
                'specsKey': ['Engine Type', 'Engine Power', 'Operating Weight', 'Maximum Drawbar Pull', 'Maximum Travel Speed'],
                'specsValues': [['Cat 3066 T Diesel Engine'], ['103 kW/138 hp'], ['21 000 kg'], ['196 kN'], ['5.5 kph']],
                'docs': breakerdoc320C,
            },
        ],
        
    },
    {
        'id': 'motor-graders',
        'machineries': [
            {
                'title': '140 G Motor Grader',
                'description': 'Long effective power strokes, more complete fuel combustion.',
                'image': grader140G,
                'specsKey': ['Engine Type', 'Power (All Gears)', 'Power (Gear 1 and 2)', 'Power (Gears 3 through 6)', 'Blade Width', 'Operating Weight'],
                'specsValues': [['3306 turbocharged diesel engine'], ['112 kW/150 hp'], ['112 kW/150 hp'], ['134 kW/180 hp'], ['3658 mm/12 ft'], ['15,628 kg']],
                'docs': graderdoc140G,
            },
        ],
    },
    {
        'id': 'vibrating-compactors',
        'machineries': [
            {
                'title': 'BOMAG Single Drum Rollers',
                'description': 'BOMAG single drum rollers continue to set the standards for soil compaction. The unrivalled expertise and experience of the world market leader have been brought to bear on the development of this series. The result is: cutting-edge compaction technology and impressive productivity, low running costs and customised specifications to suit any application. In brief: BOMAG single drum rollers are ahead on every point. We have different tonnages which are 14, 15, 16 and 18 tonnes.',
                'image': compactorCompactor,
                'docs': compactordocCompactor,
            },
            {
                'title': 'BOMAG Sheep Rollers',
                'description': 'BOMAG single drum rollers continue to set the standards for soil compaction. The unrivalled expertise and experience of the world market leader have been brought to bear on the development of this series. The result is: cutting-edge compaction technology and impressive productivity, low running costs and customised specifications to suit any application. In brief: BOMAG single drum rollers are ahead on every point.',
                'image': compactorSheep_roller,
                'docs': compactordocSheep_roller,
            },
        ],
    },
    {
        'id': 'wheel-loaders',
        'machineries': [
            {
                'title': '950 G Wheel Loader',
                'description': 'State of the art design, engine performance and operator comfort maximize productivity.',
                'image': loader950G,
                'specsKey': ['Engine Type', 'Rated flywheel power', 'Net Power – ISO 9249', 'Bucket Capacities', 'Operating Weight'],
                'specsValues': [['3126 diesel engine'], ['137 kW/183 hp'], ['195 kW/262 hp'], ['2.7 to 4.0 m³'], ['18,047 kg']],
                'docs': loaderdoc950G,
            },
            {
                'title': '966H Wheel Loader',
                'description': 'Performance you can feel with the capability to work in the most demanding applications. Unmatched operator comfort and efficiency in a world class cab. Revolutionary electronics and hydraulics for low-effort operation. Increased productivity with lower owning and operating costs.',
                'image': loader966H,
                'specsKey': ['Engine Type', 'Gross Power – SAE J1995', 'Net Power – ISO 9249', 'Bucket Capacities', 'Operating Weight'],
                'specsValues': [['Cat C11'], ['213 kW/286 hp'], ['195 kW/262 hp'], ['3.4 to 4.2 m³'], ['23 698 kg']],
                'docs': loaderdoc966H,
            },
            {
                'title': 'JCB Backhoe Loader',
                'description': 'Performance you can feel with the capability to work in the most demanding applications. Unmatched operator comfort and efficiency in a world class cab. Revolutionary electronics and hydraulics for low-effort operation. Increased productivity with lower owning and operating costs.',
                'image': loader966H,
                'specsKey': ['Engine Type', 'Enine Power', 'Revolutions at max torque', 'Operating Weight'],
                'specsValues': [['444'], ['68.5 kW/91.68 hp'], ['2200 rpm'], ['23 698 kg']]
            },
        ],
    },
    {
        'id': 'bulldozers',
        'machineries': [
            {
                'title': 'D6R Track-Type Tractors',
                'description': 'Caterpillar has been the world leader in Track-Type Tractors for more than a century. The D6R combines legendary Cat durability and reliability with proven technology designed to reduce emissions while improving your productivity and your bottom line. From rugged structures to fully integrated engine and power train systems, the D6R is a world-class tractor built to help you produce the highest quality work in a variety of applications.',
                'image': bulldozerD6R,
                'specsKey': ['Engine Model', 'Net Power', 'Operating Weight STD', 'Operating Weight LGP'],
                'specsValues': [['Cat C9'], ['130 kW/175 hp'], ['18 325 kg'], ['21 715 kg']],
                'docs': bulldozerdocD6R
            },
            {
                'title': 'D6H Track-Type Tractors',
                'description': 'Caterpillar has been the world leader in Track-Type Tractors for more than a century. The D6RH combines legendary Cat durability and reliability with proven technology designed to reduce emissions while improving your productivity and your bottom line. From rugged structures to fully integrated engine and power train systems, the D6H is a world-class tractor built to help you produce the highest quality work in a variety of applications.',
                'image': bulldozerD6H,
                'specsKey': ['Engine Type', 'Net Power', 'Weight'],
                'specsValues': [['Cat 6C-9274'], ['180 hp'], ['23,500 kg']],
            },
            {
                'title': 'D7R Track-Type Tractors',
                'description': 'Caterpillar has been the world leader in Track-Type Tractors for more than a century. The D7R combines legendary Cat product durability and reliability with proven technology designed to reduce emissions while improving your productivity and your bottom line. From rugged structures to fully integrated engine and power train systems, the D7R is a world-class tractor built to help you produce the highest quality work in a variety of applications.',
                'image': bulldozerD7R,
                'specsKey': ['Engine Model', 'Net Power', 'Operating Weight STD', 'Operating Weight XR', 'Operating Weight LGP'],
                'specsValues': [['Cat C9'], ['194 kW/260 hp'], ['24 962 kg'], ['25 441 kg'], ['27 101 kg']],
                'docs': bulldozerdocD7R
            },
            {
                'title': 'D8R Track-Type Tractors',
                'description': 'Caterpillar has been designing and building dozers for more than a century. The latest D8R builds on a long-standing reputation for reliable performance, and adds a new cab with features to help operators be more productive. The Cat D8R is designed to be durable, especially in challenging conditions like extreme heat and cold, sandy deserts and rocky terrain. It offers renowned versatility and productivity, along with ease of repair and service to keep the machine hard at work on your job site.',
                'image': bulldozerD8R,
                'specsKey': ['Engine Model', 'Net Power', 'Operating Weight STD', 'Operating Weight LGP'],
                'specsValues': [['Cat 3406C'], ['239 kW/320 hp'], ['37 557 kg'], ['35 562 kg']],
                'docs': bulldozerdocD8R
            },
        ],
    },
    {
        'id': 'low-bed-trucks',
        'machineries': [
            {
                'title': 'Scania 220',
                'description': 'The Scania P-series cab provides a combination of space and security. With easy cab access, it’s ideal for multi-drop duties. No wonder it’s the driver’s choice. Perfect for busy distribution duties, the high-tech, clean and frugal five-cylinder Euro 3 Scania 124c-360 rigid trucks are suitable for a wide variety of body styles to suit a wide range of applications.',
                'image': lbt220,
                'specsKey': ['Engine Make', 'Euro'],
                'specsValues': [['Scania'], ['2']],
            },
            {
                'title': 'Howo 420',
                'description': 'First-class enterprise, first-class product, can have first-class research and development ability.Customer demand has always been the driving force and innovation of sinotruk, the core driving force of its product research and development.Sinotruk is committed to providing tailor-made solutions to our customers.',
                'image': lbt420,
                'specsKey': ['Engine', 'Fuel Type Transmission', 'Fuel Tank', 'Drive Wheel'],
                'specsValues': [['WD615.49 420hp'], ['Diesel, Euro II'], ['400L'], ['6 X 4']],
            },
        ],
    },
    {
        'id': 'drill-rigs',
        'machineries': [
            {
                'title': 'Pantera DP1500i T3',
                'description': 'Sandvik Pantera DP1500i is intelligent, self-propelled, self-contained, crawler based surface drilling rig equipped with a cabin and a rod changer. Sandvik Pantera DP1500i with practical intelligence fits perfectly for production drilling in large quarries or open pit mines and construction work sites. It suits well also for wall control and development works. To customize the rig it can be equipped with a variety of options to meet special requirements.',
                'image': drillDP1500i,
                'specsKey': ['Hole Diameter', 'Rock Tools', 'Rock Drill', 'Engine Output', 'Flushing Air', 'Production Capacity', 'Total Weight'],
                'specsValues': [['89 - 152 mm (3 ½" - 6")'], ['51 and 60 mm ( 2" and 2 3/8" ) rods or 87 mm ( 3 ½") tubes'], ['33 kW'], ['261 kW (Tier 3)'], ['14 m3/min up to 10 bar (depends on used rock tools)'], ['2,0 Mt/year'], ['22 700 kg']],
                'docs': drilldocDP1500i
            },
        ],
    },
    {
        'id': 'water-bowsers',
        'machineries': [
            {
                'title': 'Scania 124c - 360',
                'description': 'The Scania P-series cab provides a combination of space and security. With easy cab access, it’s ideal for multi-drop duties. No wonder it’s the driver’s choice. Perfect for busy distribution duties, the high-tech, clean and frugal five-cylinder Euro 3 Scania 124c-360 rigid trucks are suitable for a wide variety of body styles to suit a wide range of applications.',
                'image': water124C,
                'specsKey': ['Engine Power', 'Capacity'],
                'specsValues': [['269 kW'], ['18,000 Litres']],
            },
            {
                'title': 'Scania 94c - 300',
                'description': 'The Scania P-series cab provides a combination of space and security. With easy cab access, it’s ideal for multi-drop duties. No wonder it’s the driver’s choice. Perfect for busy distribution duties, the high-tech, clean and frugal five-cylinder Euro 3 Scania 94c-300 rigid trucks are suitable for a wide variety of body styles to suit a wide range of applications.',
                'image': water94C,
                'specsKey': ['Engine Power', 'Capacity'],
                'specsValues': [['221 kW'], ['20,000 Litres']],
            },
        ],
    },
    {
        'id': 'dump-trucks',
        'machineries': [
            {
                'title': '730C Articulated Truck - CAT',
                'description': 'Caterpillar has been the world leader in Track-Type Tractors for more than a century. The D6R combines legendary Cat durability and reliability with proven technology designed to reduce emissions while improving your productivity and your bottom line. From rugged structures to fully integrated engine and power train systems, the D6R is a world-class tractor built to help you produce the highest quality work in a variety of applications.',
                'image': adt730C,
                'specsKey': ['Engine Model', 'Gross Power – SAE J1995', 'Net Power – SAE J1349', 'Net Power – ISO 14396', 'Rated Payloads', 'Heaped SAE 2:1'],
                'specsValues': [['Cat C13'], ['280 kW/375 hp'], ['274 kW/367 hp'], ['276 kW/370 hp'], ['31 tons'], ['17.5 m³']],
                'docs': adtdoc730C,
            },
            {
                'title': 'A40D - Volvo',
                'description': 'The possibility of maintaining high average speed, high load capacity and powerful dump hydraulics – all contribute to making Volvo one of the most productive articulated haulers on the market. The low fuel consumption, the hydraulic retardation system and the fact that Volvo’s haulers need no daily or weekly service keep operating costs low. In short – high productivity at low cost.',
                'image': adtA40D,
                'specsKey': ['Engine Model', 'Gross Power', 'Net Power – ISO 14396', 'Rated Payloads', 'Heaped SAE 2:1'],
                'specsValues': [['Cat C13'], ['313 kW/419.74 hp'], ['309 kW/414 hp'], ['37,000 kg'], ['22.5 m³']],
                'docs': adtdocA40D
            },
            {
                'title': 'A40E - Volvo',
                'description': 'As the world’s biggest and leading manufacturer of engines for heavy equipment, Volvo has an unbeatable advantage. With in-house developed drivetrains – designed for the tough demands on articulated haulers – the A40E have the strength and durability needed for maximal productivity.',
                'image': adtA40E,
                'specsKey': ['Engine Model', 'Gross Power – SAE J1995', 'Net Power – SAE J1349', 'Rated Payloads', 'Heaped SAE 2:1'],
                'specsValues': [['D16E AAE3'], ['350 kW/476 hp'], ['346 kW/471 hp'], ['39 tons'], ['24.0 m³']],
                'docs': adtdocA40E
            },
            {
                'title': 'B45D - Bell',
                'description': 'Enhancements such as industry leading standards in fuel-efficient emission control, solid state electrical system, spacious cab with refined controls and you have everything you need to maximise uptime and productivity.',
                'image': adtB45D,
                'specsKey': ['Engine Model', 'Gross Power', 'Net Power', 'Rated Payloads', 'Heaped SAE 2:1'],
                'specsValues': [['OM 501 LA'], ['375 kW/503 hp'], ['364 kW/488 hp'], ['41 000 kg'], ['25.5 m³']],
                'docs': adtdocB40DB45D
            },
            {
                'title': 'B40D - Bell',
                'description': 'Enhancements such as industry leading standards in fuel-efficient emission control, solid state electrical system, spacious cab with refined controls and you have everything you need to maximise uptime and productivity.',
                'image': adtB40D,
                'specsKey': ['Engine Model', 'Gross Power', 'Net Power', 'Rated Payloads', 'Heaped SAE 2:1'],
                'specsValues': [['OM 501 LA'], ['335 kW/449 hp'], ['325 kW/436 hp'], ['37 000 kg'], ['23.0 m³']],
                'docs': adtdocB40DB45D
            },
        ],
    },
    {
        'id': 'tippers',
        'machineries': [
            {
                'title': 'F3000',
                'description': 'With many configurations available to choose; from the standard tipper or trailer trucks to highly specialized vehicles for that tough job, the F3000 has you covered.',
                'image': tipperF3000,
                'specsKey': ['Power'],
                'specsValues': [['279.6 kW/375 hp']],
            },
            {
                'title': 'Faw',
                'description': 'With many configurations available to choose; from the standard tipper or trailer trucks to highly specialized vehicles for that tough job, Faw has you covered.',
                'image': tipperfaw,
                'specsKey': ['Power'],
                'specsValues': [['279.6 kW/375 hp']],
            },
        ],
    },
    {
        'id': 'fuel-bowsers',
        'machineries': [
            {
                'title': 'SCANIA P 310',
                'description': 'The Scania P-series cab provides a combination of space and security. With easy cab access, it’s ideal for multi-drop duties. No wonder it’s the driver’s choice. Perfect for busy distribution duties, the high-tech, clean and frugal five-cylinder 9.0-litre Euro 3 SCR Scania P 250 and P 310 rigid trucks are suitable for a wide variety of body styles to suit a wide range of applications.',
                'image': fuelP310,
                'specsKey': ['Engine Type', 'Engine Power', 'Alternator', 'Compressor', 'Fuel Tank'],
                'specsValues': [['Scania DC9 310 9 Litre In-line 5 cylinder'], ['228kW /310hp @ 1900rpm'], ['Scania 24V, 100amp'], ['Knorr 720, twin cylinder, 800L/min with air dryer'], ['Single 450L steel tank R/H side', '1 x 50L Urea tank R/H']],
                'docs': fueldocP310
            },
        ],
    },
    {
        'id': 'light-plants',
        'machineries': [
            {
                'title': 'Night Light Pro II',
                'description': 'Fully described in the Document Below',
                'image': allmand,
                'specsKey': ['Engine Brand', 'Engine Prime Power', 'Light System'],
                'specsValues': [['Mitsubishi'], ['6 kW'], ['1 000 Watt']],
                'docs': docallmand
            },
        ],
    },
    {
        'id': 'water-pumps',
        'machineries': [
            {
                'title': 'SYKES',
                'description': 'Fully described in the Document Below',
                'image': pumpSykes,
                'specsKey': ['Performance', 'Weight', 'Operating Weight', 'Maximum Drawbar Pull', 'Maximum Travel Speed'],
                'specsValues': [['Max head: 22 m', 'Max flow: 40 l/s', 'Max solid: 50 mm'], ['742 kg with fuel', '695 kg without fuel'], ['21 000 kg'], ['196 kN'], ['5.5 kph']],
                'docs': pumpdocSykes
            },
        ],
    },
]