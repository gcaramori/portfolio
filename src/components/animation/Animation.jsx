import React from "react";
import { Flex, Text, Box } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import RetroComputer from '../../assets/models/Retro_computer';

const Animation = () => {
    return(
        <Box h="450px" w="450px" mx="auto">
            <Canvas frameloop="demand" camera={{ fov: 70, near: 1, far: 500, position: [-3, 1, 5]}}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-5, 3, 4]} intensity={1} />
                <RetroComputer />
            </Canvas>
        </Box>
    );
}

export default Animation;