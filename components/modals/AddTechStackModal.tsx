import {
    Box,
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Select,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { FC, useState } from 'react';
import { Tech, useAddTechMutation } from '../../generated/graphql';
import { useAppDispatch } from '../../hooks/redux';
import { addTechToList } from '../../store/slices/currentUser.slice';
import { ModalProps } from '../../utils/ModalProps';
import { Proficiency, proficiencyList } from '../../utils/ProficiencyList';
import { toErrorMap } from '../../utils/toErrorMap';
import InputField from '../misc/InputField';

interface AddTechStackModalProps extends ModalProps {}

const AddTechStackModal: FC<AddTechStackModalProps> = ({ isOpen, onClose }) => {
    const [proficiency, setProficiency] =
        useState<Proficiency['name']>('beginner');

    const [addTech] = useAddTechMutation();
    const dispatch = useAppDispatch();

    return (
        <Modal isOpen={isOpen} onClose={onClose} size='xl' isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Tech</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Formik
                        initialValues={{ name: '', imageUrl: '' }}
                        onSubmit={async (values, { setErrors }) => {
                            try {
                                if (
                                    values.name.length === 0 ||
                                    values.imageUrl.length === 0
                                ) {
                                    return;
                                }
                                const submittedData = {
                                    ...values,
                                    proficiency,
                                };
                                const { data } = await addTech({
                                    variables: {
                                        input: submittedData,
                                    },
                                });
                                if (data?.createTech.errors) {
                                    setErrors(
                                        toErrorMap(data.createTech.errors)
                                    );
                                }

                                dispatch(
                                    addTechToList(data?.createTech.tech as Tech)
                                );

                                onClose();
                            } catch (error) {
                                console.error(error);
                                setErrors({ name: 'Something went wrong' });
                            }
                        }}>
                        {({ isSubmitting }) => (
                            <Form>
                                <Flex>
                                    <Box w={'75%'}>
                                        <InputField
                                            name={'name'}
                                            placeholder={'Tech'}
                                            label={''}
                                            type={'text'}
                                            isPassword={false}
                                            showFormLabel={false}
                                        />
                                    </Box>
                                    <Select
                                        value={proficiency}
                                        placeholder={'Proficiency'}
                                        w={'25%'}
                                        ml={2}
                                        onChange={(e) => {
                                            setProficiency(
                                                e.target
                                                    .value as Proficiency['name']
                                            );
                                        }}>
                                        {proficiencyList.map((proficiency) => {
                                            return (
                                                <option
                                                    key={proficiency.id}
                                                    value={proficiency.name}>
                                                    {proficiency.name}
                                                </option>
                                            );
                                        })}
                                    </Select>
                                </Flex>
                                <Box my={4}>
                                    <InputField
                                        name={'imageUrl'}
                                        placeholder={'Image URL'}
                                        label={''}
                                        type={'text'}
                                        isPassword={false}
                                        showFormLabel={false}
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
                                    Add Tech
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default AddTechStackModal;
