import React from 'react'
import './style.css'
import { Heading, Box } from "@chakra-ui/react";
import { data } from './data'
import SubMenu from './SubMenu/SubMenu'
import { useDispatch } from 'react-redux';
import { clearValue } from '../../store/cases/filter/slice';

const LeftSide = () => {
  const dispatch = useDispatch();
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
        <Box className='btn reset' type='submit' onClick={() => dispatch(clearValue())}>
            Reset Filter
        </Box>
    </div>
  )
}

export default LeftSide