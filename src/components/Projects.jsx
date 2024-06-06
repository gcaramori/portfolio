import React, { useContext } from "react";
import { Heading, Text, Flex, Box, Link, Image } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { FiExternalLink } from 'react-icons/fi';
import { LanguageContext } from "../contexts/languageContext";
import Languages from '../lib/languages';

const Projects = () => {
    const { language } = useContext(LanguageContext);

    return(
        <Flex id='projects' h={{ base: 'auto', lg: '100vh'}} w='100%' flexDir={{ base: 'column', lg: 'row' }} justifyContent='flex-start' alignItems={{ base: 'flex-start', lg: 'center', '2xl': 'flex-start' }}>
            <Flex h='100%' w={{ base: '100%', lg: '35%', '2xl': '35%' }} flexDir='column' justifyContent='center' alignItems={{ base: 'flex-end', lg: 'flex-start' }} p={{ base: 6, lg: 10, '2xl': 20 }}>
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{ width: '100%' }}
                >
                    <Heading as='h1' fontSize={{ base: 50, '2xl': 60 }} textAlign={{ base: 'right', lg: 'left' }} textTransform='uppercase' maxW='800px'>
                        {Languages[language]?.projects?.heading}
                    </Heading>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{ width: '100%' }} 
                >
                    <Text fontSize={25} textAlign={{ base: 'right', lg: 'left' }} color='gray.500' dropShadow='(0 10px 8px rgb(0 0 0 / 0.04))(0 4px 3px rgb(0 0 0 / 0.1))' mt={{ base: 3, lg: 15}}>{Languages[language]?.projects?.subtitle}</Text>
                </motion.div>
            </Flex>
            <Flex h='100%' w={{ base: '100%', lg: '65%', '2xl': '65%' }} justifyContent='center' alignItems='center' p={{ base: 6, lg: 10, '2xl': 20 }}>
                <Flex w='100%' flexDir={{ base: 'column', md: 'row' }} justifyContent='center' alignItems='flex-start' flexWrap='wrap' gap={{ base: 4, xl: 8 }}>
                    <Box w={{ base: '100%', md: '48%', xl: '45%' }} h='100%'>
                        <motion.div
                            initial={{ opacity: 0, y: -80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >    
                            <Link href='https://criptobeer.com.br' target='_blank' display='block' position='relative' w='100%' h='30%' mb={5} borderRadius='sm' boxShadow='lg' overflow='hidden' transition='all 200ms ease-in-out' cursor='pointer' _hover={{ transform: 'scale(1.1)' }} role='group'>
                                <Box>
                                    <Image fit={{ base: 'contain', '2xl': 'cover'  }} w='100%' h={'auto'} src='projects/criptobeer.png' alt='project_criptobeer' />
                                </Box>
                                <Flex _groupHover={{ opacity: '1' }} opacity='0' transition='all 200ms ease-in-out' position='absolute' top='0' flexDirection='column' justifyContent='center' alignItems='center' h='100%' w='100%' p={2} bg='rgba(0, 0, 0, .6)'>
                                    <Flex mb={3} alignItems='center'>
                                        <Text fontSize='xl' fontWeight='600' mr={4} color='#fff'>Criptobeer</Text>
                                        <FiExternalLink />
                                    </Flex>
                                    <Text fontSize='md' fontWeight='600' color='#fff'>
                                        HTML / TailwindCSS / Javascript
                                    </Text>
                                </Flex>
                            </Link>
                            <Link href='https://panel.performa.ai' target='_blank' display='block' position='relative' w='100%' h='30%' mb={5} borderRadius='sm' boxShadow='lg' overflow='hidden' transition='all 200ms ease-in-out' cursor='pointer' _hover={{ transform: 'scale(1.1)' }} role='group'>
                                <Box>
                                    <Image fit={{ base: 'contain', '2xl': 'cover'  }} w='100%' h={'auto'} src='projects/performa.png' alt='project_performa' />
                                </Box>
                                <Flex _groupHover={{ opacity: '1' }} opacity='0' transition='all 200ms ease-in-out' position='absolute' top='0' flexDirection='column' justifyContent='center' alignItems='center' h='100%' w='100%' p={2} bg='rgba(0, 0, 0, .6)'>
                                    <Flex mb={3} alignItems='center'>
                                        <Text fontSize='xl' fontWeight='600' mr={4} color='#fff'>Performa.AI</Text>
                                        <FiExternalLink />
                                    </Flex>
                                    <Text fontSize='md' fontWeight='600' color='#fff'>
                                        HTML / CSS / PHP / MongoDB
                                    </Text>
                                </Flex>
                            </Link>
                            <Link href='https://vetpalmas.com.br' target='_blank' display='block' position='relative' w='100%' h='30%' mb={5} borderRadius='sm' boxShadow='lg' overflow='hidden' transition='all 200ms ease-in-out' cursor='pointer' _hover={{ transform: 'scale(1.1)' }} role='group'>
                                <Box>
                                    <Image fit={{ base: 'contain', '2xl': 'cover'  }} w='100%' h={'auto'} src='projects/vetpalmas.png' alt='project_vetpalmas' />
                                </Box>
                                <Flex _groupHover={{ opacity: '1' }} opacity='0' transition='all 200ms ease-in-out' position='absolute' top='0' flexDirection='column' justifyContent='center' alignItems='center' h='100%' w='100%' p={2} bg='rgba(0, 0, 0, .6)'>
                                    <Flex mb={3} alignItems='center'>
                                        <Text fontSize='xl' fontWeight='600' mr={4} color='#fff'>Vetpalmas</Text>
                                        <FiExternalLink />
                                    </Flex>
                                    <Text fontSize='md' fontWeight='600' color='#fff'>
                                        HTML / TailwindCSS
                                    </Text>
                                </Flex>
                            </Link>
                        </motion.div>
                    </Box>
                    <Box w={{ base: '100%', md: '48%', xl: '45%' }} h='100%'>
                        <motion.div
                            initial={{ opacity: 0, y: '-100px' }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                        >  
                            <Link href='https://www.unit5strengthandfitness.com' target='_blank' display='block' position='relative' w='100%' h='30%' mb={5} borderRadius='sm' boxShadow='lg' overflow='hidden' transition='all 200ms ease-in-out' cursor='pointer' _hover={{ transform: 'scale(1.1)' }} role='group'>
                                <Box>
                                    <Image fit={{ base: 'cover', '2xl': 'cover'  }} w='100%' h={'195px'} src='projects/unit5.png' alt='project_unit5' />
                                </Box>
                                <Flex _groupHover={{ opacity: '1' }} opacity='0' transition='all 200ms ease-in-out' position='absolute' top='0' flexDirection='column' justifyContent='center' alignItems='center' h='100%' w='100%' p={2} bg='rgba(0, 0, 0, .6)'>
                                    <Flex mb={3} alignItems='center'>
                                        <Text fontSize='xl' fontWeight='600' mr={4} color='#fff'>Unit 5 - Strength and Fitness</Text>
                                        <FiExternalLink />
                                    </Flex>
                                    <Text fontSize='md' fontWeight='600' color='#fff'>
                                        NextJS / TailwindCSS
                                    </Text>
                                </Flex>
                            </Link>

                            <Link href='https://caramori-bjj-academy.vercel.app' target='_blank' display='block' position='relative' w='100%' h='30%' mb={5} borderRadius='sm' boxShadow='lg' overflow='hidden' transition='all 200ms ease-in-out' cursor='pointer' _hover={{ transform: 'scale(1.1)' }} role='group'>
                                <Box>
                                    <Image fit={{ base: 'contain', '2xl': 'cover'  }} w='100%' h={'auto'} src='projects/caramoribjj.png' alt='project_caramoribjj' />
                                </Box>
                                <Flex _groupHover={{ opacity: '1' }} opacity='0' transition='all 200ms ease-in-out' position='absolute' top='0' flexDirection='column' justifyContent='center' alignItems='center' h='100%' w='100%' p={2} bg='rgba(0, 0, 0, .6)'>
                                    <Flex mb={3} alignItems='center'>
                                        <Text fontSize='xl' fontWeight='600' mr={4} color='#fff'>Caramori BJJ Academy</Text>
                                        <FiExternalLink />
                                    </Flex>
                                    <Text fontSize='md' fontWeight='600' color='#fff'>
                                        NextJS / TailwindCSS
                                    </Text>
                                </Flex>
                            </Link>
                            
                            <Link href='https://lust-imobiliaria.vercel.app' target='_blank' display='block' position='relative' w='100%' h='30%' mb={5} borderRadius='sm' boxShadow='lg' overflow='hidden' transition='all 200ms ease-in-out' cursor='pointer' _hover={{ transform: 'scale(1.1)' }} role='group'>
                                <Box>
                                    <Image fit={{ base: 'contain', '2xl': 'cover'  }} w='100%' h={'auto'} src='projects/lustimobiliaria.png' alt='project_lust' />
                                </Box>
                                <Flex _groupHover={{ opacity: '1' }} opacity='0' transition='all 200ms ease-in-out' position='absolute' top='0' flexDirection='column' justifyContent='center' alignItems='center' h='100%' w='100%' p={2} bg='rgba(0, 0, 0, .6)'>
                                    <Flex mb={3} alignItems='center'>
                                        <Text fontSize='xl' fontWeight='600' mr={4} color='#fff'>Lust imobiliária</Text>
                                        <FiExternalLink />
                                    </Flex>
                                    <Text fontSize='md' fontWeight='600' color='#fff'>
                                        ReactJS / Chakra UI
                                    </Text>
                                </Flex>
                            </Link>
                        </motion.div>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Projects;