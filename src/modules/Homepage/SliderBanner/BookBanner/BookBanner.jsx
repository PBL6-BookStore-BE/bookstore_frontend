import React from 'react'
import { Box, Image, AspectRatio } from "@chakra-ui/react";
import LabelBestSeller from "../../../../components/LabelBestSeller/LabelBestSeller";
import { Link } from "react-router-dom";

const BookBanner = ({ bookData }) => {
  return (
    <Link to={`/books/book-detail/${bookData.id}`}>
        <Box pos="relative">
            <AspectRatio ratio={2/3} w={286}>
                <Image
                borderRadius="20px"
                src={bookData.urls[0] || "./static-data/img-none.jpg"}
                />
            </AspectRatio>
            <LabelBestSeller label="Best Seller" />
        </Box>
    </Link>
  )
}

export default BookBanner