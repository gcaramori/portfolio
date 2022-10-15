import { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import { Canvas } from './Model';

export function Animation() {
    return(
        <Suspense fallback={<Spinner />}>
            <Canvas />
        </Suspense>
    );
}