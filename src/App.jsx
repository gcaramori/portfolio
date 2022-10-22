import React from 'react';
import { Box } from '@chakra-ui/react';
import Frame from './components/Frame';

const App = () => {
  return (
    <Box h='100%' w='100%' overflowX='hidden'>
      <Frame />
    </Box>
  )
}

export default App;