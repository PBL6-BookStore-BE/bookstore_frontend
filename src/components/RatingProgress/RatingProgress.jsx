import { Box, Flex, Progress } from "@chakra-ui/react";
import React from "react";
import { StarIcon } from "../icons";

const RatingProgress = ({ value }) => {
  console.log(value.fiveStar);
  return (
    <Box>
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <StarIcon />
          <Box
            display="inline-block"
            color="#000000"
            fontWeight="500"
            fontSize="16px"
            ml="5px"
          >
            5
          </Box>
        </Box>
        <Progress
          value={value.fiveStar}
          size="xs"
          colorScheme="orange"
          minW="200px"
          m="2px 6px 0"
          borderRadius="15px"
        />
        <Box color="#000000" fontWeight="500" fontSize="16px">
          {value.fiveStar} %
        </Box>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mt={2}>
        <Box>
          <StarIcon />
          <Box
            display="inline-block"
            color="#000000"
            fontWeight="500"
            fontSize="16px"
            ml="5px"
          >
            4
          </Box>
        </Box>
        <Progress
          value={value.fourStar}
          size="xs"
          colorScheme="orange"
          minW="200px"
          mt="2px"
          borderRadius="15px"
        />
        <Box color="#000000" fontWeight="500" fontSize="16px">
          {value.fourStar} %
        </Box>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mt={2}>
        <Box>
          <StarIcon />
          <Box
            display="inline-block"
            color="#000000"
            fontWeight="500"
            fontSize="16px"
            ml="5px"
          >
            3
          </Box>
        </Box>
        <Progress
          value={value.threeStar}
          size="xs"
          colorScheme="orange"
          minW="200px"
          mt="2px"
          borderRadius="15px"
        />
        <Box color="#000000" fontWeight="500" fontSize="16px">
          {value.threeStar} %
        </Box>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mt={2}>
        <Box>
          <StarIcon />
          <Box
            display="inline-block"
            color="#000000"
            fontWeight="500"
            fontSize="16px"
            ml="5px"
          >
            2
          </Box>
        </Box>
        <Progress
          value={value.twoStar}
          size="xs"
          colorScheme="orange"
          minW="200px"
          mt="2px"
          borderRadius="15px"
        />
        <Box color="#000000" fontWeight="500" fontSize="16px">
          {value.twoStar} %
        </Box>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mt={2}>
        <Box>
          <StarIcon />
          <Box
            display="inline-block"
            color="#000000"
            fontWeight="500"
            fontSize="16px"
            ml="5px"
          >
            1
          </Box>
        </Box>
        <Progress
          value={value.oneStar}
          size="xs"
          colorScheme="orange"
          minW="200px"
          mt="2px"
          borderRadius="15px"
        />
        <Box color="#000000" fontWeight="500" fontSize="16px">
          {value.oneStar} %
        </Box>
      </Flex>
    </Box>
  );
};

export default RatingProgress;
