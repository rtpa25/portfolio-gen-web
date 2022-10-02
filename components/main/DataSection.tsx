import { Box, Button, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { BiEditAlt, BiHide } from 'react-icons/bi';
import AddProjectModal from '../modals/AddProjectModal';
import AddAboutSectionModal from '../modals/AddAboutSectionModal';
import AddExperienceModal from '../modals/AddExperienceModal';
import AddTechStackModal from '../modals/AddTechStackModal';
import { ModalProps } from '../../utils/ModalProps';
import { useAppSelector } from '../../hooks/redux';
import FilledAboutSection from './userdata/FilledAboutSection';
import FilledProjectList from './userdata/FilledProjectList';
import FilledTechList from './userdata/FilledTechList';
import FilledExperienceList from './userdata/FilledExperienceList';

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

  let dataBox: JSX.Element | null = (
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
    </Box>
  );

  const { user } = useAppSelector((state) => state.currentUser);

  switch (heading) {
    case 'Projects':
      if (user?.projectList.length !== 0) {
        dataBox = <FilledProjectList />;
      }
      DataModal = AddProjectModal;
      break;
    case 'TechStack':
      if (user?.techList.length !== 0) {
        dataBox = <FilledTechList />;
      }
      DataModal = AddTechStackModal;
      break;
    case 'Experience':
      if (user?.experienceList.length !== 0) {
        dataBox = <FilledExperienceList />;
      }
      DataModal = AddExperienceModal;
      break;
    case 'About':
      if (user?.about) {
        dataBox = <FilledAboutSection />;
      }
      DataModal = AddAboutSectionModal;
      break;
    default:
      break;
  }

  return (
    <Box ml={6} mt={20} w={'full'} bgColor={'gray.50'} rounded='base' p={4}>
      <Box>
        <Flex justifyContent={'space-between'}>
          <Heading size={'md'} fontWeight='semibold'>
            {heading}
          </Heading>
          <Box>
            <IconButton
              mx={2}
              onClick={onOpen}
              aria-label={'edit section'}
              icon={<BiEditAlt />}
            />
            <IconButton
              ml={2}
              aria-label={'delete section'}
              icon={<BiHide />}
            />
          </Box>
        </Flex>
        <Box>
          {dataBox}
          {DataModal && <DataModal isOpen={isOpen} onClose={onClose} />}
        </Box>
      </Box>
    </Box>
  );
};

export default DataSection;
