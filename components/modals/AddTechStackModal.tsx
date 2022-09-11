import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { FC } from 'react';
import { ModalProps } from '../../utils/ModalProps';
import { proficiencyList } from '../../utils/ProficiencyList';
import InputField from '../misc/InputField';

interface AddTechStackModalProps extends ModalProps {}

const AddTechStackModal: FC<AddTechStackModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Tech</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={{ tech: '' }}
            onSubmit={async (values, { setErrors }) => {
              console.log(values);
            }}>
            {({ isSubmitting }) => (
              <Form>
                <Flex>
                  <Select placeholder={'Type'} w={'25%'} mr={2}>
                    {proficiencyList.map((proficiency) => {
                      return (
                        <option key={proficiency.id} value={proficiency.name}>
                          {proficiency.name}
                        </option>
                      );
                    })}
                  </Select>

                  <Box w={'60%'}>
                    <InputField
                      name={'tech'}
                      placeholder={'Tech'}
                      label={''}
                      type={'text'}
                      isPassword={false}
                      showFormLabel={false}
                    />
                  </Box>

                  <Button
                    ml={2}
                    w='15%'
                    variant={'outline'}
                    type='submit'
                    colorScheme='teal'
                    isLoading={isSubmitting}>
                    Save
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </ModalBody>
        <ModalFooter>
          <Button w='full' colorScheme='teal'>
            Add Tech
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddTechStackModal;
