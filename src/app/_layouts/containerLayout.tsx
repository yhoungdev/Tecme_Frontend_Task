import { Container, Box } from '@chakra-ui/react';
import React, { ReactNode, FC } from 'react';

interface IContainer {
  children: ReactNode;
}

const ContainerLayout: FC<IContainer> = ({ children }) => {
  return (
    <Box bg={'#FAFAFA'}>
      <Container maxW={['100%', '65%']} mx={'auto'}>
        <Box py={'2em'}>{children}</Box>
      </Container>
    </Box>
  );
};

export default ContainerLayout;
