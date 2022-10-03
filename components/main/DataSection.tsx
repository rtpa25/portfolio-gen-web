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
import { ProfileQuery } from '../../generated/graphql';

interface DataSectionProps {
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  heading: string;
  sectionAddHeading?: string;
  sectionAddBody?: string;
  buttonText?: string;
  userProfileData?: ProfileQuery | undefined;
}

const DataSection: FC<DataSectionProps> = ({
  isOpen,
  onClose,
  onOpen,
  heading,
  sectionAddHeading,
  sectionAddBody,
  buttonText,
  userProfileData,
}) => {
  let DataModal: FC<ModalProps> | null = null;

  let dataBox: JSX.Element | null = !userProfileData ? (
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
  ) : null;

  const { user } = useAppSelector((state) => state.currentUser);

  switch (heading) {
    case 'Projects':
      if (userProfileData) {
        dataBox = <FilledProjectList userProfileData={userProfileData} />; //need to add prop of user profile data
      } else if (user?.projectList.length !== 0 && !userProfileData) {
        dataBox = <FilledProjectList />;
      }
      DataModal = AddProjectModal;
      break;
    case 'TechStack':
      if (userProfileData) {
        dataBox = <FilledTechList userProfileData={userProfileData} />;
      } else if (user?.techList.length !== 0 && !userProfileData) {
        dataBox = <FilledTechList />;
      }
      DataModal = AddTechStackModal;
      break;
    case 'Experience':
      if (userProfileData) {
        dataBox = <FilledExperienceList userProfileData={userProfileData} />;
      } else if (user?.experienceList.length !== 0 && !userProfileData) {
        dataBox = <FilledExperienceList />;
      }
      DataModal = AddExperienceModal;
      break;
    case 'About':
      if (userProfileData) {
        dataBox = <FilledAboutSection userProfileData={userProfileData} />;
      } else if (user?.about && !userProfileData) {
        dataBox = <FilledAboutSection />;
      }
      DataModal = AddAboutSectionModal;
      break;
    default:
      break;
  }

  return (
    <Box ml={0} mt={20} w={'full'} bgColor={'gray.50'} rounded='base' p={4}>
      <Box>
        <Flex justifyContent={'space-between'}>
          <Heading size={'md'} fontWeight='semibold'>
            {heading}
          </Heading>
          {!userProfileData && (
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
          )}
        </Flex>
        <Box>
          {dataBox}
          {DataModal && (
            <DataModal
              isOpen={isOpen as boolean}
              onClose={onClose as () => void}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default DataSection;
