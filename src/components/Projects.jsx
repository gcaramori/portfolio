import React from "react";
import { Heading, Text, Flex, Box, Link, Image } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
    return(
        <Flex id='projects' h='100vh' justifyContent='flex-start' alignItems='flex-start'>
            <Flex h='100%' w='40%' flexDirection='column' justifyContent='center' alignItems='flex-start' p={20}>
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Heading as='h1' fontSize={60} textTransform='uppercase' maxW='800px'>
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
                <Flex w='100%' justifyContent='center' alignItems='center' flexWrap='wrap' gap={8}>
                    <Box w='48%' h='100%'>
                        <Box position='relative' w='100%' h='30%' mb={5} borderRadius='sm' boxShadow='lg' overflow='hidden' transition='all 200ms ease-in-out' cursor='pointer' _hover={{ transform: 'scale(1.1)' }} role='group'>
                            <Link href='https://criptobeer.com.br' target='_blank'>
                                <Image fit='contain' w='100%' h='220px' src='projects/criptobeer.png' alt='project_criptobeer' />
                            </Link>
                            <Flex _groupHover={{ opacity: '1' }} opacity='0' transition='all 200ms ease-in-out' position='absolute' top='10px' flexDirection='column' justifyContent='center' alignItems='center' h='200px' w='100%' p={2} bg='rgba(0, 0, 0, .6)'>
                                <Flex mb={3} alignItems='center'>
                                    <Text fontSize='xl' textTransform='uppercase' fontWeight='600' mr={4}>Criptobeer</Text>
                                    <FiExternalLink />
                                </Flex>
                                <Text fontSize='md' fontWeight='600'>
                                    HTML / TailwindCSS / JS
                                </Text>
                            </Flex>
                        </Box>
                        <Box position='relative' w='100%' h='30%' mb={5} borderRadius='sm' boxShadow='lg' overflow='hidden' transition='all 200ms ease-in-out' cursor='pointer' _hover={{ transform: 'scale(1.1)' }} role='group'>
                            <Link href='https://panel.performa.ai' target='_blank'>
                                <Image fit='contain' w='100%' h='220px' src='projects/performa.png' alt='project_performa' />
                            </Link>
                            <Flex _groupHover={{ opacity: '1' }} opacity='0' transition='all 200ms ease-in-out' position='absolute' top='10px' flexDirection='column' justifyContent='center' alignItems='center' h='200px' w='100%' p={2} bg='rgba(0, 0, 0, .6)'>
                                <Flex mb={3} alignItems='center'>
                                    <Text fontSize='xl' textTransform='uppercase' fontWeight='600' mr={4}>Performa.AI</Text>
                                    <FiExternalLink />
                                </Flex>
                                <Text fontSize='md' fontWeight='600'>
                                    HTML / CSS / PHP
                                </Text>
                            </Flex>
                        </Box>
                        <Box position='relative' w='100%' h='30%' mb={5} borderRadius='sm' boxShadow='lg' overflow='hidden' transition='all 200ms ease-in-out' cursor='pointer' _hover={{ transform: 'scale(1.1)' }} role='group'>
                            <Link href='https://vetpalmas.com.br' target='_blank'>
                                <Image fit='contain' w='100%' h='220px' src='projects/vetpalmas.png' alt='project_vetpalmas' />
                            </Link>
                            <Flex _groupHover={{ opacity: '1' }} opacity='0' transition='all 200ms ease-in-out' position='absolute' top='10px' flexDirection='column' justifyContent='center' alignItems='center' h='200px' w='100%' p={2} bg='rgba(0, 0, 0, .6)'>
                                <Flex mb={3} alignItems='center'>
                                    <Text fontSize='xl' textTransform='uppercase' fontWeight='600' mr={4}>Vetpalmas</Text>
                                    <FiExternalLink />
                                </Flex>
                                <Text fontSize='md' fontWeight='600'>
                                    HTML / TailwindCSS
                                </Text>
                            </Flex>
                        </Box>
                    </Box>
                    <Box w='48%' h='100%'>
                        <Box position='relative' w='100%' h='30%' mb={5} borderRadius='sm' boxShadow='lg' overflow='hidden' transition='all 200ms ease-in-out' cursor='pointer' _hover={{ transform: 'scale(1.1)' }} role='group'>
                            <Link href='https://paani.com.br' target='_blank'>
                                <Image fit='contain' w='100%' h='220px' src='projects/paani.png' alt='project_paani' />
                            </Link>
                            <Flex _groupHover={{ opacity: '1' }} opacity='0' transition='all 200ms ease-in-out' position='absolute' top='10px' flexDirection='column' justifyContent='center' alignItems='center' h='200px' w='100%' p={2} bg='rgba(0, 0, 0, .6)'>
                                <Flex mb={3} alignItems='center'>
                                    <Text fontSize='xl' textTransform='uppercase' fontWeight='600' mr={4}>Paani</Text>
                                    <FiExternalLink />
                                </Flex>
                                <Text fontSize='md' fontWeight='600'>
                                    HTML / CSS / PHP
                                </Text>
                            </Flex>
                        </Box>
                        <Box position='relative' w='100%' h='30%' mb={5} borderRadius='sm' boxShadow='lg' overflow='hidden' transition='all 200ms ease-in-out' cursor='pointer' _hover={{ transform: 'scale(1.1)' }} role='group'>
                            <Link href='https://paani.com.br' target='_blank'>
                                <Image fit='contain' w='100%' h='220px' src='projects/criptobeer.png' alt='project_paani' />
                            </Link>
                            <Flex _groupHover={{ opacity: '1' }} opacity='0' transition='all 200ms ease-in-out' position='absolute' top='10px' flexDirection='column' justifyContent='center' alignItems='center' h='200px' w='100%' p={2} bg='rgba(0, 0, 0, .6)'>
                                <Flex mb={3} alignItems='center'>
                                    <Text fontSize='xl' textTransform='uppercase' fontWeight='600' mr={4}>Criptobeer</Text>
                                    <FiExternalLink />
                                </Flex>
                                <Text fontSize='md' fontWeight='600'>
                                    HTML / CSS / PHP
                                </Text>
                            </Flex>
                        </Box>
                        <Box position='relative' w='100%' h='30%' mb={5} borderRadius='sm' boxShadow='lg' overflow='hidden' transition='all 200ms ease-in-out' cursor='pointer' _hover={{ transform: 'scale(1.1)' }} role='group'>
                            <Link href='https://paani.com.br' target='_blank'>
                                <Image fit='contain' w='100%' h='220px' src='projects/paani.png' alt='project_paani' />
                            </Link>
                            <Flex _groupHover={{ opacity: '1' }} opacity='0' transition='all 200ms ease-in-out' position='absolute' top='10px' flexDirection='column' justifyContent='center' alignItems='center' h='200px' w='100%' p={2} bg='rgba(0, 0, 0, .6)'>
                                <Flex mb={3} alignItems='center'>
                                    <Text fontSize='xl' textTransform='uppercase' fontWeight='600' mr={4}>Paani</Text>
                                    <FiExternalLink />
                                </Flex>
                                <Text fontSize='md' fontWeight='600'>
                                    HTML / CSS / PHP
                                </Text>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Projects;