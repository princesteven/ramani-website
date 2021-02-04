export const menus = [
    {
        'name': 'Home',
        'link': function () {
            return `/`
        },
    },
    {
        'name': 'Who We Are',
        'link': '#',
        'children': [
            {
                'name': 'About Us',
                'link': function () {
                    return `/about`
                },
            },
            {
                'name': 'Our Team',
                'link': function () {
                    return `/team`
                },
            },
        ]
    },
    {
        'name': 'Our Fleet',
        'link': '#',
        'children': [
            {
                'id': 'excavtors',
                'name': 'Excavators',
                'link': function () {
                    return `/fleet/${this.id}`
                },
            },
            {
                'id': 'hydraulic-breakers',
                'name': 'Hydraulic Breaker/ Hummer',
                'link': function () {
                    return `/fleet/${this.id}`
                },
            },
            {
                'id': 'motor-graders',
                'name': 'Motor Graders',
                'link': function () {
                    return `/fleet/${this.id}`
                },
            },
            {
                'id': 'vibrating-compactors',
                'name': 'Single drum Vibrating Compactors',
                'link': function () {
                    return `/fleet/${this.id}`
                },
            },
            {
                'id': 'wheel-loaders',
                'name': 'Wheel loaders',
                'link': function () {
                    return `/fleet/${this.id}`
                },
            },
            {
                'id': 'bulldozers',
                'name': 'Bulldozers',
                'link': function () {
                    return `/fleet/${this.id}`
                },
            },
            {
                'id': 'low-bed-trucks',
                'name': 'Low Bed Trucks',
                'link': function () {
                    return `/fleet/${this.id}`
                },
            },
            {
                'id': 'drill-rigs',
                'name': 'Drill Rigs',
                'link': function () {
                    return `/fleet/${this.id}`
                },
            },
            {
                'id': 'water-bowsers',
                'name': 'Water Bowser',
                'link': function () {
                    return `/fleet/${this.id}`
                },
            },
            {
                'id': 'dump-trucks',
                'name': 'Articulated Dump Trucks',
                'link': function () {
                    return `/fleet/${this.id}`
                },
            },
            {
                'id': 'tippers',
                'name': 'Tippers',
                'link': function () {
                    return `/fleet/${this.id}`
                },
            },
            {
                'id': 'fuel-bowsers',
                'name': 'Fuel Bowser',
                'link': function () {
                    return `/fleet/${this.id}`
                },
            },
            {
                'id': 'light-plants',
                'name': 'Light Plant',
                'link': function () {
                    return `/fleet/${this.id}`
                },
            },
            {
                'id': 'water-pumps',
                'name': 'Water Pump',
                'link': function () {
                    return `/fleet/${this.id}`
                },
            },
        ]
    },
    {
        'name': 'Services',
        'link': '#',
        'children': [
            {
                'name': 'Hiring & Leasing of Earth Moving Equipment',
                'link': function () {
                    return `/services/rental`
                },
            },
            {
                'name': 'Construction & Mining Constructors',
                'link': function () {
                    return `/services/construction-and-mining-constructors`
                },
            },
            {
                'name': 'Transportation of Heavy Equipment',
                'link': function () {
                    return `/services/transportation-of-heavy-equipment`
                },
            },
        ]
    },
    {
        'name': 'Projects',
        'link': function () {
                    return `/projects`
                },
    },
    {
        'name': 'Contacts',
        'link': function () {
                    return `/contacts`
                },
    },
]