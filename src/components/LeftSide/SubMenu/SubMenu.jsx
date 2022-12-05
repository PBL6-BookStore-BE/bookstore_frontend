import React, { useState, useEffect} from 'react'
import { Button, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Text, Stack, Flex, RadioGroup, Radio } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { handleChange } from '../../../store/cases/filter/slice';
import { listCategories } from '../../../store/cases/category/action';
import { listPublishers } from '../../../store/cases/publisher/action';
import Loading from '../../Loading/Loading'

const SubMenu = ({ title, subMenu, iconClosed, iconOpened }) => {
    const dispatch = useDispatch();
    const { category, publisher, lowest, highest, defaultValue } = useSelector((state) => state.filter);
    const { categories, isLoadingCategory } = useSelector((state) => state.category);
    const { publishers, isLoadingPublisher } = useSelector((state) => state.publisher);

    const [subnav, setSubnav] = useState(false);
    const [sliderValue1, setSliderValue1] = useState(0);
    const [sliderValue2, setSliderValue2] = useState(50);

    const handleSearch = (e) => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
    }; 

    const loadListBookByFilter = useCallback(async () => {
        try {
            dispatch(listCategories());
            dispatch(listPublishers());
        } catch (error) {
            console.log(error);
        }
    }, [dispatch])

    useEffect(() => {
        loadListBookByFilter();
    }, [loadListBookByFilter, defaultValue]);
    const showSubnav = () => setSubnav(!subnav);

    const newCategory = categories.map((item) => {
        return item.name
    })
    const listCate = ['All', ...newCategory]

    const newPublisher = publishers.map((item) => {
        return item.name
    })
    const listPublisher = ['All', ...newPublisher]

    if (isLoadingCategory || isLoadingPublisher) {
        return <Loading />;
    }

    return (
        <>
            {title === 'Categories' && 
                <>
                    <div className="submenu" onClick={subMenu && showSubnav}>
                        <Flex className="title">
                            <Text fontSize='20px' fontWeight='bold'>{title}</Text>
                            
                            {subMenu && subnav 
                                ? <div className="icon"><i>{iconOpened}</i></div> : subMenu
                                ? <div className="icon"><i>{iconClosed}</i></div> : null
                            }
                        </Flex>
                    </div>
                    <RadioGroup 
                        name='category'
                        id='category'
                        value={category}
                    >
                        <Stack direction='column' marginLeft={20}>
                            {subnav && listCate.map((item, index) =>{
                                return (
                                    <Radio 
                                        colorScheme='purple'
                                        name='category'
                                        id='category'
                                        onChange={handleSearch} 
                                        key={index} 
                                        value={item}
                                    >
                                        {item}
                                    </Radio>
                                )
                            })}
                        </Stack>
                    </RadioGroup>
                    {subnav && 
                        <Button color='brand' variant='link' marginTop={3} marginLeft={24}>
                            + Load more
                        </Button>
                    }
                </>
            } 
            {title === 'Publisher' && 
                <>
                    <div className="submenu" onClick={subMenu && showSubnav}>
                        <Flex className="title">
                            <Text fontSize='20px' fontWeight='bold'>{title}</Text>
                            
                            {subMenu && subnav 
                                ? <div className="icon"><i>{iconOpened}</i></div> : subMenu
                                ? <div className="icon"><i>{iconClosed}</i></div> : null
                            }
                        </Flex>
                    </div>
                    <RadioGroup 
                        name='publisher'
                        id='publisher'
                        value={publisher}
                        
                    >
                        <Stack direction='column' marginLeft={20}>
                            {subnav && listPublisher.map((item, index) =>{
                                return (
                                    <Radio 
                                        colorScheme='purple'
                                        name='publisher'
                                        id='publisher'
                                        onChange={handleSearch} 
                                        key={index} 
                                        value={item}
                                    >
                                        {item}
                                    </Radio>
                                )
                            })}
                        </Stack>
                    </RadioGroup>
                    {subnav && 
                        <Button color='brand' variant='link' marginTop={3} marginLeft={24}>
                            + Load more
                        </Button>
                    }
                </>
            } 
            {title === 'Price Range' && 
            <>
                <div className="submenu" onClick={subMenu && showSubnav}>
                    <Flex className="title">
                        <Text fontSize='20px' fontWeight='bold'>Price Range</Text>
                        {subMenu && subnav 
                            ? <div className="icon"><i>{iconOpened}</i></div> : subMenu
                            ? <div className="icon"><i>{iconClosed}</i></div> : null
                        }
                    </Flex>
                </div>
                    {subnav && 
                        <RangeSlider 
                            className="slider" 
                            min={0} max={50}
                            defaultValue={defaultValue} 
                            colorScheme='purple' 
                            width='60%' 
                            marginLeft={16}
                            mb={20}
                            step={5}
                            onChange={(e) => {
                                dispatch(handleChange({ name: 'lowest', value: e[0] }));
                                dispatch(handleChange({ name: 'highest', value: e[1] }));
                            }}
                        >
                            <RangeSliderTrack bg='#EEDFF3'>
                                <RangeSliderFilledTrack bgColor='brand' />
                            </RangeSliderTrack>
                            <RangeSliderThumb 
                                bg='#8D28AD' index={0}
                            >
                                <div className='label'>
                                    <span className='text'>{lowest}</span>
                                </div>
                            </RangeSliderThumb>
                            <RangeSliderThumb 
                                bg='#8D28AD' index={1} 
                            >
                                <div className='label'>
                                    <span className='text'>{highest}</span>
                                </div> 
                            </RangeSliderThumb>
                        </RangeSlider>
                    }
            </>
            }
        </>
    )
}

export default SubMenu
