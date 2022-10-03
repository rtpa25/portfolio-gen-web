import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useDeleteExperienceMutation } from '../../generated/graphql';
import { useAppDispatch } from '../../hooks/redux';
import { deleteExperienceFromUser } from '../../store/slices/currentUser.slice';
import { ModalProps } from '../../utils/ModalProps';

interface DeleteTechPopupModalProps extends ModalProps {
  expId: string;
}

const DeleteExperienceModal: FC<DeleteTechPopupModalProps> = ({
  isOpen,
  onClose,
  expId,
}) => {
  const [deleteExperience] = useDeleteExperienceMutation();
  const dispatch = useAppDispatch();

  const deleteTechHandler = async () => {
    try {
      await deleteExperience({ variables: { expId } });
      dispatch(deleteExperienceFromUser({ expId }));
    } catch (error) {
      console.error(error);
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Tech</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Are you sure you want to delete this Experience?</ModalBody>
        <ModalFooter display={'flex'} justifyContent='flex-start'>
          <Button colorScheme='red' mr={3} onClick={deleteTechHandler}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteExperienceModal;
