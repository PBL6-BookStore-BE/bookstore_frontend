import React, { useState} from 'react'
import { Button, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Text, Stack, Flex, RadioGroup, Radio } from "@chakra-ui/react";

const SubMenu = ({ title, subMenu, iconClosed, iconOpened }) => {
    console.log(title);
    const [value, setValue] = React.useState(subMenu[0].title)
    const [subnav, setSubnav] = useState(false);
    const [sliderValue1, setSliderValue1] = useState(50)
    const [sliderValue2, setSliderValue2] = useState(150)

    const showSubnav = () => setSubnav(!subnav);
    return (
        <>
            {title !== 'Price Range' && 
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
                    <RadioGroup onChange={setValue} value={value}>
                        <Stack direction='column' marginLeft={20}>
                            {subnav && subMenu.map((item, index) =>{
                                return (
                                    <Radio key={index} value={item.title}>{item.title}</Radio>
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
                            min={0} max={300}
                            defaultValue={[50, 150]} 
                            colorScheme='purple' 
                            width='60%' 
                            marginLeft={16}
                            mb={20}
                            step={10}
                            onChangeEnd={(val) => {
                                setSliderValue1(val[0]);
                                setSliderValue2(val[1]);
                            }}
                            onChange={(e) => {
                                setSliderValue1(e[0]);
                                setSliderValue2(e[1])
                                }
                            }
                        >
                            <RangeSliderTrack bg='#EEDFF3'>
                                <RangeSliderFilledTrack />
                            </RangeSliderTrack>
                            <RangeSliderThumb bg='#8D28AD' index={0}>
                                <div className='label'>
                                    <span className='text'>{sliderValue1}</span>
                                </div>
                            </RangeSliderThumb>
                            <RangeSliderThumb bg='#8D28AD' index={1} >
                                <div className='label'>
                                    <span className='text'>{sliderValue2}</span>
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
