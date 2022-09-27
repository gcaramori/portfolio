import React from 'react';
import { Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

const App = () => {
  return (
    <Flex h='100%' alignItems={'center'} >
      <Sidebar />
      <Home />
    </Flex>
  )
}

export default App;