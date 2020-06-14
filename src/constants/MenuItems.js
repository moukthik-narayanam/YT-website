import { lazy } from 'react';

const HomePage = lazy(() => import('../views/home-page/HomePage'));
const AboutUs = lazy(() => import('../views/about-us/AboutUs'));
const ContactUs = lazy(() => import('../components/join-us/JoinUs'));
const YTRental = lazy(() => import('../views/yt-rental/YTRental'));
const EventBooking = lazy(() => import('../views/event-booking/EventBooking'));
const PlaybackShowsView = lazy(() => import('../views/playback-shows-view/PlaybackShowsView.jsx'));
const ProductionsView = lazy(() => import('../views/productions-view/ProductionsView'));

export const MenuBarItems = [
    {
        type: "link",
        name: "Home",
        path: "/home",
        listInMenu: false,
        component: HomePage
    },
    {
        type: "link",
        name: "About Us",
        path: "/about-us",
        listInMenu: true,
        component: AboutUs

    },
    {
        type: "dropdown",
        name: "Shows",
        listInMenu: false,
        dropDownItems: [
            {
                name: "Playback shows",
                path: "/playback-shows",
                listInMenu: true,
                component: PlaybackShowsView
            },
            {
                name: "Theater productions",
                path: "/theater-productions",
                listInMenu: true,
                component: ProductionsView
            }
        ]
    },
    {
        type: "dropdown",
        name: "List Of Programmes",
        listInMenu: false,
        dropDownItems: [
            {
                name: "Basic theater workshop",
                path: "/Link4",
                listInMenu: true,
                component: HomePage
            },
            {
                name: "Life unscripted",
                path: "/Link5",
                listInMenu: true,
                component: HomePage
            },
            {
                name: "Workshop for children",
                path: "/Link6",
                listInMenu: true,
                component: HomePage
            },
            {
                name: "Gift a show",
                path: "/link11",
                listInMenu: true,
                component: HomePage
            },
            {
                name: "YT rentals",
                path: "/YT-rental",
                listInMenu: true,
                component: YTRental
            }
        ]
    },
    {
        type: "link",
        name: "Gallery",
        path: "/gallery",
        listInMenu: false,
        component: HomePage
    },
    {
        type: "link",
        name: "In Media",
        path: "/in-media",
        listInMenu: false,
        component: HomePage
    },
    {
        type: "link",
        name: "Join us",
        path: "/join-us",
        listInMenu: true,
        component: ContactUs
    },
    {
        type: "link",
        name: "Contact us",
        path: "/contact-us",
        listInMenu: true,
        component: HomePage
    },
    {
        type: "link",
        name: "More events",
        path: "/more-events",
        listInMenu: false,
        component: HomePage
    },
    {
        type: "link",
        name: "Event booking",
        path: "/:eventId/eventBooking",
        component: EventBooking,
        listInMenu: false
    }
]