import React from 'react'
import { ArrowUpIcon, ArrowDownIcon } from '../icons'

export const data = [
    {
        title: 'Categories',
        iconClosed: <ArrowUpIcon />,
        iconOpened: <ArrowDownIcon />,

        subMenu: [
            {
                title: 'All Genres',

            },
            {
                title: 'Art & Photography',

            },
            {
                title: "Children's Book",

            },
        ]
    },
    {
        title: 'Publisher',
        iconClosed: <ArrowUpIcon />,
        iconOpened: <ArrowDownIcon />,

        subMenu : [
            {
                title: 'Garamedia',
            },
            {
                title: 'Century ABC',
            },
            {
                title: 'Wepress',
            },
        ]
    },
    {
        title: 'Price Range',
        iconClosed: <ArrowUpIcon />,
        iconOpened: <ArrowDownIcon />,

        subMenu : [{}]
    },
];


