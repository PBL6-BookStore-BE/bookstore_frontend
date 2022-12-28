import { ArrowDownIcon, StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createReview, getReviewOfBook } from "../../apis/review.api";
import Rating from "../Rating/Rating";
import RatingProgress from "../RatingProgress/RatingProgress";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DUMMY_STAR = {
  fiveStar: 86,
  fourStar: 61,
  threeStar: 12,
  twoStar: 5,
  oneStar: 8,
};
const CustomerReviews = ({ id, rating }) => {
  const navigate = useNavigate();
  const [percentStar, setPercentStar] = useState();
  const [showReview, setShowReview] = useState("none");
  const [showBtn, setShowBtn] = useState("flex");
  const [listReview, setListReview] = useState();
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);
  const [isErrorRating, setIsErrorRating] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const { isLogged } = useSelector((state) => state.auth);
  const stars = Array(5).fill(0);

  console.log("idBook: ", id);

  const fetchingReviews = () => {
    getReviewOfBook(id).then((res) => setListReview(res));
  };

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
    if (!isLogged) {
      toast.warning("Please login to send a review!!!");
      navigate("/login");
    } else {
      if (!input) {
        setIsError(true);
      }
      if (currentValue === 0) {
        setIsErrorRating(true);
      } else {
        setIsLoading(true);
        try {
          createReview({
            rating: currentValue,
            comment: input,
            idBook: id,
          })
            .then(() => {
              toast.success("Thank you for your review!");
              setIsLoading(false);
              setCurrentValue(0);
              setInput("");
              fetchingReviews();
            })
            .catch((error) => {
              toast.error("Cannot create a review!");
              setIsLoading(false);
            });
        } catch (error) {
          toast.error(error);
          setIsLoading(false);
        }
      }
    }
  };

  useEffect(() => {
    getReviewOfBook(id).then((reviews) => {
      setListReview(reviews);
      const countedHash = reviews.reduce((acc, curr) => {
        if (!acc[curr.rating]) acc[curr.rating] = 1;
        else acc[curr.rating] += 1;
        return acc;
      }, {});
      const values = Object.values(countedHash);

      const sum = values.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);

      for (let i = 1; i < 6; i++) {
        if (countedHash[i]) {
          countedHash[i] = ((countedHash[i] * 100) / sum).toFixed(0);
        } else {
          countedHash[i] = 0;
        }
      }
      setPercentStar(countedHash);
    });
  }, [id]);

  console.log(percentStar);
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
              {rating}
            </Box>{" "}
            <Box fontWeight="500" fontSize="20px" display="inline">
              out of 5
            </Box>
          </Box>
          <Rating start={rating} />
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
        <RatingProgress value={percentStar} />
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
            <Button
              mt={4}
              colorScheme="purple"
              onClick={handleSendReview}
              isLoading={isLoading}
            >
              Send
            </Button>
          </Flex>
        </Box>
      </Box>
      {!listReview && <Loading />}
      {listReview && (
        <>
          <Pagination
            itemsPerPage={4}
            items={listReview}
            showReview={showReview}
            isReview
          />
        </>
      )}
    </Box>
  );
};

export default CustomerReviews;
