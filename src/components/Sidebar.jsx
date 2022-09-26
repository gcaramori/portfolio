import React from 'react';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Flex, Box, Text, Link, Button } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { AiFillGithub, AiOutlineProject, AiOutlineHome } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';

const Sidebar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const sidebarBg = useColorModeValue('gray.50', 'gray.800');

    return (
        <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} position='relative' h='100%' w={20} bg={sidebarBg} boxShadow="md">
            <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Link href="#" mb={8}>
                    <AiOutlineHome size={'2em'} />
                </Link>
                <Link href="#" mb={8}>
                    <BsPersonCircle size={'2em'} />
                </Link>
                <Link href="#" mb={8}>
                    <AiOutlineProject size={'2em'} />
                </Link>
                <Link href="https://github.com/gcaramori" mb='100px' isExternal>
                    <AiFillGithub size={'2em'} />
                </Link>
            </Flex>
            <Box>
                <Button w='28px' h='35px' colorScheme={ colorMode === 'dark' ? 'yellow' : 'purple' } variant='solid' onClick={() => toggleColorMode()}>
                    { colorMode === 'dark' ? <SunIcon /> : <MoonIcon /> }
                </Button>
            </Box>
        </Flex>
    )
}

export default Sidebar;