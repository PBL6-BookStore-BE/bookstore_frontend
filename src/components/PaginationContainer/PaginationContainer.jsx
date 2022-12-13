import { GridItem, Heading } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBookByFilter } from '../../store/cases/filter/slice';
import Loading from '../Loading/Loading';
import Pagination from '../Pagination/Pagination';

const PaginationContainer = () => {
    const dispatch = useDispatch();
    const { data, isLoading, category, publisher, lowest, highest } = useSelector((state) => state.filter);

    const loadBooks = useCallback(async () => {
        try {
        dispatch(listBookByFilter());
        } catch (error) {
        console.log(error);
        }
    }, [dispatch]);

    useEffect(() => {
        loadBooks();
    }, [loadBooks, category, publisher, lowest, highest]);

    if (isLoading) {
        return <Loading />;
    }

    if (data.length === 0) {
        return (
            <Heading ml={4} size='md' fontWeight='600' color='#8D28AD'>No data to display.....</Heading>
        )
    }

  return (
    <GridItem colSpan={4} align='left'>
        <Pagination itemsPerPage={3} items={data}/> 
    </GridItem>
  )
}

export default PaginationContainer