import { useApolloClient } from '@apollo/client';
import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC, useEffect } from 'react';
import { useLogoutMutation, useMeQuery, User } from '../generated/graphql';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setCurrentUserData } from '../store/slices/currentUser.slice';

const NavBar: FC = () => {
  const dispatch = useAppDispatch();

  const { data, loading } = useMeQuery();

  const [logout, { loading: logoutFetching }] = useLogoutMutation();

  const apolloClient = useApolloClient();

  const currentUser = useAppSelector((state) => state.currentUser.user);

  useEffect(() => {
    if (data?.me) {
      dispatch(setCurrentUserData({ user: data.me }));
    }
  }, [data?.me, dispatch]);

  let body = null;

  if (loading) {
    body = null;
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href='/auth/login'>
          <Link color={'white'} mr={4}>
            Login
          </Link>
        </NextLink>

        <NextLink href='/auth/register'>
          <Link color={'white'} mr={4}>
            Register
          </Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex>
        <Box color={'white'} mr={4}>
          <Text>{currentUser?.username}</Text>
        </Box>
        <Button
          onClick={async () => {
            await logout({});
            await apolloClient.resetStore();
            dispatch(setCurrentUserData({ user: undefined }));
          }}
          isLoading={logoutFetching}
          variant={'link'}
          color='white'
          ml={4}>
          Logout
        </Button>
      </Flex>
    );
  }

  return (
    <Flex
      bg={'teal'}
      p={4}
      justify='space-between'
      alignItems={'center'}
      position='sticky'
      top={0}
      zIndex={3}>
      <Box>
        <NextLink href='/'>
          <Heading cursor={'pointer'} color={'gray.200'}>
            Li-Reddit
          </Heading>
        </NextLink>
      </Box>
      <Box ml={'auto'}>{body}</Box>
    </Flex>
  );
};

export default NavBar;
