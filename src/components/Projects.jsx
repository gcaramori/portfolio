import React from "react";
import { Heading, Text, Flex, Box, Link, Image } from '@chakra-ui/react';
import { motion } from "framer-motion";

const Projects = () => {
    return(
        <Flex id='projects' h='100vh' justifyContent='flex-start' alignItems='flex-start'>
            <Flex h='100%' w='40%' flexDirection='column' justifyContent='center' alignItems='flex-start' p={20}>
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
                    <Text fontSize={25} color='gray.500' dropShadow='(0 10px 8px rgb(0 0 0 / 0.04))(0 4px 3px rgb(0 0 0 / 0.1))' mt={15}>Um pouco do meu trabalho.</Text>
                </motion.div>
            </Flex>
            <Flex h='100%' w='60%' justifyContent='center' alignItems='center' p={20}>
                <Flex w='100%' justifyContent='center' alignItems='center' flexWrap='wrap' gap={6}>
                    <Box w='48%' h='100%'>
                        <Box w='100%' h='30%' mb={5} borderRadius='sm' boxShadow='lg' overflow='hidden' transition='all 200ms ease-in-out' _hover={{ transform: 'scale(1.1)' }}>
                            <Link position='relative' href='https://criptobeer.com.br' target='_blank'>
                                <Image fit='cover' w='100%' h='100%' src='/criptobeer.png' alt='criptobeer_homepage' /> 
                            </Link>
                        </Box>
                        <Box w='100%' h='30%' mb={5} borderRadius='sm' boxShadow='lg' overflow='hidden' transition='all 200ms ease-in-out' _hover={{ transform: 'scale(1.1)' }}>
                            <Link href='https://criptobeer.com.br'>
                                <Image fit='cover' w='100%' h='100%' src='/criptobeer.png' alt='criptobeer_homepage' />
                            </Link>
                        </Box>
                        <Box w='100%' h='30%' mb={5} borderRadius='sm' boxShadow='lg' overflow='hidden' transition='all 200ms ease-in-out' _hover={{ transform: 'scale(1.1)' }}>
                            <Link href='https://criptobeer.com.br'>
                                <Image fit='cover' w='100%' h='100%' src='/criptobeer.png' alt='criptobeer_homepage' />
                            </Link>
                        </Box>
                    </Box>
                    <Box w='48%' h='100%'>
                        <Box w='100%' h='30%' mb={5} borderRadius='sm' boxShadow='lg' overflow='hidden' transition='all 200ms ease-in-out' _hover={{ transform: 'scale(1.1)' }}>
                            <Link href='https://criptobeer.com.br'>
                                <Image fit='cover' w='100%' h='100%' src='/criptobeer.png' alt='criptobeer_homepage' />
                            </Link>
                        </Box>
                        <Box w='100%' h='30%' mb={5} borderRadius='sm' boxShadow='lg' overflow='hidden' transition='all 200ms ease-in-out' _hover={{ transform: 'scale(1.1)' }}>
                            <Link href='https://criptobeer.com.br'>
                                <Image fit='cover' w='100%' h='100%' src='/criptobeer.png' alt='criptobeer_homepage' />
                            </Link>
                        </Box>
                        <Box w='100%' h='30%' mb={5} borderRadius='sm' boxShadow='lg' overflow='hidden' transition='all 200ms ease-in-out' _hover={{ transform: 'scale(1.1)' }}>
                            <Link href='https://criptobeer.com.br'>
                                <Image fit='cover' w='100%' h='100%' src='/criptobeer.png' alt='criptobeer_homepage' />
                            </Link>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Projects;