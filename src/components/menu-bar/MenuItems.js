import { lazy } from 'react';

const HomePage = lazy(() => import('../../views/HomePage'));

export const MenuBarItems = [
    {
        type: "link",
        name: "Home",
        path: "/home",
        component: HomePage
    },
    {
        type: "link",
        name: "About Us",
        path: "/Link1",
        component: HomePage

    },
    {
        type: "dropdown",
        name: "Shows",
        path: "/shows",
        component: HomePage,
        dropdownItems: [
            {
                name: "Playback shows",
                path: "/Link9",
                component: HomePage
            },
            {
                name: "Theater productions",
                path: "/Link10",
                component: HomePage
            }
        ]
    },
    {
        type: "dropdown",
        name: "List Of Programmes",
        path: "/list-of-programmes",
        component: HomePage,
        dropdownItems: [
            {
                name: "Basic theater workshop",
                path: "/Link4",
                component: HomePage
            },
            {
                name: "Life unscripted",
                path: "/Link5",
                component: HomePage
            },
            {
                name: "Workshop for children",
                path: "/Link6",
                component: HomePage
            },
            {
                name: "Gift a show",
                path: "/link11",
                component: HomePage
            },
            {
                name: "YT rentals",
                path: "/link12",
                component: HomePage
            }
        ]
    },
    {
        type: "link",
        name: "Gallery",
        path: "/link7",
        component: HomePage
    },
    {
        type: "link",
        name: "In Media",
        path: "/link8",
        component: HomePage
    },
    {
        type: "link",
        name: "Join us",
        path: "/link13",
        component: HomePage
    },
    {
        type: "link",
        name: "Contact us",
        path: "/Link3",
        component: HomePage
    }
]