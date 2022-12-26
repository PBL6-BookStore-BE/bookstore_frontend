import { ArrowDownIcon, StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createReview, getReviewOfBook } from "../../apis/review.api";
import { UserIcon } from "../icons";
import Rating from "../Rating/Rating";
import RatingProgress from "../RatingProgress/RatingProgress";

const DUMMY_STAR = {
  fiveStar: 86,
  fourStar: 61,
  threeStar: 12,
  twoStar: 5,
  oneStar: 8,
};
const CustomerReviews = ({ id }) => {
  const [showReview, setShowReview] = useState("none");
  const [showBtn, setShowBtn] = useState("flex");
  const [listReview, setListReview] = useState();
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);
  const [isErrorRating, setIsErrorRating] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  console.log("idBook: ", id);

  const handleInputChange = (e) => {
    setIsError(false);
    setInput(e.target.value);
  };

  const handleClick = (value) => {
    setIsErrorRating(false);
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleSendReview = () => {
    if (!input) {
      setIsError(true);
    }
    if (currentValue === 0) {
      setIsErrorRating(true);
    } else {
      try {
        createReview({
          rating: currentValue,
          comment: input,
          idBook: id,
        })
          .then(() => {
            toast.success("Thank you for your review!");
            setCurrentValue(0);
            setInput("");
          })
          .catch((error) => toast.error("Cannot create a review!"));
      } catch (error) {
        toast.error(error);
      }
    }
  };

  useEffect(() => {
    getReviewOfBook(id).then((res) => setListReview(res));
  }, [id]);

  console.log(listReview);
  return (
    <Box>
      <Box fontSize="20px" fontWeight="600" color="#000000">
        Customer Reviews
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        backgroundColor="#FCF8FD"
        borderRadius="10px"
        mt={6}
        padding="30px 26px"
        position="relative"
      >
        <Flex flexDirection="column">
          <Box color="#4D4D4D" mb={1}>
            <Box fontWeight="600" fontSize="30px" display="inline">
              4.7
            </Box>
            <Box fontWeight="500" fontSize="20px" display="inline">
              out of 5
            </Box>
          </Box>
          <Rating start={3} />
        </Flex>
        <Box
          fontSize="14px"
          fontWeight="400"
          lineHeight="26px"
          color="rgba(0, 0, 0, 0.7)"
          maxW="300px"
        >
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim"
        </Box>
        <RatingProgress value={DUMMY_STAR} />
        <Button
          leftIcon={<ArrowDownIcon />}
          w="160px"
          h="44px"
          borderRadius="45px"
          backgroundColor="#FFFFFF"
          boxShadow="0px 14px 26px rgba(39, 13, 48, 0.25)"
          position="absolute"
          bottom="0"
          left="50%"
          transform="translate(-50%, 22px)"
          display={showBtn}
          _hover={{
            color: "#fff",
            bgColor: "#8D28AD",
          }}
          onClick={() => {
            setShowReview("block");
            setShowBtn("none");
          }}
        >
          View reviews
        </Button>
      </Box>
      <Box mt={10}>
        <Box fontSize="20px" fontWeight="600" color="#000000">
          Add a review
        </Box>
        <Box
          w="100%"
          backgroundColor="#FCF8FD"
          borderRadius="10px"
          mt={6}
          padding="30px 26px"
        >
          <FormControl isInvalid={isError}>
            <FormLabel>Your review</FormLabel>
            <Textarea value={input} onChange={handleInputChange} size="sm" />
            {isError && (
              <FormErrorMessage>Review is required.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl mt={4} isInvalid={isErrorRating}>
            <FormLabel m={0}>Rating</FormLabel>
            <Box>
              {stars.map((_, index) => {
                return (
                  <StarIcon
                    boxSize={6}
                    color={
                      (hoverValue || currentValue) > index
                        ? "#FF7A00"
                        : "#E7E7E7"
                    }
                    cursor="pointer"
                    key={index}
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                  />
                );
              })}
            </Box>
            {isErrorRating && (
              <FormErrorMessage>Rating is required.</FormErrorMessage>
            )}
          </FormControl>
          <Flex justifyContent="flex-end">
            <Button mt={4} colorScheme="purple" onClick={handleSendReview}>
              Send
            </Button>
          </Flex>
        </Box>
      </Box>
      <Box display={showReview}>
        {/* {listReview.map((review, index) => (
          <Flex padding="32px 0" key={review.id}>
            <UserIcon size="30" />
            <Box ml="2">
              <Box color="#000" fontSize="12px" fontWeight="400">
                {review.username}
              </Box>
              <Rating start={review.rating} height="14px" />
              <Box
                color="rgba(0,0,0,.87)"
                fontSize="12px"
                fontWeight="400"
                mt="12px"
              >
                2022-12-21
              </Box>
              <Box fontSize="14px" color="#000" mt={2}>
                {review.comment}
              </Box>
            </Box>
          </Flex>
        ))} */}
        <Flex padding="32px 0">
          <UserIcon size="30" />
          <Box ml="2">
            <Box color="#000" fontSize="12px" fontWeight="400">
              Quynhhuong
            </Box>
            <Rating start={3} height="14px" />
            <Box
              color="rgba(0,0,0,.87)"
              fontSize="12px"
              fontWeight="400"
              mt="12px"
            >
              2022-12-21
            </Box>
            <Box fontSize="14px" color="#000" mt={2}>
              Clever ko bao giờ làm mình thất vọng. sách giữ kỹ sạch sẽ, ko quăn
              mép, bọc plastic. đặt nay mai giao liền. mình đọc phần 1 trên app
              bookstore thấy hút quá nên quất lun e này về cày cho nhẹ mắt. sách
              rất đẹp, in rõ nét, giấy ok ko bị thấy chữ bên kia. thích sợi dây
              làm dấu trang.
            </Box>
          </Box>
        </Flex>
        <Divider />
        <Flex padding="32px 0">
          <UserIcon size="30" />
          <Box ml="2">
            <Box color="#000" fontSize="12px" fontWeight="400">
              Quynhhuong
            </Box>
            <Rating start={3} height="14px" />
            <Box
              color="rgba(0,0,0,.87)"
              fontSize="12px"
              fontWeight="400"
              mt="12px"
            >
              2022-12-21
            </Box>
            <Box fontSize="14px" color="#000" mt={2}>
              Clever ko bao giờ làm mình thất vọng. sách giữ kỹ sạch sẽ, ko quăn
              mép, bọc plastic. đặt nay mai giao liền. mình đọc phần 1 trên app
              bookstore thấy hút quá nên quất lun e này về cày cho nhẹ mắt. sách
              rất đẹp, in rõ nét, giấy ok ko bị thấy chữ bên kia. thích sợi dây
              làm dấu trang.
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CustomerReviews;
