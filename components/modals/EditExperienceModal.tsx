import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  FormLabel,
  Input,
  Checkbox,
  Button,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { FC, useState } from 'react';
import {
  useCreateExperienceMutation,
  CreateExperienceInput,
  Experience,
  useUpdateExperienceMutation,
} from '../../generated/graphql';
import { useAppDispatch } from '../../hooks/redux';
import {
  addExperienceToUser,
  updateExperienceOfUser,
} from '../../store/slices/currentUser.slice';
import { emitCurrentDate } from '../../utils/emitCurrentDate';
import { ModalProps } from '../../utils/ModalProps';
import { toErrorMap } from '../../utils/toErrorMap';
import { InputField } from '../zExporter';

interface EditExperienceModalProps extends ModalProps {
  experience: Experience;
}

const EditExperienceModal: FC<EditExperienceModalProps> = ({
  isOpen,
  onClose,
  experience,
}) => {
  const [startDate, setStartDate] = useState(experience.from);
  const [endDate, setEndDate] = useState(experience.to);
  const [current, setCurrent] = useState(false);

  // const [createExperience] = useCreateExperienceMutation();
  const dispatch = useAppDispatch();

  const [updateExperience] = useUpdateExperienceMutation();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Experience</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={{ description: '' }}
            onSubmit={async (values, { setErrors }) => {
              try {
                const { data } = await updateExperience({
                  variables: {
                    input: {
                      _id: experience._id,
                      description: values.description,
                      from: startDate,
                      to: current ? emitCurrentDate() : endDate,
                      current,
                    },
                  },
                });
                if (data?.updateExperience.errors) {
                  setErrors(toErrorMap(data.updateExperience.errors));
                }

                dispatch(
                  updateExperienceOfUser({
                    _id: experience._id,
                    description: data?.updateExperience.experience?.description,
                    from: data?.updateExperience.experience?.from,
                    to: data?.updateExperience.experience?.to,
                    current: data?.updateExperience.experience?.current,
                  })
                );
                onClose();
              } catch (error) {
                console.error(error);
                setErrors({ description: 'Something went wrong' });
              }
            }}>
            {({ isSubmitting }) => (
              <Form>
                <Box mb={2}>
                  <InputField
                    name={'title'}
                    placeholder={experience.title}
                    label={'Title'}
                    type={'text'}
                    isPassword={false}
                    disabled={true}
                    showFormLabel={true}
                  />
                </Box>

                <Box my={2}>
                  <InputField
                    name={'company'}
                    placeholder={experience.company}
                    label={'Company'}
                    type={'text'}
                    isPassword={false}
                    disabled={true}
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
                    placeholder={'Description...'}
                    defaultValue={experience.description}
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
                    isLoading={isSubmitting}
                    onClick={onClose}>
                    Update Experience
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

export default EditExperienceModal;
