import React from "react";
import { Heading, Text, Flex } from '@chakra-ui/react';
import { motion } from "framer-motion";

const Projects = () => {
    return(
        <Flex id='projects' h='100vh' flexDirection='column' justifyContent='center' alignItems='flex-start' p={20}>
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Heading fontSize={60} textTransform='uppercase' maxW='800px'>
                    Projetos
                </Heading>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Text fontSize={25} color='gray.500' dropShadow='(0 10px 8px rgb(0 0 0 / 0.04))(0 4px 3px rgb(0 0 0 / 0.1))' mt={15}>Estes são meus projetos!</Text>
            </motion.div>
        </Flex>
    );
}

export default Projects;