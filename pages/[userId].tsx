import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import {
  DataSection,
  UserProfileTopSection,
  Wrapper,
} from '../components/zExporter';
import { useProfileQuery } from '../generated/graphql';

const UserProfilePage: FC = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data } = useProfileQuery({
    variables: { id: userId as string },
    skip: !userId,
  });

  return (
    <Wrapper variant='regular'>
      <Box w={'full'}>
        <UserProfileTopSection userProfileData={data} />
        <DataSection userProfileData={data} heading='About' />
        <DataSection userProfileData={data} heading='Projects' />
        <DataSection userProfileData={data} heading='Experience' />
        <DataSection userProfileData={data} heading='TechStack' />
      </Box>
    </Wrapper>
  );
};

export default UserProfilePage;
