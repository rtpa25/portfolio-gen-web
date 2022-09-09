import { useApolloClient } from '@apollo/client';
import { Box, Button, Flex, Link, Text } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/dist/client/router';
import NextLink from 'next/link';
import { InputField, Wrapper } from '../../components/zExporter';
import { useRegisterMutation } from '../../generated/graphql';
import { useAppDispatch } from '../../hooks/redux';
import { setCurrentUserData } from '../../store/slices/currentUser.slice';
import { toErrorMap } from '../../utils/toErrorMap';

const Register = () => {
  const [register] = useRegisterMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const apolloClient = useApolloClient();

  return (
    <Wrapper variant='regular'>
      <Box shadow={'md'} h='100%' w='100%' rounded={'md'} p='2rem'>
        <Formik
          initialValues={{ username: '', password: '', email: '' }}
          onSubmit={async (values, { setErrors }) => {
            const res = await register({
              variables: {
                input: {
                  email: values.email.trim(),
                  password: values.password,
                  username: values.username.trim(),
                },
              },
            });
            if (res.data?.signUp.errors) {
              setErrors(toErrorMap(res.data.signUp.errors));
            } else if (res.data?.signUp.user) {
              await apolloClient.resetStore();
              dispatch(setCurrentUserData({ user: res.data.signUp.user }));
              router.push('/');
            }
          }}>
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name={'username'}
                placeholder={'username'}
                label={'Username'}
                isPassword={false}
              />
              <Box mt={4}>
                <InputField
                  name={'email'}
                  placeholder={'email'}
                  label={'Email'}
                  type={'email'}
                  isPassword={false}
                />
              </Box>
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
                  Register
                </Button>
                <Text color={'gray.600'}>
                  Have an account?{' '}
                  <NextLink href={'/auth/login'}>
                    <Link color={'teal'}>Login</Link>
                  </NextLink>
                </Text>
              </Flex>
            </Form>
          )}
        </Formik>
      </Box>
    </Wrapper>
  );
};

export default Register;
