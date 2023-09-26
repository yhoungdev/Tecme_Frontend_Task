import { Box, Text, Badge, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import PrimaryButton from '../../atom/button/default';
import Link from 'next/link';

interface IBugBoard {
  title: string;
  date: string;
  price: string;
}

const BugBoard: FC<IBugBoard> = ({ title, price, date }) => {
  return (
    <Box
      bg={'#fff'}
      w={['100%', '100%', '500px']}
      padding={'15px 20px'}
      borderRadius={'8px'}
    >
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Text fontSize={['13px', '16px']} py={'1em'} fontWeight={'500'}>
          {title}
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
          {price}
        </Badge>
      </Flex>

      <Flex
        justifyContent={'space-between'}
        my={'1em'}
        flexDir={['column', 'row', 'row']}
      >
        <Text color={'#818181'}>Payment Verified</Text>
        <Text color={'#F50449'} fontWeight={700}>
          Due by: {date}
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

      <Link href={'/09128###'}>
        <PrimaryButton
          color={'#f50449'}
          border={'1px solid #E71D36'}
          bg={'none'}
        >
          See Details
        </PrimaryButton>
      </Link>
    </Box>
  );
};

export default BugBoard;
