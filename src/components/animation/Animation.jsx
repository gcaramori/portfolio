import React from "react";
import { Flex, Text, Box } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import RetroComputer from '../../assets/models/Retro_computer';

const Animation = () => {
    return(
        <Box h="450px" w="500px" mx="auto">
            <Canvas>
                <OrbitControls enableZoom={false} />
                <RetroComputer />
            </Canvas>
        </Box>
    );
}

export default Animation;