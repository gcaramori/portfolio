import React, { useState, useEffect, useRef } from "react";
import { Box, useColorModeValue } from '@chakra-ui/react';
import { useScroll } from "framer-motion";
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

    useEffect(() => {
        scrollY.onChange((latest) => {
            setScroll(latest);
        });
    }, [scrollY]);
    
    const bg = useColorModeValue('gray.50', '#2b1d1c');

    return (
        <>
            <Sidebar scrollValue={scroll} />
            <Box bg={bg} ref={containerRef} h='100%' w='100%' overflowY='scroll'>
                <Home />
                <About />
                <Projects />
                <Skills />
            </Box>
        </>
    );
}

export default Frame;