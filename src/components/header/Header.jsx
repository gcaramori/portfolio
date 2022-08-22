import React from 'react'
import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Heading, Flex, Box, Text, Link, Button } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Scene, PerspectiveCamera } from 'three';
import { IconContext } from 'react-icons';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const headerBg = useColorModeValue('gray.50', 'gray.800');
    const fontColor = useColorModeValue('gray.800', 'white');

    return (
        <header>
            <Flex justifyContent={'center'} alignItems={'center'} position='relative' px={20} py={2} bg={headerBg} boxShadow="md">
                <Flex justifyContent={'space-between'} alignItems={'center'} mr='300px'>
                    <Heading element={'h1'} href="#" display={'inline-block'} color={fontColor} fontSize={16} fontWeight={600} mr={16}>Guilherme Caramori</Heading>
                    <IconContext.Provider value={{ size: "2em" }}>
                        <Link href="https://github.com/gcaramori" display={'inline-block'} color={fontColor} mr={5} isExternal>
                            <AiFillGithub />
                        </Link>
                        <Link href="https://www.linkedin.com/in/gcaramori/" display={'inline-block'} color={fontColor} isExternal>
                            <AiFillLinkedin />
                        </Link>
                    </IconContext.Provider>
                </Flex>
                <Box>
                    <Button w='28px' h='35px' colorScheme='yellow' variant='solid' onClick={() => toggleColorMode()}>
                    { colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                    </Button>
                </Box>
            </Flex>
        </header>
    )
}

export default Header