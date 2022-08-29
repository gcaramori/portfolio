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
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <RetroComputer />
            </Canvas>
        </Box>
    );
}

export default Animation;