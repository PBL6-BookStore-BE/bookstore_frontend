import React from 'react'
import {VStack } from "@chakra-ui/react";
import Book from './Book/Book'

const Books = ({ books }) => {
  return (
    <VStack align='flex-start' spacing={14} marginLeft={4}>
        {books.map((item, key) => {
            return (
                <Book key={key} {...item}/>
            )
        })}
    </VStack>
  )
}

export default Books