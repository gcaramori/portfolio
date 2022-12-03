import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './contexts/languageContext';
import theme from './lib/theme';
import '@fontsource/m-plus-rounded-1c';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <LanguageProvider>
        <App /> 
      </LanguageProvider>
    </ChakraProvider>
  </>
);