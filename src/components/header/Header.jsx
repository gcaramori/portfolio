import React from 'react'
import { useColorMode } from '@chakra-ui/react';
import { Heading, Container, Text, Button } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <header>
            <Container px={4} py={3} bg={'#576574'} maxW="80%" mx="auto" boxShadow="md" borderBottomLeftRadius="lg" borderBottomRightRadius="lg">
                <Button colorScheme='blackAlpha' variant='solid' onClick={() => toggleColorMode()}>
                { colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                </Button>
            </Container>
        </header>
    )
}

export default Header