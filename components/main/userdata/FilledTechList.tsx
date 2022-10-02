import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import DeleteTechPopupModal from '../../modals/DeleteTechPopupModal';
import EditTechModal from '../../modals/EditTechModal';

const FilledTechList = () => {
  const techStack = useAppSelector((state) => state.currentUser.user?.techList);
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
    <Flex flexDirection={'column'} wrap='wrap' maxH={700}>
      {techStack?.map((tech) => {
        return (
          <>
            <Flex
              key={tech._id}
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
          </>
        );
      })}
    </Flex>
  );
};

export default FilledTechList;
