import React from 'react'
import { Box, Image, AspectRatio } from "@chakra-ui/react";
import LabelBestSeller from "../../../../components/LabelBestSeller/LabelBestSeller";

const BookBanner = ({ bookData }) => {
  return (
      <Box pos="relative">
          <AspectRatio ratio={2/3} w={286}>
              <Image
              borderRadius="20px"
              src={bookData.urls[0] || "./static-data/img-none.jpg"}
              />
          </AspectRatio>
          <LabelBestSeller label="Best Seller" />
      </Box>
  )
}

export default BookBanner