import React, { useState, useEffect, useRef, useContext } from "react";
import { Flex, Box, Button, Divider, useColorModeValue } from '@chakra-ui/react';
import { useScroll, motion } from "framer-motion";
import { FaBars } from 'react-icons/fa';
import { AiOutlineGlobal, AiOutlineClose } from 'react-icons/ai';
import { LanguageContext } from "../contexts/languageContext";
import Sidebar from './Sidebar';
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

const Frame = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const containerRef = useRef(null);
    const { scrollY } = useScroll({
        container: containerRef
    });
    const [scroll, setScroll] = useState(0);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setSidebarOpen(false);
        } else {
            setSidebarOpen(true);
        }
    }

    const toggleLanguage = (language) => {
        setLanguage(language);
    }

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        scrollY.onChange((latest) => {
            setScroll(latest);
        });
    }, [scrollY]);
    
    const bg = useColorModeValue('gray.50', '#1f1e1e');
    const languagesInactive = useColorModeValue('gray.400', 'gray.500');
    const languagesActive = useColorModeValue('#1f1e1e', 'gray.50');
    const toggleSidebarBg = useColorModeValue('purple.600', 'gray.50');
    const toggleSidebarColor = useColorModeValue('gray.50', '#1f1e1e');
    const dividerBg = useColorModeValue('purple.600', 'gray.50');

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <Flex h='100%' w='100%' bg={bg} position='relative'>
            <Sidebar h='100%' scrollValue={scroll} isSidebarOpen={sidebarOpen} />
            <Box bg={bg} ref={containerRef} h='100%' w='100%' overflowY='scroll' overflowX='hidden' position='relative'>
                <Flex justifyContent={'start'} alignItems={'center'} h={10} w={'auto'} position='fixed' top={2} left={{ base: 14, lg: 20}}>
                    <AiOutlineGlobal size='1.2em' />
                    <Flex justifyContent={'space-between'} alignItems={'center'} ml={1}>
                        <Button display={'inline-block'} px={3} textAlign={'left'} border={'unset'} fontSize={10} fontWeight={'bold'} bg={'transparent'} color={ language === 'pt-BR' ? languagesActive : languagesInactive } _hover={{ bg: 'transparent' }} _focus={{ bg: 'transparent' }} _active={{ bg: 'transparent' }} onClick={() => toggleLanguage('pt-BR')}>PT-BR</Button>
                        <Divider orientation='vertical' h={4} w={'1px'} bg={dividerBg} />
                        <Button display={'inline-block'} px={3} textAlign={'left'} border={'unset'} fontSize={10} fontWeight={'bold'} bg={'transparent'} color={ language === 'en' ? languagesActive : languagesInactive } _hover={{ bg: 'transparent' }} _focus={{ bg: 'transparent' }} _active={{ bg: 'transparent' }} onClick={() => toggleLanguage('en')}>EN</Button>
                    </Flex>
                </Flex>
                <Box position='fixed' top={6} right={8} id="toggleSidebar" display={(window.innerWidth <= 768) ? 'block' : 'none'} onClick={toggleSidebar} bg={toggleSidebarBg} color={toggleSidebarColor} borderRadius='20px' p={2} zIndex='9999'>
                    <motion.div
                        initial={{ opacity: 0, y: -45 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >   
                        {
                            sidebarOpen ? <AiOutlineClose size={'1em'} /> : <FaBars size={'1em'} />
                        }
                    </motion.div>
                </Box>
                <Home w='100%' />
                <About w='100%' />
                <Projects w='100%' />
                <Skills w='100%' />
            </Box>
        </Flex>
    );
}

export default Frame;