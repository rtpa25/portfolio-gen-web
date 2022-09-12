import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';

import { FC, LegacyRef, useRef, useState } from 'react';
import { User, useUpdateUserProfileMutation } from '../../generated/graphql';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setCurrentUserData } from '../../store/slices/currentUser.slice';
import { ModalProps } from '../../utils/ModalProps';
import { toErrorMap } from '../../utils/toErrorMap';
import InputField from '../misc/InputField';

interface EditProfileModalProps extends ModalProps {}

const EditProfileModal: FC<EditProfileModalProps> = ({ isOpen, onClose }) => {
  const currentUser = useAppSelector((state) => state.currentUser.user);
  const fileSelectorRef: LegacyRef<HTMLInputElement> = useRef(null);
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [updateProfile] = useUpdateUserProfileMutation();
  const dispatch = useAppDispatch();

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
              src={selectedAvatar && selectedAvatar}
              size={'xl'}
            />

            <Box mx={4}>
              <Heading size={'sm'} fontWeight='semibold'>
                Set Profile Picture
              </Heading>
              <Button
                mt={4}
                colorScheme='teal'
                variant={'outline'}
                onClick={() => {
                  fileSelectorRef.current!.click();
                }}>
                Change Avatar
              </Button>
              <Input
                ref={fileSelectorRef}
                type={'file'}
                variant='flushed'
                display={'none'}
                value={selectedAvatar}
                onChange={(e) => {
                  setSelectedAvatar(e.target.value);
                }}
              />
            </Box>
          </Flex>
          <Formik
            initialValues={{ username: '', status: '', oneLiner: '' }}
            onSubmit={async (values, { setErrors }) => {
              const { data } = await updateProfile({
                variables: {
                  input: values,
                },
              });
              if (data?.updateUserProfile.errors) {
                setErrors(toErrorMap(data.updateUserProfile.errors));
              }
              if (data?.updateUserProfile.user)
                dispatch(
                  setCurrentUserData({
                    user: data?.updateUserProfile.user as User,
                  })
                );
              onClose();
            }}>
            {({ isSubmitting }) => (
              <Form>
                <InputField
                  name={'username'}
                  placeholder={currentUser?.username}
                  label={'Username'}
                  type={'text'}
                  isPassword={false}
                  showFormLabel={true}
                />
                <Box mt={4}>
                  <InputField
                    name={'status'}
                    placeholder={currentUser?.status ? currentUser?.status : ''}
                    label={'Status'}
                    type={'text'}
                    isPassword={false}
                    showFormLabel={true}
                  />
                </Box>
                <Box mt={4}>
                  <InputField
                    name={'oneLiner'}
                    placeholder={
                      currentUser?.oneLiner ? currentUser?.oneLiner : ''
                    }
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
                  isLoading={isSubmitting}>
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
