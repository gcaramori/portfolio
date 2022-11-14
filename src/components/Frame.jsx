import React, { useState, useEffect, useRef } from "react";
import { Flex, Box, useColorModeValue } from '@chakra-ui/react';
import { useScroll, motion } from "framer-motion";
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

    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setSidebarOpen(false);
        } else {
            setSidebarOpen(true);
        }
    }

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        scrollY.onChange((latest) => {
            setScroll(latest);
        });
    }, [scrollY]);
    
    const bg = useColorModeValue('gray.50', '#1f1e1e');
    const toggleSidebarBg = useColorModeValue('purple.600', 'gray.50');
    const toggleSidebarColor = useColorModeValue('gray.50', '#1f1e1e');

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <Flex h='100%' w='100%' bg={bg} position='relative'>
            <Sidebar h='100%' scrollValue={scroll} isSidebarOpen={sidebarOpen} />
            <Box bg={bg} ref={containerRef} h='100%' w='100%' overflowY='scroll' overflowX='hidden' position='relative'>
                    <Box position='fixed' top={6} left={3} id="toggleSidebar" display={(window.innerWidth <= 768) ? 'block' : 'none'} onClick={toggleSidebar} bg={toggleSidebarBg} color={toggleSidebarColor} borderRadius='20px' p={2} zIndex='9999'>
                        <motion.div
                            initial={{ opacity: 0, y: -45 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                           <FaBars size={'1em'} />
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