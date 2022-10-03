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
import { useDeleteProjectMutation } from '../../generated/graphql';
import { useAppDispatch } from '../../hooks/redux';
import { deleteProjectFromUser } from '../../store/slices/currentUser.slice';
import { ModalProps } from '../../utils/ModalProps';

interface DeleteProjectModalProps extends ModalProps {
  projectId: string;
}

const DeleteProjectModal: FC<DeleteProjectModalProps> = ({
  isOpen,
  onClose,
  projectId,
}) => {
  const [deleteProject] = useDeleteProjectMutation();
  const dispatch = useAppDispatch();

  const deleteProjectHandler = async () => {
    try {
      await deleteProject({
        variables: {
          projectId,
        },
      });
      dispatch(deleteProjectFromUser({ projectId }));
    } catch (error) {
      console.error(error);
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Are you sure you want to delete this Project?</ModalBody>
        <ModalFooter display={'flex'} justifyContent='flex-start'>
          <Button colorScheme='red' mr={3} onClick={deleteProjectHandler}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteProjectModal;
