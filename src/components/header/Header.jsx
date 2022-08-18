import React from 'react'
import { useColorMode } from '@chakra-ui/react';
import { Heading, Flex, Box, Text, Link, Button } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Scene, PerspectiveCamera } from 'three';

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    
    return (
        <header>
            <Flex justifyContent={'space-between'} alignItems={'center'} position='relative' px={20} py={3} bg={'#576574'} maxW="80%" mx="auto" boxShadow="md" borderBottomLeftRadius="xl" borderBottomRightRadius="xl">
                <Box>
                    <Link href="#" fontSize={20} fontWeight={500} mr={10}>Projetos</Link>
                    <Link href="#" fontSize={20} fontWeight={500}>Sobre mim</Link>
                </Box>
                <Box>
                    <Button colorScheme='blackAlpha' variant='solid' onClick={() => toggleColorMode()}>
                    { colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                    </Button>
                </Box>
            </Flex>
        </header>
    )
}

export default Header