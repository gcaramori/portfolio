import React, { useContext } from "react";
import { Heading, Text, Flex, Image, Box } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { LanguageContext } from "../contexts/languageContext";
import Languages from '../lib/languages';

const Skills = () => {
    const { language } = useContext(LanguageContext);
    
    return(
        <Flex id='skills' h={{ base: 'auto', lg: '100vh'}} w='100%' flexDir={{ base: 'column', lg: 'row' }} justifyContent='flex-start' alignItems={{ base: 'flex-start', lg: 'center', xl: 'flex-start' }} overflow='hidden'>
            <Flex h='100%' w={{ base: '100%', lg: '40%' }} flexDir='column' justifyContent='center' alignItems={{ base: 'flex-end', lg: 'flex-start' }} p={{ base: 6, lg: 10, '2xl': 20 }}>
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Heading as='h1' fontSize={{ base: 50, '2xl': 60 }} textTransform='uppercase' maxW='800px'>
                        Skills
                    </Heading>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Text fontSize={25} color='gray.500' dropShadow='(0 10px 8px rgb(0 0 0 / 0.04))(0 4px 3px rgb(0 0 0 / 0.1))' mt={{ base: 3, xl: 15 }}>{Languages[language]?.skills?.subtitle}</Text>
                </motion.div>
            </Flex>
            <Flex h='100%' w={{ base: '100%', lg: '60%' }} justifyContent='center' alignItems='center' p={{ base: 6, lg: 10, '2xl': 20 }}>
                <Flex justifyContent={{ base: 'space-between', xl: 'center' }} alignItems='center' id="skillLogos" h='100%' w='100%' position='relative' flexWrap={{ base: 'wrap', xl: 'nowrap' }}>
                    <Box w={{ base: '48%', md: '30%', xl: '110px' }} mb={{ base: 6, xl: 0 }} position={{ base: 'relative', xl: 'absolute' }} top={{ base: 0, xl: 20 }} left={{ base: 0, xl: 32 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}   
                            transition={{ duration: 1 }}
                        >    
                            <Image h={{ base: '100%', xl: '100px' }} w={{ base: '100%', xl: '100px' }} fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="mongo_logo" />
                        </motion.div>
                    </Box>
                    <Box w={{ base: '48%', md: '30%', xl: '110px' }} mb={{ base: 6, xl: 0 }} position={{ base: 'relative', xl: 'absolute' }} top={{ base: 0, xl: 4 }} insetX={0} m={{ base: 'unset', xl: 'auto' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >    
                            <Image h={{ base: '100%', xl: '100px' }} w={{ base: '100%', xl: '100px' }} fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html_logo" />
                        </motion.div>
                    </Box>
                    <Box w={{ base: '48%', md: '30%', xl: '110px' }} mb={{ base: 6, xl: 0 }} position={{ base: 'relative', xl: 'absolute' }} top={{ base: 0, xl: 20 }} right={{ base: 0, xl: 32 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}  
                            transition={{ duration: 1 }}
                        >    
                            <Image h={{ base: '100%', xl: '100px' }} w={{ base: '100%', xl: '100px' }} fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css_logo" />
                        </motion.div>
                    </Box>
                    <Box w={{ base: '48%', md: '30%', xl: '110px' }} mb={{ base: 6, xl: 0 }} position={{ base: 'relative', xl: 'absolute' }} left={{ base: 0, xl: 5 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}   
                            transition={{ duration: 1 }}
                        >    
                            <Image h={{ base: '100%', xl: '100px' }} w={{ base: '100%', xl: '100px' }} fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="mysql_logo" />
                        </motion.div>
                    </Box>
                    <Box w={{ base: '48%', md: '30%', xl: '200px' }} mb={{ base: 6, xl: 0 }} position={{ base: 'relative', xl: 'absolute' }} bottom={{ base: 0, xl: 16 }} left={{ base: 0, xl: 32 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}   
                            transition={{ duration: 1 }}
                        >    
                            <Image h={{ base: '100%', xl: '150px' }} w={{ base: '100%', xl: '150px' }} fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs_logo" />
                        </motion.div>
                    </Box>
                    <Box w={{ base: '48%', md: '30%', xl: '110px' }} mb={{ base: 6, xl: 0 }} position={{ base: 'relative', xl: 'absolute' }} bottom={{ base: 0, xl: '-10%' }} insetX={0} m={{ base: 'unset', xl: 'auto' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >    
                            <Image h={{ base: '100%', xl: '200px' }} w={{ base: '100%', xl: '200px' }} fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" alt="php_logo" />
                        </motion.div>
                    </Box>
                    <Box w={{ base: '48%', md: '30%', xl: '110px' }} mb={{ base: 6, xl: 0 }} position={{ base: 'relative', xl: 'absolute' }} bottom={{ base: 0, xl: 20 }} right={{ base: 0, xl: 32 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}   
                            transition={{ duration: 1 }}
                        >   
                            <Image h={{ base: '100%', xl: '100px' }} w={{ base: '100%', xl: '100px' }} fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" alt="docker_logo" />
                        </motion.div>
                    </Box>
                    <Box w={{ base: '48%', md: '30%', xl: '110px' }} mb={{ base: 6, xl: 0 }} position='relative'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            width={{ base: '50%', xl: '110px' }}
                        >
                            <Image h={{ base: '100%', xl: '100px' }} w={{ base: '100%', xl: '100px' }} fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript_logo" />
                        </motion.div>
                    </Box>
                    <Box w={{ base: '48%', md: '30%', xl: '110px' }} mb={{ base: 6, xl: 0 }} position={{ base: 'relative', xl: 'absolute' }} right={{ base: 0, xl: 5 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}   
                            transition={{ duration: 1 }}
                        >    
                            <Image h={{ base: '100%', xl: '100px' }} w={{ base: '100%', xl: '100px' }} fit='contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react_logo" />
                        </motion.div>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Skills;