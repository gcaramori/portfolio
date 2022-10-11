import React from "react";
import { Heading, Text, Flex } from '@chakra-ui/react';
import { motion } from "framer-motion";

const About = ({ isActiveFrame }) => {
    return(
        <Flex h='100vh' opacity={ isActiveFrame === true ? '1' : '0' } flexDirection='column' justifyContent='center' alignItems='flex-start' p={20}>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Heading fontSize={60} textTransform='uppercase' maxW='800px'>
                    Sobre mim
                </Heading>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Text fontSize={25} color='gray.500' dropShadow='(0 10px 8px rgb(0 0 0 / 0.04))(0 4px 3px rgb(0 0 0 / 0.1))' mt={15}>Este sou eu!</Text>
            </motion.div>
        </Flex>
    );
}

export default About;