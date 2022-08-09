import React from 'react';
import Header from './components/header/Header';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <Header />
    </ChakraProvider>
  )
}

export default App