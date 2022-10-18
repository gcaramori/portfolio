import React from "react";
import { Heading, Text, Flex, Box, Image } from '@chakra-ui/react';
import { motion } from "framer-motion";

const Skills = () => {
    return(
        <Flex id='skills' h='100vh' justifyContent='flex-start' alignItems='flex-start'>
            <Flex h='100%' w='40%' flexDirection='column' justifyContent='center' alignItems='flex-start' p={20}>
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Heading as='h1' fontSize={60} textTransform='uppercase' maxW='800px'>
                        Skills
                    </Heading>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Text fontSize={25} color='gray.500' dropShadow='(0 10px 8px rgb(0 0 0 / 0.04))(0 4px 3px rgb(0 0 0 / 0.1))' mt={15}>As ferramentas que domino</Text>
                </motion.div>
            </Flex>
            <Flex h='100%' w='60%' justifyContent='center' alignItems='center' p={20}>
                <Box display='block' id="skillLogos" h='100%' w='100%' position='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0, y: '10%' }}
                        whileInView={{ opacity: 1, scale: 1 }}   
                        transition={{ duration: 1 }}
                    >    
                        <Image h='100px' w='100px' fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript_logo" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1, y: '-150px', x: '45%' }}   
                        transition={{ duration: 1 }}
                    >    
                        <Image h='100px' w='100px' fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html_logo" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0, x: '80%' }}   
                        transition={{ duration: 1 }}
                    >    
                        <Image h='100px' w='100px' fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css_logo" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1, y: '-80px' }}
                        transition={{ duration: 1 }}
                    >    
                        <Image h='200px' w='200px' fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="tailwind_logo" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1, y: '-70px', x: '65%' }}   
                        transition={{ duration: 1 }}
                    >    
                        <Image h='150px' w='150px' fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs_logo" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1, y: '-200px', x: '10%' }}   
                        transition={{ duration: 1 }}
                    >    
                        <Image h='100px' w='100px' fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react_logo" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}   
                        transition={{ duration: 1 }}
                    >    
                        <Image h='100px' w='100px' fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="mysql_logo" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}   
                        transition={{ duration: 1 }}
                    >    
                        <Image h='100px' w='100px' fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="mongo_logo" />
                    </motion.div>
                </Box>
            </Flex>
        </Flex>
    );
}

export default Skills;