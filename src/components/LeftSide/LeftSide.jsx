import React from 'react'
import './style.css'
import { Heading, Box } from "@chakra-ui/react";
import { data } from './data'
import SubMenu from './SubMenu/SubMenu'

const LeftSide = () => {
  return (
    <div className='leftside'>
        <Heading marginLeft={14} mb={4}>Filter</Heading>
        {data.map((item, i) => {
            return (
                <SubMenu {...item} key={i}/>
            )
        })}
        <Box className='btn search'>
            Refine Search
        </Box>
        <Box className='btn reset'>
            Reset Filter
        </Box>
    </div>
  )
}

export default LeftSide