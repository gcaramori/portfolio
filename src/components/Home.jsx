import React from "react";
import { Box, Heading, Text, Button, Flex, useColorModeValue, Image } from '@chakra-ui/react';
import { motion } from "framer-motion";

const Home = () => {
    const buttonBorderColor = useColorModeValue('purple.600', '#00cec9');
    const buttonFontColor = useColorModeValue('purple.600', '#00cec9');
    const buttonBgHoverColor = useColorModeValue('purple.600', '#00cec9');

    return(
        <>
            <Flex id='home' h='100vh' flexDir={{ base: 'column', lg: 'row' }} justifyContent='flex-start' alignItems='flex-start'>
                <Flex h='100%' w={{ base: '100%' , lg: '60%', xl: '50%' }} flexDirection='column' justifyContent='center' alignItems={{ base: 'center', lg: 'flex-start' }} p={{ base: 10, '2xl': 20 }}>
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Heading as='h1' fontSize={{ base: 50, lg: 46, '2xl': 60 }} textTransform='uppercase' maxW='800px' textAlign={{ base: 'right', lg: 'left' }}>
                            Olá, <Text display={{ base: 'block', md: 'inline-block' }}>eu sou</Text> <Text fontWeight='bold'>Guilherme Caramori</Text>
                        </Heading>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -45 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Text fontSize={{ base: 20, sm: 25 }} color='gray.500' textAlign={{ base: 'right', lg: 'left' }} mt={15}>Desenvolvedor FullStack / Freelancer</Text>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}    
                        style={{ width: '100%' }}
                    >
                        <Button as='a' target='_blank' href='https://api.whatsapp.com/send?phone=5519982646119&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20seus%20servi%C3%A7os!' mt={10} p={7} w={{ base: '100%', lg: 'auto' }} boxShadow="md" bg='trasparent' color={buttonFontColor} fontSize={20} border='1px solid' borderColor={buttonBorderColor} borderRadius={0} textTransform='uppercase' _hover={{ bg: buttonBgHoverColor, color: 'white', borderColor: buttonBorderColor }}>Contate-me!</Button>
                    </motion.div>
                </Flex>
                <Flex h='100%' w={{ base: '100%' , lg: '40%', xl: '50%' }} justifyContent='center' alignItems='center' p={20} display={{ base: 'none', lg: 'flex   ' }}>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}   
                        transition={{ duration: 1 }}
                    >
                        <Box id="logo" h='100%' w='100%' maxW='400px' maxH='400px'>
                            <Image display='block' fit='cover' src="/g-logo.gif" alt="G-Logo"/>
                        </Box>
                    </motion.div>
                </Flex>
            </Flex>
        </>
    );
}

export default Home;