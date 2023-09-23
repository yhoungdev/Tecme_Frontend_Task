import { Box, Text, Flex } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import ContentBox from '../molecules/dashboard/contentBox';
import BugBoard from '../molecules/dashboard/bugBoard';

const TaskBoard = () => {
  return (
    <Box>
      <Text fontSize={['18px', '20px']} fontWeight={'bold'}>
        Product Bounty
      </Text>
      <Text>Get paid when you complete a bounty for any project</Text>
      <Flex>
        {[1, 2, 2, 2].map((items, index) => (
          <Fragment key={index}>
            <ContentBox />
          </Fragment>
        ))}
      </Flex>
      <BugBoard />
    </Box>
  );
};

export default TaskBoard;
