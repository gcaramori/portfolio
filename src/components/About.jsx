import React, { useContext } from "react";
import { Heading, Text, Flex, Box } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { LanguageContext } from "../contexts/languageContext";
import Languages from '../lib/languages';

const About = () => {
    const { language } = useContext(LanguageContext);

    return(
        <Flex id='about' h={{ base: 'auto', lg: '100vh'}} w='100%' flexDir={{ base: 'column', lg: 'row' }} justifyContent='flex-start' alignItems={{ base: 'flex-start', lg: 'center', '2xl': 'flex-start' }} overflow='hidden'>
            <Flex h='100%' w={{ base: '100%', lg: '40%', '2xl': '50%' }} flexDir='column' justifyContent='center' alignItems='flex-start' p={{ base: 6, lg: 10, '2xl': 20 }}>
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{ width: '100%' }}
                >
                    <Heading as='h1' fontSize={{ base: 50, '2xl': 60 }} textAlign={{ base: 'right', lg: 'left' }} textTransform='uppercase' maxW='800px'>
                        {Languages[language]?.about?.heading}
                    </Heading>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{ width: '100%' }}   
                >
                    <Text fontSize={25} textAlign={{ base: 'right', lg: 'left' }} color='gray.500' dropShadow='(0 10px 8px rgb(0 0 0 / 0.04))(0 4px 3px rgb(0 0 0 / 0.1))' mt={{ base: 3, lg: 15}}>{Languages[language]?.about?.subtitle}</Text>
                </motion.div>
            </Flex>
            <Flex h='100%' w={{ base: '100%', lg: '60%', '2xl': '50%' }} flexDir='column' justifyContent='center' alignItems='flex-start' p={{ base: 6, '2xl': 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: -45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Box w='100%' fontSize={{ base: 'sm', '2xl': 'md' }} fontWeight='600' mb={{ base: 6, lg: 3, '2xl': 14 }} textAlign={{ base: 'justify', lg: 'unset' }} pl={{ md: 50, lg: 0 }}>
                        <Text mb={1}>
                            {Languages[language]?.about?.description1}
                        </Text>
                        <Text mb={1}>
                            {Languages[language]?.about?.description2}
                        </Text>
                    </Box>
                </motion.div>
                <Flex w='100%' flexDir={{ base: 'row', '2xl': 'column' }} wrap='wrap' justifyContent={{ base: 'center', lg: 'space-between', '2xl': 'center'}} alignItems='flex-start'>
                    <Box width={{ lg: '48%', '2xl': '100%' }}>
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Box mb={5}>
                                <Text fontWeight='600' pb={2} borderBottom='4px solid #ccc' display='inline-block'>
                                    1998
                                </Text>
                                <Text display='block' mt={3} fontSize='sm' textAlign='justify'>
                                    {Languages[language]?.about?.year98}
                                </Text>
                            </Box>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -55 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Box mb={5}>
                                <Text fontWeight='600' pb={2} borderBottom='4px solid #ccc' display='inline-block'>
                                    2004
                                </Text>
                                <Text display='block' mt={3} fontSize='sm' textAlign='justify'>
                                    {Languages[language]?.about?.year04_1}
                                </Text>
                                <Text display='block' fontSize='sm' textAlign='justify'>
                                    {Languages[language]?.about?.year04_2}
                                </Text>
                            </Box>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Box mb={5}>
                                <Text fontWeight='600' pb={2} borderBottom='4px solid #ccc' display='inline-block'>
                                    2016
                                </Text>
                                <Text display='block' mt={3} fontSize='sm' textAlign='justify'>
                                    {Languages[language]?.about?.year16_1}
                                </Text>
                                <Text fontSize='sm' textAlign='justify'>    
                                    {Languages[language]?.about?.year16_2}
                                </Text>
                                <Text fontSize='sm' textAlign='justify'>
                                    {Languages[language]?.about?.year16_3}
                                </Text>
                            </Box>
                        </motion.div>
                    </Box>
                    <Box width={{ base: '100%', lg: '48%', '2xl': '100%' }}>
                        <motion.div
                            initial={{ opacity: 0, y: -65 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Box mb={5}>
                                <Text fontWeight='600' pb={2} borderBottom='4px solid #ccc' display='inline-block'>
                                    2018
                                </Text>
                                <Text display='block' mt={3} fontSize='sm' textAlign='justify'>
                                    {Languages[language]?.about?.year18_1}
                                </Text>
                                <Text fontSize='sm' textAlign='justify'>    
                                    {Languages[language]?.about?.year18_2}
                                </Text>
                            </Box>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -70 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Box mb={5}>
                                <Text fontWeight='600' pb={2} borderBottom='4px solid #ccc' display='inline-block'>
                                    2022
                                </Text>
                                <Text display='block' mt={3} fontSize='sm' textAlign='justify'>
                                    {Languages[language]?.about?.year22_1}
                                </Text>
                                <Text display='block' fontSize='sm' textAlign='justify'>
                                    {Languages[language]?.about?.year22_2}
                                </Text>
                            </Box>
                        </motion.div>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default About;