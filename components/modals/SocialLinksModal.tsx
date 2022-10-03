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
import { useCreateSocialLinkMutation } from '../../generated/graphql';
import { useAppDispatch } from '../../hooks/redux';
import { addLink } from '../../store/slices/currentUser.slice';
import { ModalProps } from '../../utils/ModalProps';
import { SocialLink, SocialLinkTypes } from '../../utils/SocialLinkTypes';
import { toErrorMap } from '../../utils/toErrorMap';
import InputField from '../misc/InputField';

interface AddSocialLinkModalProps extends ModalProps {}

const AddSocialLinkModal: FC<AddSocialLinkModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [linkType, setLinkType] = useState<SocialLink['type']>('Github');
  const [addSocialLink] = useCreateSocialLinkMutation();
  const dispatch = useAppDispatch();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xl' isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Link</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={{ link: '' }}
            onSubmit={async (values, { setErrors }) => {
              try {
                const { data } = await addSocialLink({
                  variables: { input: { ...values, name: linkType } },
                });
                if (data?.createSocialLink.errors)
                  setErrors(toErrorMap(data.createSocialLink.errors));
                dispatch(addLink(data?.createSocialLink.socialLink!));
                onClose();
              } catch (error) {
                console.error(error);
                setErrors({ link: 'Something went wrong' });
              }
            }}>
            {({ isSubmitting }) => (
              <Form>
                <Flex alignItems={'end'}>
                  <Select placeholder={'Type'} w={'25%'} mr={2}>
                    {SocialLinkTypes.map((link) => {
                      return (
                        <option
                          onClick={() => {
                            setLinkType(link.type);
                          }}
                          key={link.id}
                          value={link.type}>
                          {link.type}
                        </option>
                      );
                    })}
                  </Select>

                  <Box w={'75%'}>
                    <InputField
                      name={'link'}
                      placeholder={'link'}
                      label={''}
                      type={'text'}
                      isPassword={false}
                      showFormLabel={false}
                    />
                  </Box>
                </Flex>

                <Button
                  w='full'
                  my={4}
                  type='submit'
                  colorScheme='teal'
                  mr={3}
                  isLoading={isSubmitting}>
                  Add Link
                </Button>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddSocialLinkModal;
