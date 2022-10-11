import React, { useState, useEffect, useRef } from "react";
import { Box, useColorModeValue } from '@chakra-ui/react';
import { useScroll } from "framer-motion";
import Home from "./Home";
import About from "./About";

const Frame = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll({
        container: containerRef
    });
    const [activeFrame, setActiveFrame] = useState('home');

    useEffect(() => {
        return scrollY.onChange((latest) => {
            if(latest > 700) setActiveFrame('about');
            else setActiveFrame('home');
        });
    });
    
    const bg = useColorModeValue('gray.50', '#2b1d1c');

    return (
        <Box bg={bg} ref={containerRef} h='100%' w='100%' overflowY='scroll'>
            <Home scroll={scrollY} isActiveFrame={ activeFrame === 'home' ? true : false } />
            <About scroll={scrollY} isActiveFrame={ activeFrame === 'about' ? true : false } />
        </Box>
    );
}

export default Frame;