import React from "react";
import { Heading, Text, Button, Flex } from '@chakra-ui/react';
import { motion } from "framer-motion";

const Home = ({ scroll, isActiveFrame }) => {
    return(
        <>
            <Flex h='100vh' opacity={ isActiveFrame === true ? '1' : '0' } flexDirection='column' justifyContent='center' alignItems='flex-start' p={20}>
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Heading fontSize={60} textTransform='uppercase' maxW='800px'>
                        Olá, eu sou <Text fontWeight='bold'>Guilherme Caramori</Text>
                    </Heading>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Text fontSize={25} color='gray.500' mt={15}>Desenvolvedor FullStack / Freelancer</Text>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Button mt={10} p={7} boxShadow="md" bg='trasparent' color='#01a3a4' fontSize={20} border='1px solid #00cec9' borderRadius={0} textTransform='uppercase' _hover={{ bg: '#01a3a4', color: 'white', border: '1px solid white' }}>Contate-me!</Button>
                </motion.div>
            </Flex>
        </>
    );
}

export default Home;