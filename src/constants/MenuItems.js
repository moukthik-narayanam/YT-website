import { lazy } from 'react';

const HomePage = lazy(() => import('../views/home-page/HomePage'));
const AboutUs = lazy(() => import('../views/about-us/AboutUs'));
const ContactUs = lazy(()=> import('../components/contact-us/ContactUs'));

export const MenuBarItems = [
    {
        type: "link",
        name: "Home",
        path: "/home",
        listInMenu : false,
        component: HomePage
    },
    {
        type: "link",
        name: "About Us",
        path: "/about-us",
        listInMenu : true,
        component: AboutUs

    },
    {
        type: "dropdown",
        name: "Shows",
        path: "/shows",
        listInMenu : true,
        component: HomePage,
        dropdownItems: [
            {
                name: "Playback shows",
                path: "/Link9",
                listInMenu : true,
                component: HomePage
            },
            {
                name: "Theater productions",
                path: "/Link10",
                listInMenu : true,
                component: HomePage
            }
        ]
    },
    {
        type: "dropdown",
        name: "List Of Programmes",
        path: "/list-of-programmes",
        listInMenu : true,
        component: HomePage,
        dropdownItems: [
            {
                name: "Basic theater workshop",
                path: "/Link4",
                listInMenu : true,
                component: HomePage
            },
            {
                name: "Life unscripted",
                path: "/Link5",
                listInMenu : true,
                component: HomePage
            },
            {
                name: "Workshop for children",
                path: "/Link6",
                listInMenu : true,
                component: HomePage
            },
            {
                name: "Gift a show",
                path: "/link11",
                listInMenu : true,
                component: HomePage
            },
            {
                name: "YT rentals",
                path: "/link12",
                listInMenu : true,
                component: HomePage
            }
        ]
    },
    {
        type: "link",
        name: "Gallery",
        path: "/link7",
        listInMenu : true,
        component: HomePage
    },
    {
        type: "link",
        name: "In Media",
        path: "/link8",
        listInMenu : true,
        component: HomePage
    },
    {
        type: "link",
        name: "Join us",
        path: "/link13",
        listInMenu : true,
        component: HomePage
    },
    {
        type: "link",
        name: "Contact us",
        path: "/Link3",
        listInMenu : true,
        component: ContactUs
    },
    {
        type: "link",
        name: "More events",
        path: "/more-events",
        listInMenu : false,
        component: HomePage
    }
]