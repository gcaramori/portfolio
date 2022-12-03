import React, { useEffect, useState, useContext } from 'react';
import { Flex, Box, Link, Button, Tooltip, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { AiFillGithub, AiOutlineProject, AiOutlineHome, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { BsPersonCircle } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Languages from '../lib/languages';
import { LanguageContext } from '../contexts/languageContext';

const Sidebar = ({ scrollValue, isSidebarOpen }) => {
    const { language } = useContext(LanguageContext);
    const [isMobile, setIsMobile] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    const sidebarBg = useColorModeValue('gray.200', '#121111');
    const activeRouteColors = useColorModeValue('purple.600', 'white');
    const [activeRoute, setActiveRoute] = useState('home');
    const handleResize = () => {
        if (window.innerWidth <= 1450) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        if(isMobile) {
            if(scrollValue <= window.innerHeight * 0.8) {
                setActiveRoute('home');
            }
            else if(scrollValue >= window.innerHeight * 0.8 && scrollValue <= window.innerHeight * 1.4) {
                setActiveRoute('about');   
            }
            else if(scrollValue > window.innerHeight * 1.4 && scrollValue <= window.innerHeight * 2.8) {
                setActiveRoute('projects');   
            }
            else {
                setActiveRoute('skills');
            }
        }
        else {
            if(scrollValue <= window.innerHeight * 0.8) {
                setActiveRoute('home');
            }
            else if(scrollValue >= window.innerHeight * 0.8 && scrollValue <= window.innerHeight * 1.4) {
                setActiveRoute('about');   
            }
            else if(scrollValue > window.innerHeight * 1.4 && scrollValue <= window.innerHeight * 2.5) {
                setActiveRoute('projects');   
            }
            else {
                setActiveRoute('skills');
            }
        }
    }, [scrollValue, isMobile]);

    const clickToScroll = (e) => {
        e.preventDefault();
        
        document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: (isSidebarOpen) ? '3.5rem' : 0 }}
            transition={{ duration: 0.2, default: { ease: "linear" } }}
        >
            <Flex id="sidebar" flexDirection={'column'} justifyContent={'center'} alignItems={'center'} h='100%' bg={sidebarBg} boxShadow="md" position='relative'>
                <Flex id="sidebarMenu" flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    <Tooltip placement="right" hasArrow label={Languages[language]?.sidebar?.home}>
                        <Link color={ activeRoute === 'home' ? activeRouteColors : 'gray.600' } href="#home" mb={{ base: 5, lg: 8 }} onClick={(e) => clickToScroll(e)} _hover={{ color: activeRouteColors }}>
                            <AiOutlineHome size={'2em'} />
                        </Link>
                    </Tooltip>
                    <Tooltip placement="right" hasArrow label={Languages[language]?.sidebar?.about}>
                        <Link color={ activeRoute === 'about' ? activeRouteColors : 'gray.600' } href="#about" mb={{ base: 5, lg: 8 }} onClick={(e) => clickToScroll(e)} _hover={{ color: activeRouteColors }}>
                            <BsPersonCircle size={'2em'} />
                        </Link>
                    </Tooltip>
                    <Tooltip placement="right" hasArrow label={Languages[language]?.sidebar?.projects}>
                        <Link color={ activeRoute === 'projects' ? activeRouteColors : 'gray.600' } href="#projects" mb={{ base: 5, lg: 8 }} onClick={(e) => clickToScroll(e)} _hover={{ color: activeRouteColors }}>
                            <AiOutlineProject size={'2em'} />
                        </Link>
                    </Tooltip>
                    <Tooltip placement="right" hasArrow label={Languages[language]?.sidebar?.skills}>
                        <Link color={ activeRoute === 'skills' ? activeRouteColors : 'gray.600' } href="#skills" mb={{ base: '60px', '2xl': '100px' }} onClick={(e) => clickToScroll(e)} _hover={{ color: activeRouteColors }}>
                            <GiSkills size={'2em'} />
                        </Link>
                    </Tooltip>
                </Flex>
                <Box>
                    <Tooltip placement="right" hasArrow label={ colorMode === 'dark' ? Languages[language]?.sidebar?.toggle_theme_text_light : Languages[language]?.sidebar?.toggle_theme_text_dark }>
                        <Button w='18px' h='35px' p={0} colorScheme={ colorMode === 'dark' ? 'yellow' : 'purple' } variant='solid' onClick={() => toggleColorMode()}>
                            { colorMode === 'dark' ? <SunIcon /> : <MoonIcon /> }
                        </Button>   
                    </Tooltip>
                </Box>
                <Flex mt={{ base: '60px', '2xl': '100px' }} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    <Link color={ activeRoute === 'source' ? activeRouteColors : 'gray.600' } href="https://github.com/gcaramori" mb={5} isExternal _hover={{ color: activeRouteColors }}>
                        <AiFillGithub size={'1.5em'} />
                    </Link>
                    <Link color='gray.600' href="https://linkedin.com/in/gcaramori" mb={5} isExternal _hover={{ color: activeRouteColors }}>
                        <AiOutlineLinkedin size={'1.5em'} />
                    </Link>
                    <Link color='gray.600' href="https://www.facebook.com/guilherme.caramori" mb={5} isExternal _hover={{ color: activeRouteColors }}>
                        <AiOutlineFacebook size={'1.5em'} />
                    </Link>
                    <Link color='gray.600' href="https://www.instagram.com/gcaramori/" mb={5} isExternal _hover={{ color: activeRouteColors }}>
                        <AiOutlineInstagram size={'1.5em'} />
                    </Link>
                </Flex>
            </Flex>
        </motion.div>
    );
}

export default Sidebar;