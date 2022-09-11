import { Box, Button, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { BiEditAlt, BiHide } from 'react-icons/bi';
import AddProjectModal from '../modals/AddProjectModal';
import AddAboutSectionModal from '../modals/AddAboutSectionModal';
import AddExperienceModal from '../modals/AddExperienceModal';
import AddTechStackModal from '../modals/AddTechStackModal';
import { ModalProps } from '../../utils/ModalProps';

interface DataSectionProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  heading: string;
  sectionAddHeading: string;
  sectionAddBody: string;
  buttonText: string;
}

const DataSection: FC<DataSectionProps> = ({
  isOpen,
  onClose,
  onOpen,
  heading,
  sectionAddHeading,
  sectionAddBody,
  buttonText,
}) => {
  let DataModal: FC<ModalProps> | null = null;

  switch (heading) {
    case 'Projects':
      DataModal = AddProjectModal;
      break;
    case 'TechStack':
      DataModal = AddTechStackModal;
      break;
    case 'Experience':
      DataModal = AddExperienceModal;
      break;
    case 'About':
      DataModal = AddAboutSectionModal;
      break;
    default:
      break;
  }

  console.log(DataModal);

  return (
    <Box ml={6} mt={20} w={'full'} bgColor={'gray.100'} rounded='base' p={4}>
      <Box>
        <Flex justifyContent={'space-between'}>
          <Heading size={'md'} fontWeight='semibold'>
            {heading}
          </Heading>
          <Box>
            <IconButton
              mx={2}
              aria-label={'edit about section'}
              icon={<BiEditAlt />}
            />
            <IconButton
              ml={2}
              aria-label={'delete about section'}
              icon={<BiHide />}
            />
          </Box>
        </Flex>
        <Box textAlign={'center'} p={15}>
          <Heading size={'md'} fontWeight='semibold'>
            {sectionAddHeading}
          </Heading>
          <Flex justifyContent={'center'}>
            <Text
              m={4}
              fontSize={'sm'}
              color='gray.600'
              wordBreak={'normal'}
              flexWrap='wrap'
              maxW={'60%'}
              textAlign='center'>
              {sectionAddBody}
            </Text>
          </Flex>

          <Button
            textColor={'white'}
            bgColor={'teal.500'}
            _hover={{
              bgColor: 'teal.600',
            }}
            onClick={onOpen}>
            {buttonText}
          </Button>
          {DataModal && <DataModal isOpen={isOpen} onClose={onClose} />}
        </Box>
      </Box>
    </Box>
  );
};

export default DataSection;
