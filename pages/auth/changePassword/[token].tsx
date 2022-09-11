import { useApolloClient } from '@apollo/client';
import { Box, Button, Flex, Link } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { InputField, Wrapper } from '../../../components/zExporter';
import { useChangePasswordMutation } from '../../../generated/graphql';
import { useAppDispatch } from '../../../hooks/redux';
import { setCurrentUserData } from '../../../store/slices/currentUser.slice';
import { toErrorMap } from '../../../utils/toErrorMap';

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const [tokenError, setTokenError] = useState('');
  const router = useRouter();
  const dispatch = useAppDispatch();

  const apolloClient = useApolloClient();

  return (
    <Wrapper>
      <Box shadow={'md'} h='100%' w='100%' rounded={'md'} p='2rem'>
        <Formik
          initialValues={{ newPassword: '' }}
          onSubmit={async (values, { setErrors }) => {
            const res = await changePassword({
              variables: {
                newPassword: values.newPassword,
                token:
                  typeof router.query.token === 'string'
                    ? router.query.token
                    : '',
              },
            });
            if (res.data?.changePassword.errors) {
              const errorMap = toErrorMap(res.data.changePassword.errors);
              if ('token' in errorMap) {
                setTokenError(errorMap.token);
              }
              setErrors(errorMap);
            } else if (res.data?.changePassword.user) {
              await apolloClient.resetStore();
              dispatch(
                setCurrentUserData({ user: res.data.changePassword.user })
              );
              router.push('/');
            }
          }}>
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name={'newPassword'}
                placeholder={'new password'}
                label={'New Password'}
                type={'password'}
                isPassword={true}
                showFormLabel={true}
              />
              {tokenError && (
                <Flex>
                  <Box color={'red'} mr={4}>
                    {tokenError}
                  </Box>
                  <NextLink href={'/forgot-password'}>
                    <Link color={'gray.500'}>Click to get a new one</Link>
                  </NextLink>
                </Flex>
              )}
              <Button
                mt={4}
                type='submit'
                isLoading={isSubmitting}
                color='white'
                bgColor={'teal'}
                _hover={{ backgroundColor: 'black', color: 'cyan' }}>
                Change Password
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Wrapper>
  );
};

export default ChangePassword;
