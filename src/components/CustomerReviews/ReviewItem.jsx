import { Box, Divider, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getUsernameById } from "../../apis/user.api";
import { UserIcon } from "../icons";
import Rating from "../Rating/Rating";

const ReviewItem = ({ showReview, currentItems }) => {
  const [listUsername, setListUsername] = useState([]);

  useEffect(() => {
    currentItems.map((review) => {
      getUsernameById(review.idUser).then((username) => {
        if (!listUsername.find(({ idUser }) => idUser === review.idUser)) {
          listUsername.push({
            idUser: review.idUser,
            username: username,
          });
        }
      });
    });
  }, [currentItems, listUsername]);

  return (
    <Box>
      <Box display={showReview}>
        {currentItems?.map((review, index) => (
          <Box key={review.id}>
            <Flex padding="32px 0">
              <UserIcon size="30" />
              <Box ml="2">
                <Box color="#000" fontSize="12px" fontWeight="400">
                  {listUsername.filter(
                    (user) => user.idUser === review.idUser
                  )[0]?.username || "username"}
                </Box>
                <Rating start={review.rating} height="14px" />
                <Box
                  color="rgba(0,0,0,.87)"
                  fontSize="12px"
                  fontWeight="400"
                  mt="12px"
                >
                  {review.createdDate.split("T")[0]}
                </Box>
                <Box fontSize="14px" color="#000" mt={2}>
                  {review.comment}
                </Box>
              </Box>
            </Flex>
            {index !== currentItems?.length - 1 && <Divider />}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ReviewItem;
