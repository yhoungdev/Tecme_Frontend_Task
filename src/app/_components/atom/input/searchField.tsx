import React from 'react';
import { InputGroup, Box, Input, InputRightElement } from '@chakra-ui/react';

const searchIcon = (
  <Box cursor={'pointer'}>
    <svg
      width='30'
      height='30'
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='30' height='30' rx='15' fill='#E71D36' fill-opacity='0.1' />
      <path
        d='M20.625 20.625L17.9062 17.9062M19.375 14.375C19.375 17.1364 17.1364 19.375 14.375 19.375C11.6136 19.375 9.375 17.1364 9.375 14.375C9.375 11.6136 11.6136 9.375 14.375 9.375C17.1364 9.375 19.375 11.6136 19.375 14.375Z'
        stroke='#E71D36'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  </Box>
);

const SearchField = () => {
  return (
    <InputGroup size='md'>
      <Input
        bg={'#FAFAFA'}
        borderRadius={'15px'}
        pr='4.5rem'
        type={'search'}
        placeholder='Search'
        w={'280px'}
      />
      <InputRightElement width='3rem'>{searchIcon}</InputRightElement>
    </InputGroup>
  );
};

export default SearchField;
