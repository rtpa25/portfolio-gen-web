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
import { ModalProps } from '../../utils/ModalProps';
import InputField from '../misc/InputField';

interface AddAboutSectionModalProps extends ModalProps {}

const AddAboutSectionModal: FC<AddAboutSectionModalProps> = ({
  isOpen,
  onClose,
}) => {
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
              console.log(values);
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
