import React, { useState, useCallback, useEffect } from "react";
import {
  Button,
  Grid,
  GridItem,
  HStack,
  VStack,
  Text,
  Box,
  Flex,
  Image,
  AspectRatio,
} from "@chakra-ui/react";
import { StarIcon } from "../../components/icons";
import ButtonAddCart from "../../components/ButtonAddCart/ButtonAddCart";
import logo from "./img-none.jpg";
import { slideImage, updateQuantity } from "./bookdetailcontext";
import { AddIcon, SubIcon } from "../../components/icons";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { listTopRating } from "../../store/cases/book/action";
import TopRatinginDetailBook from "./TopRatinginDetailBook";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
import { getReviewOfBook } from "../../apis/review.api";
import { saveItemToCart } from "../../store/cases/cart/action";
import { UpdateTotalAmount } from "../../store/cases/cart/slice";

const BookDetail = ({
  id,
  urls,
  name,
  authors,
  price,
  rating,
  publicationDate,
  publisherName,
  description,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [quantitiy, setQuantitiy] = useState(1);
  const [listReview, setListReview] = useState();
  const { isLogged } = useSelector((state) => state.auth);
  const { topRating } = useSelector((state) => state.book);

  const handleBuy = () => {
    if (isLogged) {
      const item = { idBook: id, quantity: quantitiy };
      dispatch(saveItemToCart(item));
      dispatch(UpdateTotalAmount(quantitiy));
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    try {
      if (topRating.data.length <= 0) {
        dispatch(listTopRating());
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, topRating.data.length, rating]);

  useEffect(() => {
    getReviewOfBook(id).then((reviews) => setListReview(reviews));
  }, [id]);

  if (topRating.isFetching) {
    return <Loading />;
  }

  const date = new Date(publicationDate);
  const formatDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  return (
    <VStack align="flex-start" className="container" mt={24}>
      <Grid templateColumns="repeat(6, 1fr)" marginBottom={16}>
        <GridItem colSpan={2}>
          <Flex mb={4}>
            <HStack
              padding="8px 16px"
              border="0.5px solid #f7a456ec"
              borderRadius="12px"
            >
              {rating
                ? Array.from(Array(Math.floor(rating)), (e, i) => {
                    return <StarIcon key={i} />;
                  })
                : ""}
              <HStack className="a-start-icon" marginTop="5px">
                {rating < 5 ? (
                  Array.from(Array(Math.ceil(5 - rating)), (e, i) => {
                    return <StarIcon key={i} />;
                  })
                ) : (
                  <span></span>
                )}
              </HStack>
              <Text fontWeight="500" fontSize="13px" color="#FF7A00">
                {rating.toFixed(1)}
              </Text>
            </HStack>
            <Box
              marginLeft="20px"
              padding="8px 16px"
              border="1px solid #F0E4F4"
              color="#4D4D4D"
              borderRadius="12px"
            >
              {listReview?.length} Reviews
            </Box>
          </Flex>
          <VStack align="flex-start" spacing={5} mb={10}>
            <Text fontSize="30px" fontWeight="bold">
              {name}
            </Text>
            <Flex>
              <Image
                w="60px"
                src={logo}
                borderRadius="50%"
                alt="author book"
                mr={4}
              />
              <Text fontWeight="500" lineHeight="60px">
                {authors[0]}
              </Text>
            </Flex>
            <Text>{description}</Text>
          </VStack>
          <VStack align="flex-start" spacing={5}>
            <Text fontSize="35px" fontWeight="bold" color="#8D28AD">
              ${price}
            </Text>
            <HStack spacing={4}>
              <Box
                display="flex"
                padding="8px 0px"
                bg="#EBEBEB"
                borderRadius="8px"
              >
                <Button
                  color="brand"
                  variant="link"
                  _hover={{
                    opacity: 0.6,
                  }}
                  mr={5}
                  onClick={(e) => {
                    updateQuantity("decrease", quantitiy, setQuantitiy);
                  }}
                >
                  <SubIcon />
                </Button>
                <Text fontWeight="bold">{quantitiy}</Text>
                <Button
                  color="brand"
                  variant="link"
                  _hover={{
                    opacity: 0.6,
                  }}
                  ml={5}
                  onClick={(e) => {
                    updateQuantity("increase", quantitiy, setQuantitiy);
                  }}
                >
                  <AddIcon />
                </Button>
              </Box>
              <ButtonAddCart text="Buy" onClick={handleBuy} />
            </HStack>
          </VStack>
        </GridItem>
        <GridItem colSpan={4} marginLeft={14}>
          <HStack spacing={6}>
            <AspectRatio ratio={2 / 3} w={300}>
              <Image src={urls[0] || logo} borderRadius="20px" />
            </AspectRatio>
            <AspectRatio ratio={2 / 3} w={300}>
              <Image src={urls[count]} borderRadius="20px" />
            </AspectRatio>
            <VStack spacing={5} height={450}>
              <AspectRatio ratio={1} w={40}>
                <Image
                  cursor="pointer"
                  src={urls[2] || "./static-data/img-none.jpg"}
                  borderRadius="5px"
                  onClick={(e) => {
                    slideImage(2, count);
                    setCount(2);
                  }}
                  className={`${count === 2 ? "" : "opacityImg"}`}
                />
              </AspectRatio>
              <AspectRatio ratio={1} w={40}>
                <Image
                  cursor="pointer"
                  src={urls[1] || "./static-data/img-none.jpg"}
                  borderRadius="5px"
                  onClick={(e) => {
                    slideImage(1, count);
                    setCount(1);
                  }}
                  className={`${count === 1 ? "" : "opacityImg"}`}
                />
              </AspectRatio>
            </VStack>
          </HStack>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={4}>
          <Text fontWeight="bold">Details</Text>
          <Grid templateColumns="repeat(4, 1fr)" mt={6}>
            <GridItem
              colSpan={1}
              color="white"
              bg="#4D4D4D"
              borderLeftRadius="6px"
              paddingRight={20}
            >
              <Text padding="16px">Book Title</Text>
              <Text padding="16px">Author</Text>
              <Text padding="16px">Date Published</Text>
              <Text padding="16px">Publisher</Text>
            </GridItem>
            <GridItem
              colSpan={3}
              color="#4D4D4D"
              bg="#FCF8FD"
              borderRightRadius="6px"
            >
              <Text padding="16px 48px">{name}</Text>
              <Text padding="16px 48px">{authors[0]}</Text>
              <Text padding="16px 48px">{formatDate}</Text>
              <Text padding="16px 48px">{publisherName}</Text>
            </GridItem>
          </Grid>
          <CustomerReviews id={id} rating={rating} mt={6} />
        </GridItem>
        <GridItem colSpan={2} marginLeft={8}>
          <Text fontWeight="bold">Related books</Text>
          <VStack mt={6} align="flex-start">
            {/* list book */}
            {topRating.data.map((item) => {
              return <TopRatinginDetailBook key={item.id} {...item} />;
            })}
          </VStack>
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default BookDetail;
