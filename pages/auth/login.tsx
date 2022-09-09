import { useApolloClient } from '@apollo/client';
import { Box, Button, Flex, Link, Text } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import InputField from '../../components/InputField';
import Wrapper from '../../components/Wrapper';
import { useLoginMutation } from '../../generated/graphql';
import { useAppDispatch } from '../../hooks/redux';
import { setCurrentUserData } from '../../store/slices/currentUser.slice';
import { toErrorMap } from '../../utils/toErrorMap';

const Login = () => {
  const [login] = useLoginMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const apolloClient = useApolloClient();

  return (
    <Wrapper variant='regular'>
      <Box shadow={'md'} h='100%' w='100%' rounded={'md'} p='2rem'>
        <Formik
          initialValues={{ username: '', password: '', email: '' }}
          onSubmit={async (values, { setErrors }) => {
            const res = await login({
              variables: {
                input: {
                  email: values.email.trim(),
                  password: values.password,
                },
              },
            });
            if (res.data?.signIn.errors) {
              setErrors(toErrorMap(res.data?.signIn.errors));
            } else if (res.data?.signIn.user) {
              await apolloClient.resetStore();
              dispatch(setCurrentUserData({ user: res.data.signIn.user }));
              router.push('/');
            }
          }}>
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name={'email'}
                placeholder={'email'}
                label={'Email'}
                type={'email'}
                isPassword={false}
              />
              <Box mt={4}>
                <InputField
                  name={'password'}
                  placeholder={'password'}
                  label={'Password'}
                  type={'password'}
                  isPassword={true}
                />
              </Box>
              <Flex justifyContent={'space-between'} alignItems='baseline'>
                <Button
                  mt={4}
                  type='submit'
                  isLoading={isSubmitting}
                  color='white'
                  bgColor={'teal'}
                  _hover={{ backgroundColor: 'black', color: 'cyan' }}>
                  Login
                </Button>
                <Text color={'gray.600'}>
                  No account?{' '}
                  <NextLink href={'/auth/register'}>
                    <Link color={'teal'}>Register</Link>
                  </NextLink>
                </Text>
              </Flex>
              <Box mt={2}>
                <NextLink href={'/auth/forgotPassword'}>
                  <Link color={'gray.500'}>Forgot Password?</Link>
                </NextLink>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Wrapper>
  );
};

export default Login;
