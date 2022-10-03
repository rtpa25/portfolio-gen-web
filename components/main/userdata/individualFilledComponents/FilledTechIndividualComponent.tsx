import {
  Flex,
  Avatar,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FC } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Tech } from '../../../../generated/graphql';
import DeleteTechPopupModal from '../../../modals/DeleteTechPopupModal';
import EditTechModal from '../../../modals/EditTechModal';

interface FilledTechIndividualComponentProps {
  tech: Tech;
  key: string;
}

const FilledTechIndividualComponent: FC<FilledTechIndividualComponentProps> = ({
  tech,
}) => {
  const {
    isOpen: DeleteTechModalIsOpen,
    onOpen: DeleteTechModalOnOpen,
    onClose: DeleteTechModalOnClose,
  } = useDisclosure();

  const {
    isOpen: EditTechModalIsOpen,
    onOpen: EditTechModalOnOpen,
    onClose: EditTechModalOnClose,
  } = useDisclosure();
  return (
    <Flex
      alignItems='center'
      m={4}
      ml={0}
      p={1}
      py={2}
      rounded='md'
      transition={'all 0.2s ease-in-out'}
      cursor={'pointer'}
      justifyContent='space-between'
      _hover={{
        backgroundColor: 'gray.100',
        transform: 'scale(1.01)',
      }}>
      <Flex>
        <Avatar name={tech.name} src={tech.imageUrl} mx={2} />
        <Flex alignItems={'center'}>
          <Text mx={2}>{tech.name}</Text>
          <Text mx={2} fontSize={'sm'} color='gray.500'>
            {tech.proficiency}
          </Text>
        </Flex>
      </Flex>
      <Flex>
        <IconButton
          aria-label={'delete'}
          variant='ghost'
          colorScheme={'red'}
          onClick={DeleteTechModalOnOpen}
          icon={<AiFillDelete />}
        />
        <IconButton
          aria-label={'edit'}
          variant='ghost'
          colorScheme={'teal'}
          onClick={EditTechModalOnOpen}
          icon={<AiFillEdit />}
        />
      </Flex>
      <DeleteTechPopupModal
        isOpen={DeleteTechModalIsOpen}
        onClose={DeleteTechModalOnClose}
        techId={tech._id}
      />
      <EditTechModal
        isOpen={EditTechModalIsOpen}
        onClose={EditTechModalOnClose}
        tech={tech}
      />
    </Flex>
  );
};

export default FilledTechIndividualComponent;
