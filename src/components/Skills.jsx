import React from "react";
import { Heading, Text, Flex, Image, Box } from '@chakra-ui/react';
import { motion } from "framer-motion";

const Skills = () => {
    return(
        <Flex id='skills' h='100vh' w='100%' justifyContent='flex-start' alignItems='flex-start' overflow='hidden'>
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
                    <Text fontSize={25} color='gray.500' dropShadow='(0 10px 8px rgb(0 0 0 / 0.04))(0 4px 3px rgb(0 0 0 / 0.1))' mt={15}>As ferramentas que domino.</Text>
                </motion.div>
            </Flex>
            <Flex h='100%' w='60%' justifyContent='center' alignItems='center' p={20}>
                <Flex justifyContent='center' alignItems='center' id="skillLogos" h='100%' w='100%' position='relative'>
                    <Box w='110px' position='absolute' top={20} left={32}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}   
                            transition={{ duration: 1 }}
                        >    
                            <Image h='100px' w='100px' fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="mongo_logo" />
                        </motion.div>
                    </Box>
                    <Box w='110px' position='absolute' top={4} insetX={0} m='auto'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >    
                            <Image h='100px' w='100px' fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html_logo" />
                        </motion.div>
                    </Box>
                    <Box w='110px' position='absolute' top={20} right={32}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}   
                            transition={{ duration: 1 }}
                        >    
                            <Image h='100px' w='100px' fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css_logo" />
                        </motion.div>
                    </Box>
                    <Box w='110px' position='absolute' left={5}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}   
                            transition={{ duration: 1 }}
                        >    
                            <Image h='100px' w='100px' fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="mysql_logo" />
                        </motion.div>
                    </Box>
                    <Box w='200px' position='absolute' bottom={16} left={32}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}   
                            transition={{ duration: 1 }}
                        >    
                            <Image h='150px' w='150px' fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs_logo" />
                        </motion.div>
                    </Box>
                    <Box w='110px' position='absolute' bottom='-10%' insetX={0} m='auto'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >    
                            <Image h='200px' w='200px' fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" alt="php_logo" />
                        </motion.div>
                    </Box>
                    <Box w='110px' position='absolute' bottom={20} right={32}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}   
                            transition={{ duration: 1 }}
                        >   
                            <Image h='100px' w='100px' fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" alt="docker_logo" />
                        </motion.div>
                    </Box>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Image h='100px' w='100px' fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript_logo" />
                    </motion.div>
                    <Box w='110px' position='absolute' right={5}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}   
                            transition={{ duration: 1 }}
                        >    
                            <Image h='100px' w='100px' fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react_logo" />
                        </motion.div>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Skills;