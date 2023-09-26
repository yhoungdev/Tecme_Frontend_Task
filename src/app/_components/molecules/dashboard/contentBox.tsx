import { Box, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

interface IContentProps {
  title: number;
  content: string;
}

const ContentBox: FC<IContentProps> = ({ title, content }) => {
  return (
    <Box
      bg={'#060606'}
      color={'#fff'}
      w={['100%', '203px']}
      borderRadius={'8px'}
      padding={['20px 30px']}
    >
      <Text fontSize={['18px', '20px']} bg={'black'}>
        {title}
      </Text>

      <small>{content}</small>
    </Box>
  );
};

export default ContentBox;
