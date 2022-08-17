import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import "@fontsource/league-spartan";
import theme from './theme';

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App /> 
    </ChakraProvider>
  </>
)