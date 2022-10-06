import React from 'react'
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { TimeIcon, PayIcon, QualityIcon, GuardIcon } from "../icons";

export const icons = [
    {
        id:1,
        icon: <FaFacebookF />
    },
    {
        id:2,
        icon: <FaYoutube />
    },
    {
        id:3,
        icon: <FaTwitter />
    },
    {
        id:4,
        icon: <FaLinkedin />
    },
    {
        id:5,
        icon: <FaInstagram />
    },
]

export const features = [
    {
        id:1,
        icon: <TimeIcon />,
        title: 'Quick Delivery',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id:2,
        icon: <PayIcon />,
        title: 'Secure Payment',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id:3,
        icon: <QualityIcon />,
        title: 'Best Quality',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id:4,
        icon: <GuardIcon />,
        title: 'Return Guarantee',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
]