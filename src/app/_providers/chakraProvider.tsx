import { ChakraProvider } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface IChakraProvider {
  children: ReactNode;
}

const ChakraProviderWrapper: FC<IChakraProvider> = ({
  children,
}: IChakraProvider) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default ChakraProviderWrapper;
