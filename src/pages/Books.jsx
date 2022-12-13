import { Box, Grid, GridItem, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import StoreFeatures from "../components/Features/StoreFeatures";
import Footer from "../components/Footer/Footer";
import LeftSide from '../components/LeftSide/LeftSide';
import PaginationContainer from "../components/PaginationContainer/PaginationContainer";

const Books = () => {

  return (
    <div>
      <Header />
      <Box bg="linear-gradient(90deg, #FBF7FC 22.24%, rgba(251, 247, 252, 0) 100%)">
        <Breadcrumb className="container" fontSize={"md"} pt={3} pb={3}>
          <BreadcrumbItem color='#8D28AD'>
            <BreadcrumbLink as={Link} to="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem color='#755A7D'>
            <BreadcrumbLink as={Link} to="/books" isCurrentPage>
              Books
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Grid templateColumns="repeat(5, 1fr)" marginLeft={20} mt={8}>
        <GridItem colSpan={1} >
          <LeftSide/>
        </GridItem>
        <PaginationContainer />
      </Grid>
      <StoreFeatures />
      <Footer />
    </div>
  );
};

export default Books;
