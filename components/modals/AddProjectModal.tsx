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
import { Project, useCreateProjectMutation } from '../../generated/graphql';
import { useAppDispatch } from '../../hooks/redux';
import { addProjectToUser } from '../../store/slices/currentUser.slice';
import { ModalProps } from '../../utils/ModalProps';
import { commaSeparatedToArray } from '../../utils/commaSeparetedToArray';
import { toErrorMap } from '../../utils/toErrorMap';
import InputField from '../misc/InputField';

interface AddProjectModalProps extends ModalProps {}

const AddProjectModal: FC<AddProjectModalProps> = ({ isOpen, onClose }) => {
    const dispatch = useAppDispatch();
    const [createProject] = useCreateProjectMutation();

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={'2xl'} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Project</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Formik
                        initialValues={{
                            title: '',
                            description: '',
                            github: '',
                            demo: '',
                            tech: '',
                            imageUrl: '',
                        }}
                        onSubmit={async (values, { setErrors }) => {
                            try {
                                const { data } = await createProject({
                                    variables: {
                                        input: {
                                            ...values,
                                            tech: commaSeparatedToArray(
                                                values.tech
                                            ),
                                        },
                                    },
                                });
                                if (data?.createProject.errors) {
                                    setErrors(
                                        toErrorMap(data.createProject.errors)
                                    );
                                }
                                dispatch(
                                    addProjectToUser(
                                        data?.createProject.project as Project
                                    )
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
                                        placeholder={
                                            'share with us an imageUrl to your project'
                                        }
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
                                    Add Project
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default AddProjectModal;
