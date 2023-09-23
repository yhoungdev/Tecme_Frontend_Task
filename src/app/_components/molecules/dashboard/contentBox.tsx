import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const ContentBox = () => {
  return (
    <Box
      bg={'#060606'}
      color={'#fff'}
      w={['100%', '203px']}
      borderRadius={'8px'}
      my={'2em'}
      padding={['20px 30px']}
    >
      <Text fontSize={['18px', '20px']} bg={'black'}>
        $0.00
      </Text>

      <small>Total Earnings</small>
    </Box>
  );
};

export default ContentBox;
