import React from "react";
import { Box, Heading, Text, Button, Flex, useColorModeValue, Image } from '@chakra-ui/react';
import { motion } from "framer-motion";

const Home = () => {
    const buttonBorderColor = useColorModeValue('purple.600', '#00cec9');
    const buttonFontColor = useColorModeValue('purple.600', '#00cec9');
    const buttonBgHoverColor = useColorModeValue('purple.600', '#00cec9');

    return(
        <>
            <Flex id='home' h='100vh' justifyContent='flex-start' alignItems='flex-start'>
                <Flex h='100%' w='50%' flexDirection='column' justifyContent='center' alignItems='flex-start' p={20}>
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Heading as='h1' fontSize={60} textTransform='uppercase' maxW='800px'>
                            Olá, eu sou <Text fontWeight='bold'>Guilherme Caramori</Text>
                        </Heading>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -45 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Text fontSize={25} color='gray.500' mt={15}>Desenvolvedor FullStack / Freelancer</Text>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Button as='a' target='_blank' href='https://api.whatsapp.com/send?phone=55199826461199&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20seus%20servi%C3%A7os!' mt={10} p={7} boxShadow="md" bg='trasparent' color={buttonFontColor} fontSize={20} border='1px solid' borderColor={buttonBorderColor} borderRadius={0} textTransform='uppercase' _hover={{ bg: buttonBgHoverColor, color: 'white', borderColor: buttonBorderColor }}>Contate-me!</Button>
                    </motion.div>
                </Flex>
                <Flex h='100%' w='50%' justifyContent='center' alignItems='center' p={20}>
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