import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
  fonts: {
    heading: `'M PLUS Rounded 1c', 'sans-serif'`,
    body: `'M PLUS Rounded 1c', 'sans-serif'`,
  }
}

const theme = extendTheme(config)

export default theme