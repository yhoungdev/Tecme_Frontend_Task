import { Box, Text, Flex, Checkbox } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import ContentBox from '../molecules/dashboard/contentBox';
import BugBoard from '../molecules/dashboard/bugBoard';
import SearchField from '../atom/input/searchField';
import { industries } from '@/app/_utils/data/industries';

const TaskBoard = () => {
  return (
    <Box>
      <Text fontSize={['18px', '20px']} fontWeight={'bold'}>
        Product Bounty
      </Text>
      <Text>Get paid when you complete a bounty for any project</Text>
      <Flex gap={'1em'} flexWrap={'wrap'}>
        {[1, 2, 2].map((items, index) => (
          <Fragment key={index}>
            <ContentBox />
          </Fragment>
        ))}
      </Flex>

      <Flex gap={'1em'}>
        <Flex gap={'1em'} my={'1.4em'} flexWrap={'wrap'}>
          {[1, 2, 2].map((items, index) => (
            <Fragment key={index}>
              <BugBoard />
            </Fragment>
          ))}
        </Flex>

        <Box>
          <SearchField />

          <Text fontWeight={600} my={'1.5em'}>
            Filter by industry
          </Text>

          <Box>
            <Flex flexDirection={'column'} gap={'1em'}>
              {industries.map((_, index) => {
                return (
                  <Checkbox
                    name={'filter'}
                    color='#494949'
                    defaultChecked
                    key={index}
                  >
                    {_.title}
                  </Checkbox>
                );
              })}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default TaskBoard;
