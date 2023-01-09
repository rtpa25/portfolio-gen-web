import { Box, Flex, Heading, Spinner, Text } from '@chakra-ui/react';
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

    const { data, loading, error } = useProfileQuery({
        variables: { id: userId as string },
        skip: !userId,
    });

    if (error && !loading && !data) {
        return (
            <Wrapper variant='regular'>
                <Box>user not found</Box>
            </Wrapper>
        );
    }

    if (data && !loading) {
        return (
            <Wrapper variant='regular'>
                <Box w={'full'}>
                    <UserProfileTopSection userProfileData={data} />
                    <DataSection userProfileData={data} heading='About' />
                    <DataSection userProfileData={data} heading='Experience' />
                    <DataSection userProfileData={data} heading='TechStack' />
                    <DataSection userProfileData={data} heading='Projects' />
                </Box>
            </Wrapper>
        );
    } else {
        return (
            <Wrapper variant='regular'>
                <Flex justifyContent={'center'} alignItems='center' h={'100vh'}>
                    <Spinner size='xl' />
                </Flex>
            </Wrapper>
        );
    }
};

export default UserProfilePage;
