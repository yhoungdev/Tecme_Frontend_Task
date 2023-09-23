import {
  Box,
  Text,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import PrimaryButton from '../_components/atom/button/default';

interface IPreview {
  header: string;
  children: ReactNode;
}

const ContentPreview: FC<IPreview> = ({ header, children }) => {
  return (
    <Box>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Text fontWeight={'black'} fontSize={'20px'}>
          {header}
        </Text>

        <PrimaryButton bg={'#E71D36'} color={'#fff'}>
          Accept
        </PrimaryButton>
      </Flex>

      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>
            <Text fontWeight={'bold'}>
              Sample bug fix for product listing API
            </Text>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Box my={'2em'} w={['100%', '80%']}>
        {children}
      </Box>
    </Box>
  );
};

export default ContentPreview;
