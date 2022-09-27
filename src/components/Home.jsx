import React from "react";
import { Heading, Text, Button, Box } from '@chakra-ui/react';
import { motion } from "framer-motion";

const Home = () => {
    return (
        <Box p={20}>
            <motion.div
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Heading fontSize={60} textTransform='uppercase' maxW='800px'>
                    Olá, eu sou <Text fontWeight='bold'>Guilherme Caramori</Text>
                </Heading>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Text fontSize={25} color='gray.500' dropShadow='(0 10px 8px rgb(0 0 0 / 0.04))(0 4px 3px rgb(0 0 0 / 0.1))' mt={15}>Desenvolvedor Full Stack / Freelancer</Text>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <Button mt={10} p={7} boxShadow="md" bg='purple.600' color='white' fontSize={20} textTransform='uppercase' _hover={{ bg: 'purple.800' }}>Contate-me!</Button>
            </motion.div>
        </Box>
    );
}

export default Home;