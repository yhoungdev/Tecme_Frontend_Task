import { Box, Text, Badge, Flex } from '@chakra-ui/react';
import React from 'react';
import PrimaryButton from '../../atom/button/default';

const BugBoard = () => {
  return (
    <Box bg={'#fff'} w={['500px']} padding={'15px 20px'} borderRadius={'8px'}>
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

      <PrimaryButton color={'#f50449'} border={'1px solid #E71D36'} bg={'none'}>
        See Details
      </PrimaryButton>
    </Box>
  );
};

export default BugBoard;
