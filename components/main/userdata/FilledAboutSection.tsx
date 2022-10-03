import { Flex, Box, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { ProfileQuery } from '../../../generated/graphql';
import { useAppSelector } from '../../../hooks/redux';

interface FilledAboutSectionProps {
  userProfileData?: ProfileQuery | undefined;
}

const FilledAboutSection: FC<FilledAboutSectionProps> = ({
  userProfileData,
}) => {
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
          {userProfileData ? userProfileData.userProfile?.about : userAboutData}
        </Text>
      </Flex>
    </Box>
  );
};

export default FilledAboutSection;
