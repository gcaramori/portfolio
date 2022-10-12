import React from 'react';
import { Flex } from '@chakra-ui/react';
import Frame from './components/Frame';

const App = () => {
  return (
    <Flex h='100%' className='mainContainer' alignItems={'center'}>
      <Frame />
    </Flex>
  )
}

export default App;