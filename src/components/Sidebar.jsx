import React, { useState } from 'react';
import { Flex, Box, Link, Button, Tooltip, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { AiFillGithub, AiOutlineProject, AiOutlineHome, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';

const Sidebar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const sidebarBg = useColorModeValue('gray.50', 'gray.800');
    const activeRouteColors = useColorModeValue('purple.600', 'white');
    const [activeRoute, setActiveRoute] = useState('home');

    return (
        <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} position='relative' h='100%' w={20} bg={sidebarBg} boxShadow="md">
            <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Tooltip placement="right" hasArrow label="Início">
                    <Link color={ activeRoute === 'home' ? activeRouteColors : 'gray.600' } href="#" mb={8} onClick={() => setActiveRoute('home')} _hover={{ color: activeRouteColors }}>
                        <AiOutlineHome size={'2em'} />
                    </Link>
                </Tooltip>
                <Tooltip placement="right" hasArrow label="Sobre mim">
                    <Link color={ activeRoute === 'about_me' ? activeRouteColors : 'gray.600' } href="#" mb={8} onClick={() => setActiveRoute('about_me')} _hover={{ color: activeRouteColors }}>
                        <BsPersonCircle size={'2em'} />
                    </Link>
                </Tooltip>
                <Tooltip placement="right" hasArrow label="Projetos">
                    <Link color={ activeRoute === 'projects' ? activeRouteColors : 'gray.600' } href="#" mb={8} onClick={() => setActiveRoute('projects')} _hover={{ color: activeRouteColors }}>
                        <AiOutlineProject size={'2em'} />
                    </Link>
                </Tooltip>
                <Tooltip placement="right" hasArrow label="Código-fonte">
                    <Link color={ activeRoute === 'source' ? activeRouteColors : 'gray.600' } href="https://github.com/gcaramori" mb='100px' isExternal _hover={{ color: activeRouteColors }}>
                        <AiFillGithub size={'2em'} />
                    </Link>
                </Tooltip>
            </Flex>
            <Box>
                <Tooltip placement="right" hasArrow label={ colorMode === 'dark' ? 'Modo light' : 'Modo dark' }>
                    <Button w='28px' h='35px' colorScheme={ colorMode === 'dark' ? 'yellow' : 'purple' } variant='solid' onClick={() => toggleColorMode()}>
                        { colorMode === 'dark' ? <SunIcon /> : <MoonIcon /> }
                    </Button>
                </Tooltip>
            </Box>
            <Flex mt='100px' flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
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
    );
}

export default Sidebar;