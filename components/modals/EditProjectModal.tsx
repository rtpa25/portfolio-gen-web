import {
  Box,
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
import { Project, useUpdateProjectMutation } from '../../generated/graphql';
import { useAppDispatch } from '../../hooks/redux';
import { updateProjectOfUser } from '../../store/slices/currentUser.slice';
import { commaSeparatedToArray } from '../../utils/commaSeparetedToArray';
import { ModalProps } from '../../utils/ModalProps';
import { toErrorMap } from '../../utils/toErrorMap';
import { InputField } from '../zExporter';

interface EditProjectModalProps extends ModalProps {
  project: Project;
}

const EditProjectModal: FC<EditProjectModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  const [updateProject] = useUpdateProjectMutation();
  const dispatch = useAppDispatch();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'2xl'} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={{
              title: project.title,
              description: project.description,
              github: project.github,
              demo: project.demo,
              tech: project.tech.join(','),
              imageUrl: project.imageUrl,
            }}
            onSubmit={async (values, { setErrors }) => {
              try {
                const { data } = await updateProject({
                  variables: {
                    input: {
                      ...values,
                      tech: commaSeparatedToArray(values.tech),
                      _id: project._id,
                    },
                  },
                });
                if (data?.updateProject.errors) {
                  setErrors(toErrorMap(data.updateProject.errors));
                }
                dispatch(
                  updateProjectOfUser(data?.updateProject.project as Project)
                );
              } catch (error) {
                console.error(error);
                setErrors({ title: 'Something went wrong' });
              }
              onClose();
            }}>
            {({ isSubmitting }) => (
              <Form>
                <Box mb={2}>
                  <InputField
                    name={'title'}
                    placeholder={'Name of the project'}
                    label={'Title'}
                    type={'text'}
                    isPassword={false}
                    showFormLabel={true}
                  />
                </Box>

                <Box my={2}>
                  <InputField
                    name={'description'}
                    placeholder={
                      'Describe your project in a couple of sentences'
                    }
                    label={'Description'}
                    type={'text'}
                    textArea={true}
                    isPassword={false}
                    showFormLabel={true}
                  />
                </Box>

                <Box my={2}>
                  <InputField
                    name={'github'}
                    placeholder={'show us the code'}
                    label={'Github'}
                    type={'text'}
                    isPassword={false}
                    showFormLabel={true}
                  />
                </Box>

                <Box my={2}>
                  <InputField
                    name={'demo'}
                    placeholder={'show us your deployment'}
                    label={'Demo'}
                    type={'text'}
                    isPassword={false}
                    showFormLabel={true}
                  />
                </Box>

                <Box my={2}>
                  <InputField
                    name={'imageUrl'}
                    placeholder={'share with us an imageUrl to your project'}
                    label={'ImageUrl'}
                    type={'text'}
                    isPassword={false}
                    showFormLabel={true}
                  />
                </Box>

                <Box my={2}>
                  <InputField
                    name={'tech'}
                    placeholder={
                      'List the tech that you used in a comma separated manner'
                    }
                    label={'Tech'}
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
                  Update Project
                </Button>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditProjectModal;
