import React from "react";
import { Flex, Text, Box } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


const Animation = () => {
    return(
        <Box h="500px" w="500px" mx="auto">
            <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <mesh h={"500px"} rotation={[90, 0, 20]}>
                    <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
                    <meshLambertMaterial attach="material" color="blue" />
                </mesh>
            </Canvas>
        </Box>
    );
}

export default Animation;