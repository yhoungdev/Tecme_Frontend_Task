import React from 'react';
import { InputGroup, Box, Input, InputRightElement } from '@chakra-ui/react';

const searchIcon = (
  <Box cursor={'pointer'}>
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='search-md'>
        <path
          id='Icon'
          d='M13.625 13.625L10.9062 10.9062M12.375 7.375C12.375 10.1364 10.1364 12.375 7.375 12.375C4.61358 12.375 2.375 10.1364 2.375 7.375C2.375 4.61358 4.61358 2.375 7.375 2.375C10.1364 2.375 12.375 4.61358 12.375 7.375Z'
          stroke='#E71D36'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
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
      <InputRightElement width='4.5rem'>{searchIcon}</InputRightElement>
    </InputGroup>
  );
};

export default SearchField;
