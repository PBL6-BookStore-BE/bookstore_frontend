import React from 'react'
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { AiOutlineFieldTime } from "react-icons/ai";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbCertificate } from "react-icons/tb";
import { SiAdguard } from "react-icons/si";

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
        icon: <AiOutlineFieldTime />,
        title: 'Quick Delivery',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id:2,
        icon: <RiSecurePaymentFill />,
        title: 'Secure Payment',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id:3,
        icon: <TbCertificate />,
        title: 'Best Quality',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id:4,
        icon: <SiAdguard />,
        title: 'Return Guarantee',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
]