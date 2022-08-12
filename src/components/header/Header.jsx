import React from 'react'
import { Heading, Container, Text, Button } from '@chakra-ui/react'
import { FaSun, FaRegSun } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <Container px={4} py={3} bg={'#576574'} maxW="80%" mx="auto" boxShadow="md" borderBottomLeftRadius="lg" borderBottomRightRadius="lg">
                <Button colorScheme='blackAlpha' variant='solid'>
                    <FaSun />
                </Button>
            </Container>
        </header>
    )
}

export default Header