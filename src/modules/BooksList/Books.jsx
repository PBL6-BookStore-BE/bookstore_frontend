import React from 'react'
import {VStack } from "@chakra-ui/react";
import Book from './Book/Book'

const Books = ({ books }) => {
  return (
    <VStack spacing={14}>
        {books.map((item, key) => {
            return (
                <Book key={key} {...item}/>
            )
        })}
    </VStack>
  )
}

export default Books