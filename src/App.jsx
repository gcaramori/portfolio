import React from 'react';
import { Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Frame from './components/Frame';

const App = () => {
  return (
    <Flex h='100%' alignItems={'center'}>
      <Sidebar />
      <Frame />
    </Flex>
  )
}

export default App;