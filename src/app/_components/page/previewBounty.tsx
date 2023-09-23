import ContentPreview from '@/app/_layouts/ContentPreview';
import { Box, Text, Flex, Badge } from '@chakra-ui/react';
import React from 'react';

const PreviewButton = () => {
  return (
    <ContentPreview header='View Bounty'>
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Text fontSize={['13px', '16px']} py={'1em'} fontWeight={'500'}>
          Sample bug fix for products listing Api
        </Text>

        <Badge
          h={'fit-content'}
          w={'fit-content'}
          px={'1em'}
          py={'.4em'}
          borderRadius={'10px'}
          bg={'rgba(6, 153, 85, 0.12)'}
          color={'#069955'}
        >
          $120
        </Badge>
      </Flex>

      <Flex justifyContent={'space-between'} my={'1em'}>
        <Text color={'#818181'}>Payment Verified</Text>
        <Text color={'#F50449'} fontWeight={700}>
          Due by: 7 Oct, 2023
        </Text>
      </Flex>

      <Box my={'1em'}>
        <Badge
          h={'fit-content'}
          w={'fit-content'}
          px={'1em'}
          py={'.4em'}
          borderRadius={'10px'}
          bg={'rgba(88, 91, 91, 0.10)'}
        >
          Django
        </Badge>
      </Box>
    </ContentPreview>
  );
};

export default PreviewButton;
