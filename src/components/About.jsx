import React from "react";
import { Heading, Text, Flex, Box } from '@chakra-ui/react';
import { motion } from "framer-motion";

const About = () => {
    return(
        <Flex id='about' h={{ base: 'auto', '2xl': '100vh'}} w='100%' flexDir={{ base: 'column', lg: 'row' }} justifyContent='flex-start' alignItems={{ base: 'flex-start', lg: 'center', '2xl': 'flex-start' }}>
            <Flex h='100%' w={{ base: '100%', lg: '50%' }} flexDir='column' justifyContent='center' alignItems='flex-start' p={{ base: 6, lg: 10, '2xl': 20 }}>
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Heading as='h1' fontSize={{ base: 50, lg: 60 }} textAlign={{ base: 'right', lg: 'left' }} textTransform='uppercase' maxW='800px'>
                        Minha história
                    </Heading>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{ width: '100%' }}   
                >
                    <Text fontSize={25} textAlign={{ base: 'right', lg: 'left' }} color='gray.500' dropShadow='(0 10px 8px rgb(0 0 0 / 0.04))(0 4px 3px rgb(0 0 0 / 0.1))' mt={{ base: 3, lg: 15}}>Este sou eu!</Text>
                </motion.div>
            </Flex>
            <Flex h='100%' w={{ base: '100%', lg: '50%' }} flexDir='column' justifyContent='flex-start' alignItems='flex-start' p={{ base: 6, lg: 10, '2xl': 20 }}>
                <motion.div
                    initial={{ opacity: 0, y: -45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Box fontSize='md' fontWeight='600' mb={14} textAlign={{ base: 'center', lg: 'unset' }}>
                        <Text mb={1}>
                            Sou apaixonado por tecnologia e computação desde que me lembro.
                        </Text>
                        <Text mb={1}>
                            Sou técnico de informática formado, e autodidata em programação. 
                        </Text>
                        <Text>
                            Trabalho na área desde 2016. Comecei fazendo freelances e só depois de 2 anos ingressei no mercado de trabalho na área de programação, atualmente sou programador FullStack.
                        </Text>
                    </Box>
                </motion.div>
                <Box w='100%' justifyContent='center' alignItems='flex-start'>
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
                                Nasci em 06 de fevereiro.
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
                                Meu primeiro contato com tecnologia.
                            </Text>
                            <Text display='block' fontSize='sm' textAlign='justify'>
                                Na situação, meu pai havia comprado um computador (Intel Celeron D).
                            </Text>
                            <Text display='block' fontSize='sm' textAlign='justify'>
                                A partir disso estava decidido a explorar tudo o que esta nova tecnologia possibilitava.
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
                                Me formo no ensino médio e no curso técnico de informática.
                            </Text>
                            <Text fontSize='sm' textAlign='justify'>    
                                A partir dai me aprofundo em estudar desenvolvimento web e a fazer freelances.
                            </Text>
                            <Text fontSize='sm' textAlign='justify'>    
                                Meu primeiro projeto foi um sistema de gerenciamento de reservas de um consultório. Feito em HTML, CSS e PHP.
                            </Text>
                        </Box>
                    </motion.div>
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
                                Ingresso no mercado de trabalho como desenvolvedor front-end.
                            </Text>
                            <Text fontSize='sm' textAlign='justify'>    
                                Aqui começa o caminho do meu aprimoramento e especialização na área.
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
                                Agora com 6 anos de experiência, uma visão mais ampla e vários desafios superados...
                            </Text>
                            <Text display='block' fontSize='sm' textAlign='justify'>
                                Continuo na procura de novos projetos e desafios!
                            </Text>
                        </Box>
                    </motion.div>
                </Box>
            </Flex>
        </Flex>
    );
}

export default About;