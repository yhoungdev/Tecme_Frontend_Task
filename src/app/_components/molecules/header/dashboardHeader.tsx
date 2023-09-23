import { header_nav } from '@/app/_utils/navs';
import {
  Box,
  ListItem,
  Avatar,
  UnorderedList,
  flexbox,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const DashboardHeader = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Box>
        <UnorderedList display={'flex'} listStyleType={'none'} gap={'3em'}>
          {header_nav.map((_, index) => (
            <Link href={''} key={index}>
              <ListItem>{_.title}</ListItem>
            </Link>
          ))}
        </UnorderedList>
      </Box>

      <Box>
        <Avatar name={'avatar'} />
      </Box>
    </Box>
  );
};

export default DashboardHeader;
