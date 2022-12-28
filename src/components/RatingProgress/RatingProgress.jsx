import { Box, Flex, Progress } from "@chakra-ui/react";
import React from "react";
import { StarIcon } from "../icons";

const RatingProgress = ({ value }) => {
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
          value={value[5] || 0}
          size="xs"
          colorScheme="orange"
          minW="200px"
          m="2px 6px 0"
          borderRadius="15px"
        />
        <Box color="#000000" fontWeight="500" fontSize="16px">
          {value[5] || 0} %
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
          value={value[4] || 0}
          size="xs"
          colorScheme="orange"
          minW="200px"
          mt="2px"
          borderRadius="15px"
        />
        <Box color="#000000" fontWeight="500" fontSize="16px">
          {value[4] || 0} %
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
          value={value[3] || 0}
          size="xs"
          colorScheme="orange"
          minW="200px"
          mt="2px"
          borderRadius="15px"
        />
        <Box color="#000000" fontWeight="500" fontSize="16px">
          {value[3] || 0} %
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
          value={value[2] || 0}
          size="xs"
          colorScheme="orange"
          minW="200px"
          mt="2px"
          borderRadius="15px"
        />
        <Box color="#000000" fontWeight="500" fontSize="16px">
          {value[2] || 0} %
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
          value={value[1] || 0}
          size="xs"
          colorScheme="orange"
          minW="200px"
          mt="2px"
          borderRadius="15px"
        />
        <Box color="#000000" fontWeight="500" fontSize="16px">
          {value[1] || 0} %
        </Box>
      </Flex>
    </Box>
  );
};

export default RatingProgress;
