// app/providers.jsx
'use client'
import { ChakraProvider } from '@chakra-ui/react';

function Providers({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}

export { Providers };

