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
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { FaBars } from 'react-icons/fa';

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
          <Avatar name={'avatar'} />
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
