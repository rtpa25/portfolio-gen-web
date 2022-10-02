import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { FC } from 'react';
import { useUpdateUserProfileMutation } from '../../generated/graphql';
import { useAppDispatch } from '../../hooks/redux';
import { updateAbout } from '../../store/slices/currentUser.slice';
import { ModalProps } from '../../utils/ModalProps';
import { toErrorMap } from '../../utils/toErrorMap';
import InputField from '../misc/InputField';

interface AddAboutSectionModalProps extends ModalProps {}

const AddAboutSectionModal: FC<AddAboutSectionModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [updateProfile] = useUpdateUserProfileMutation();
  const dispatch = useAppDispatch();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add About</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={{ about: '' }}
            onSubmit={async (values, { setErrors }) => {
              try {
                if (values.about.length === 0) return;
                const { data } = await updateProfile({
                  variables: {
                    input: {
                      about: values.about,
                    },
                  },
                });
                if (data?.updateUserProfile.errors) {
                  setErrors(toErrorMap(data.updateUserProfile.errors));
                }
                dispatch(
                  updateAbout({
                    about: data?.updateUserProfile.user?.about as string,
                  })
                );
                onClose();
              } catch (error) {
                console.error(error);
                setErrors({ about: 'Something went wrong' });
              }
            }}>
            {({ isSubmitting }) => (
              <Form>
                <InputField
                  name={'about'}
                  placeholder={'Describe who you are...'}
                  label={'About'}
                  type={'text'}
                  isPassword={false}
                  showFormLabel={true}
                  textArea={true}
                />
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

export default AddAboutSectionModal;
