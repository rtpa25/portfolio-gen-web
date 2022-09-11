import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { FC, useState } from 'react';
import { ModalProps } from '../../utils/ModalProps';
import InputField from '../misc/InputField';

interface AddExperienceModalProps extends ModalProps {}

const AddExperienceModal: FC<AddExperienceModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [current, setCurrent] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Experience</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={{ title: '', company: '', description: '' }}
            onSubmit={async (values, { setErrors }) => {
              console.log({ ...values, startDate, endDate, current });
            }}>
            {({ isSubmitting }) => (
              <Form>
                <Box mb={2}>
                  <InputField
                    name={'title'}
                    placeholder={'software engineering intern'}
                    label={'Title'}
                    type={'text'}
                    isPassword={false}
                    showFormLabel={true}
                  />
                </Box>

                <Box my={2}>
                  <InputField
                    name={'company'}
                    placeholder={'SuperTokens'}
                    label={'Company'}
                    type={'text'}
                    isPassword={false}
                    showFormLabel={true}
                  />
                </Box>

                <Flex justifyContent={'space-between'}>
                  <Box my={2} w={'50%'} mr={2}>
                    <FormLabel>Start</FormLabel>
                    <Input
                      type={'date'}
                      placeholder='Select Start Date'
                      size='md'
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </Box>
                  <Box my={2} w={'50%'} ml={2}>
                    <FormLabel>End</FormLabel>
                    <Input
                      type={'date'}
                      placeholder='Select End Date'
                      size='md'
                      value={endDate}
                      disabled={current}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </Box>
                </Flex>

                <Flex my={2} alignItems='baseline'>
                  <Checkbox
                    checked={current}
                    onChange={(e) => setCurrent(e.target.checked)}
                    mr={2}
                    defaultChecked={false}
                    colorScheme='teal'></Checkbox>
                  <FormLabel ml={2}>Current</FormLabel>
                </Flex>

                <Box my={2}>
                  <InputField
                    name={'description'}
                    placeholder={'description...'}
                    label={'Description'}
                    type={'text'}
                    isPassword={false}
                    textArea={true}
                    showFormLabel={true}
                  />
                </Box>

                <Box my={4}>
                  <Button
                    w='full'
                    colorScheme='teal'
                    type='submit'
                    onClick={onClose}>
                    Add Experience
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddExperienceModal;
