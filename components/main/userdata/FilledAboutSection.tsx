import { Flex, Box, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useAppSelector } from '../../../hooks/redux';

const FilledAboutSection: FC = () => {
  const userAboutData = useAppSelector(
    (state) => state.currentUser.user?.about
  );

  return (
    <Box textAlign={'left'}>
      <Flex justifyContent={'flex-start'}>
        <Text
          my={4}
          fontSize={'md'}
          color='gray.600'
          wordBreak={'normal'}
          lineHeight={'tall'}
          flexWrap='wrap'
          textAlign='left'>
          {userAboutData}
        </Text>
      </Flex>
    </Box>
  );
};

export default FilledAboutSection;
