import { Flex, Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useAppSelector } from '../../../hooks/redux';

const FilledProjectList = () => {
  const projectList = useAppSelector(
    (state) => state.currentUser.user?.projectList
  );
  return (
    <Flex flexDirection={'column'}>
      {projectList?.map((project) => {
        return (
          <Box key={project._id} my={4}>
            <Heading size={'lg'} fontWeight='semibold' color={'gray.700'}>
              {project.title}
            </Heading>
            <Flex>
              <Image
                borderRadius={'md'}
                objectFit='cover'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
              <Box>
                <Text>{project.description}</Text>
              </Box>
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
};

export default FilledProjectList;
