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
import { useDeleteTechMutation } from '../../generated/graphql';
import { useAppDispatch } from '../../hooks/redux';
import { deleteTechFromList } from '../../store/slices/currentUser.slice';
import { ModalProps } from '../../utils/ModalProps';

interface DeleteTechPopupModalProps extends ModalProps {
  techId: string;
}

const DeleteTechPopupModal: FC<DeleteTechPopupModalProps> = ({
  isOpen,
  onClose,
  techId,
}) => {
  const [deleteTech] = useDeleteTechMutation();
  const dispatch = useAppDispatch();

  const deleteTechHandler = async () => {
    try {
      await deleteTech({ variables: { techId } });
      dispatch(deleteTechFromList({ techId }));
    } catch (error) {
      console.error(error);
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Tech</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Are you sure you want to delete this tech?</ModalBody>
        <ModalFooter display={'flex'} justifyContent='flex-start'>
          <Button colorScheme='red' mr={3} onClick={deleteTechHandler}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteTechPopupModal;
