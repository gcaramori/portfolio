import React, { useState, useEffect, useRef } from "react";
import { Flex, Box, useColorModeValue } from '@chakra-ui/react';
import { useScroll } from "framer-motion";
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

const Frame = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll({
        container: containerRef
    });
    const [scroll, setScroll] = useState(0);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        if(window.innerWidth <= 600) {
            setSidebarOpen(false);
        }

        scrollY.onChange((latest) => {
            setScroll(latest);
        });
    }, [scrollY]);
    
    const bg = useColorModeValue('gray.50', '#1f1e1e');

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <Flex h='100%' w='100%' bg={bg} position='relative'>
            <Sidebar h='100%' scrollValue={scroll} isSidebarOpen={sidebarOpen} />
            <Box bg={bg} ref={containerRef} h='100%' w='100%' overflowY='scroll' position='relative'>
                <Box position='absolute' top={10} left={5} id="toggleSidebar" display={(window.innerWidth <= 600) ? 'block' : 'none'} onClick={toggleSidebar}>
                    <FaBars size={'1.5em'} />
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