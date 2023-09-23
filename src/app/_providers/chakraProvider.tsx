import { ChakraProvider } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { theme } from '../_configs/chakraThemeConfig';

interface IChakraProvider {
  children: ReactNode;
}

const ChakraProviderWrapper: FC<IChakraProvider> = ({
  children,
}: IChakraProvider) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default ChakraProviderWrapper;
