import React from 'react';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Heading, Flex, Box, Text, Link, Button } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { AiFillGithub } from 'react-icons/ai';

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const headerBg = useColorModeValue('gray.50', 'gray.800');
    const fontColor = useColorModeValue('gray.800', 'white');

    return (
        <header>
            <Flex justifyContent={'center'} alignItems={'center'} position='relative' px={20} py={2} bg={headerBg} boxShadow="md">
                <Flex justifyContent={'space-between'} alignItems={'center'} mr={['100px', '200px', '300px']}>
                    <Heading element={'h1'} href="#" display={'inline-block'} color={fontColor} fontSize={16} fontWeight={600} mr={14}>
                        Guilherme Caramori
                    </Heading>
                    <Link href="#" display={'inline-block'} color={fontColor} fontSize={14} fontWeight={500} mr={5} isExternal>
                        Projetos
                    </Link>
                    <Link href="https://github.com/gcaramori" display={'flex'} justifyContent={'center'} alignItems={'center'} color={fontColor} fontSize={14} fontWeight={500} isExternal>
                        <AiFillGithub />
                        <Text ml={2}>Código-fonte</Text>
                    </Link>
                </Flex>
                <Box>
                    <Button w='28px' h='35px' colorScheme={ colorMode === 'dark' ? 'yellow' : 'purple' } variant='solid' onClick={() => toggleColorMode()}>
                        { colorMode === 'dark' ? <SunIcon /> : <MoonIcon /> }
                    </Button>
                </Box>
            </Flex>
        </header>
    )
}

export default Header