import React from "react";
import { Heading, Text, Button, Box } from '@chakra-ui/react';

const Home = () => {
    return (
        <Box p={20}>
            <Heading fontSize={50} textTransform='uppercase' maxW='800px'>
                Olá, eu sou <Text fontWeight='bold'>Guilherme Caramori</Text>
            </Heading>
            <Text fontSize={20} color='gray.500' dropShadow='(0 10px 8px rgb(0 0 0 / 0.04))(0 4px 3px rgb(0 0 0 / 0.1))' mt={15}>Desenvolvedor Full Stack / Freelancer</Text>
            <Button mt={10} boxShadow="md" bg='purple.600' textTransform='uppercase' _hover={{ bg: 'purple.800' }}>Contate-me!</Button>
        </Box>
    );
}

export default Home;