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
import { Tech, useUpdateTechMutation } from '../../generated/graphql';
import { useAppDispatch } from '../../hooks/redux';
import { updateTechFromList } from '../../store/slices/currentUser.slice';
import { ModalProps } from '../../utils/ModalProps';
import { Proficiency, proficiencyList } from '../../utils/ProficiencyList';
import { toErrorMap } from '../../utils/toErrorMap';
import { InputField } from '../zExporter';

interface EditTechModalProps extends ModalProps {
    tech: Tech;
}

const EditTechModal: FC<EditTechModalProps> = ({ isOpen, onClose, tech }) => {
    const [proficiency, setProficiency] = useState<Proficiency['name']>(
        tech.proficiency as Proficiency['name']
    );

    const [updateTech] = useUpdateTechMutation();

    const dispatch = useAppDispatch();
    return (
        <Modal isOpen={isOpen} onClose={onClose} size='xl' isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Update Tech</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Formik
                        initialValues={{ imageUrl: '' }}
                        onSubmit={async (values, { setErrors }) => {
                            try {
                                const { data } = await updateTech({
                                    variables: {
                                        input: {
                                            _id: tech._id,
                                            imageUrl:
                                                values.imageUrl.length > 0
                                                    ? values.imageUrl
                                                    : tech.imageUrl,
                                            proficiency:
                                                proficiency.length > 0
                                                    ? proficiency
                                                    : tech.proficiency,
                                        },
                                    },
                                });
                                if (data?.updateTech.errors) {
                                    setErrors(
                                        toErrorMap(data.updateTech.errors)
                                    );
                                }
                                dispatch(
                                    updateTechFromList({
                                        _id: tech._id,
                                        imageUrl:
                                            data?.updateTech.tech?.imageUrl,
                                        proficiency:
                                            data?.updateTech.tech?.proficiency,
                                    })
                                );
                                onClose();
                            } catch (error) {
                                console.error(error);
                                setErrors({ imageUrl: 'Something went wrong' });
                            }
                        }}>
                        {({ isSubmitting }) => (
                            <Form>
                                <Flex>
                                    <Box w={'75%'}>
                                        <InputField
                                            name={'name'}
                                            placeholder={tech.name}
                                            label={''}
                                            disabled={true}
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
                                    Update Tech
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default EditTechModal;
