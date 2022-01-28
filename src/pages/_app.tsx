import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  
    )
}

export default MyApp


//yarn add typescript @types/react @types/node -D
//yarn add chakra-ui/react @chakra-ui/core @emotion/react @emotion/styled framer-motion
//yarn add react-icons