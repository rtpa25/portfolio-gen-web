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
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Form, Formik } from 'formik';

import { FC, LegacyRef, useRef, useState } from 'react';
import { v4 } from 'uuid';
import {
    UpdateUserProfileInput,
    useUpdateUserProfileMutation,
} from '../../generated/graphql';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ModalProps } from '../../utils/ModalProps';
import { storage } from '../../utils/firebase';
import { toErrorMap } from '../../utils/toErrorMap';
import InputField from '../misc/InputField';

interface EditProfileModalProps extends ModalProps {}

const EditProfileModal: FC<EditProfileModalProps> = ({ isOpen, onClose }) => {
    const currentUser = useAppSelector((state) => state.currentUser.user);
    const fileSelectorRef: LegacyRef<HTMLInputElement> = useRef(null);
    const [updateProfile] = useUpdateUserProfileMutation();
    const dispatch = useAppDispatch();
    const [avatarUrlFromFirebase, setAvatarUrlFromFirebase] = useState('');

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
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
                            src={
                                avatarUrlFromFirebase
                                    ? avatarUrlFromFirebase
                                    : currentUser?.avatar
                            }
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
                                onChange={(e) => {
                                    const imageRef = ref(
                                        storage,
                                        `images/${
                                            e.target.files![0].name + v4()
                                        }`
                                    );
                                    uploadBytes(
                                        imageRef,
                                        e.target.files![0]
                                    ).then((snapshot) => {
                                        getDownloadURL(snapshot.ref).then(
                                            (url) => {
                                                setAvatarUrlFromFirebase(url);
                                            }
                                        );
                                    });
                                }}
                            />
                        </Box>
                    </Flex>
                    <Formik
                        initialValues={{
                            username: '',
                            status: '',
                            oneLiner: '',
                        }}
                        onSubmit={async (values, { setErrors }) => {
                            const input: UpdateUserProfileInput = { ...values };
                            if (avatarUrlFromFirebase)
                                input['avatar'] = avatarUrlFromFirebase;
                            const { data } = await updateProfile({
                                variables: {
                                    input,
                                },
                                refetchQueries: ['Me'],
                                updateQueries: {
                                    Me: (prev, { mutationResult }) => {
                                        if (!mutationResult.data) return prev;
                                        return {
                                            ...prev,
                                            mutationResult,
                                        };
                                    },
                                },
                            });
                            if (data?.updateUserProfile.errors) {
                                setErrors(
                                    toErrorMap(data.updateUserProfile.errors)
                                );
                            }

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
                                        placeholder={
                                            currentUser?.status
                                                ? currentUser?.status
                                                : ''
                                        }
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
                                            currentUser?.oneLiner
                                                ? currentUser?.oneLiner
                                                : ''
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
