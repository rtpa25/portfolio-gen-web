import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';

import { FC } from 'react';
import { useAppSelector } from '../../hooks/redux';
import InputField from '../misc/InputField';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditProfileModal: FC<EditProfileModalProps> = ({ isOpen, onClose }) => {
  const currentUser = useAppSelector((state) => state.currentUser.user);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex>
            <Avatar
              name={currentUser?.username}
              mr={4}
              mb={4}
              cursor={'pointer'}
              size={'xl'}
            />

            <Box>
              <Heading size={'sm'} fontWeight='semibold'>
                Set Profile Picture
              </Heading>
              <Text my={1} fontSize={'sm'} color='gray.600'>
                You can change your profile picture or upload a photo
              </Text>
            </Box>
          </Flex>
          <Formik
            initialValues={{ username: '', status: '', oneLiner: '' }}
            onSubmit={async (values, { setErrors }) => {
              console.log(values);
            }}>
            {({ isSubmitting }) => (
              <Form>
                <InputField
                  name={'username'}
                  placeholder={'username'}
                  label={'Username'}
                  type={'text'}
                  isPassword={false}
                  showFormLabel={true}
                />
                <Box mt={4}>
                  <InputField
                    name={'status'}
                    placeholder={'status'}
                    label={'Status'}
                    type={'text'}
                    isPassword={false}
                    showFormLabel={true}
                  />
                </Box>
                <Box mt={4}>
                  <InputField
                    name={'oneLiner'}
                    placeholder={'oneLiner'}
                    label={'One-Liner'}
                    type={'text'}
                    isPassword={false}
                    showFormLabel={true}
                  />
                </Box>
                <Button
                  w='full'
                  my={4}
                  type='submit'
                  colorScheme='teal'
                  mr={3}
                  isLoading={isSubmitting}
                  onClick={onClose}>
                  Save Changes
                </Button>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditProfileModal;
