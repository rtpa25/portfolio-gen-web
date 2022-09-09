import { Box, Button, Flex } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { InputField, Wrapper } from '../../components/zExporter';
import { useForgotPasswordMutation } from '../../generated/graphql';

const ForgotPassword = () => {
  const [complete, setComplete] = useState(false);
  const [forgotPassword] = useForgotPasswordMutation();

  return (
    <Wrapper>
      <Box shadow={'md'} h='100%' w='100%' rounded={'md'} p='2rem'>
        <Formik
          initialValues={{ email: '' }}
          onSubmit={async (values) => {
            await forgotPassword({
              variables: {
                email: values.email.trim(),
              },
            });
            setComplete(true);
          }}>
          {({ isSubmitting }) =>
            complete ? (
              <Box>
                if an account with that email exists then we sent an email to
                that account
              </Box>
            ) : (
              <Form>
                <Box mt={4}>
                  <InputField
                    name={'email'}
                    placeholder={'email'}
                    label={'Email'}
                    type={'email'}
                    isPassword={false}
                  />
                </Box>
                <Flex justifyContent={'space-between'} alignItems={'baseline'}>
                  <Button
                    mt={4}
                    type='submit'
                    isLoading={isSubmitting}
                    color='white'
                    bgColor={'teal'}
                    _hover={{ backgroundColor: 'black', color: 'cyan' }}>
                    Forgot Password
                  </Button>
                </Flex>
              </Form>
            )
          }
        </Formik>
      </Box>
    </Wrapper>
  );
};

export default ForgotPassword;
