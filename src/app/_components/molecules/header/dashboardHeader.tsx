import { header_nav } from '@/app/_utils/navs';
import { Box, ListItem, UnorderedList, flexbox } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const DashboardHeader = () => {
  return (
    <Box display={'flex'}>
      <Box>
        header
        <UnorderedList>
          {header_nav.map((_, index) => (
            <Link href={''} key={index}>
              <ListItem>{_.title}</ListItem>
            </Link>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default DashboardHeader;
