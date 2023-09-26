'use client';
import { header_nav } from '@/app/_utils/navs';
import {
  Box,
  ListItem,
  Avatar,
  UnorderedList,
  Container,
  Drawer,
  DrawerBody,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { FaBars } from 'react-icons/fa';

const notificationIcon = (
  <svg
    width='40'
    height='40'
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='1' y='1' width='38' height='38' rx='19' fill='white' />
    <path
      d='M17.7954 27.5C18.383 28.0186 19.1548 28.3333 20.0002 28.3333C20.8456 28.3333 21.6175 28.0186 22.2051 27.5M11.9118 14.8499C11.8998 13.6404 12.5519 12.511 13.6053 11.9167M28.0853 14.8499C28.0973 13.6404 27.4452 12.511 26.3918 11.9167M25.0002 16.6667C25.0002 15.3406 24.4734 14.0688 23.5357 13.1311C22.5981 12.1934 21.3263 11.6667 20.0002 11.6667C18.6741 11.6667 17.4024 12.1934 16.4647 13.1311C15.527 14.0688 15.0002 15.3406 15.0002 16.6667C15.0002 19.2418 14.3506 21.005 13.6249 22.1712C13.0128 23.1549 12.7068 23.6467 12.718 23.784C12.7304 23.9359 12.7626 23.9938 12.885 24.0846C12.9956 24.1667 13.494 24.1667 14.4909 24.1667H25.5095C26.5064 24.1667 27.0048 24.1667 27.1154 24.0846C27.2378 23.9938 27.27 23.9359 27.2824 23.784C27.2937 23.6467 26.9876 23.1549 26.3755 22.1712C25.6498 21.005 25.0002 19.2418 25.0002 16.6667Z'
      stroke='#585B5B'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <rect
      x='1'
      y='1'
      width='38'
      height='38'
      rx='19'
      stroke='#D4D4D4'
      stroke-width='2'
    />
  </svg>
);

const DashboardHeader = () => {
  const path = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container maxW={['100%', '85%']}>
      <Box
        my={'1em'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box display={['block', 'block', 'none']} onClick={onOpen}>
          <FaBars />
        </Box>

        <Box mx={'auto'} display={['none', 'none', 'block']}>
          <UnorderedList display={'flex'} listStyleType={'none'} gap={'3em'}>
            {header_nav.map((_, index) => (
              <Link href={_.path} key={index}>
                <ListItem
                  display={'inline-flex'}
                  color={path === _.path ? '#E71D36' : ''}
                  gap={'.3em'}
                >
                  <Image src={_.icon} width={17} height={17} alt={'.'} />{' '}
                  {_.title}
                </ListItem>
              </Link>
            ))}
          </UnorderedList>
        </Box>

        <Box float={'right'}>
          <Flex gap={'.9em'} alignItems={'center'}>
            <Box>{notificationIcon}</Box>
            <Avatar name={'avatar'} width={'40px'} height={'40px'} />
          </Flex>
        </Box>
      </Box>

      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <UnorderedList
              display={'flex'}
              flexDir={'column'}
              listStyleType={'none'}
              gap={'3em'}
              my={'4em'}
            >
              {header_nav.map((_, index) => (
                <Link href={''} key={index}>
                  <ListItem
                    display={'inline-flex'}
                    color={path === _.path ? '#E71D36' : ''}
                    gap={'.3em'}
                  >
                    <Image src={_.icon} width={17} height={17} alt={'.'} />{' '}
                    {_.title}
                  </ListItem>
                </Link>
              ))}
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default DashboardHeader;
