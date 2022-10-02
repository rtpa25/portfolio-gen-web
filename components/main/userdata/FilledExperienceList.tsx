import {
  Box,
  Flex,
  Heading,
  IconButton,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react';
import { FC } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useAppSelector } from '../../../hooks/redux';
import { dateConverter } from '../../../utils/convertDateToExperienceFormat';
import { convertParaToBulletPoints } from '../../../utils/convertParaToBulletPoints';
import DeleteExperienceModal from '../../modals/DeleteExperienceModal';
import EditExperienceModal from '../../modals/EditExperienceModal';

interface FilledExperienceListProps {}

const FilledExperienceList: FC<FilledExperienceListProps> = () => {
  const experienceList = useAppSelector(
    (state) => state.currentUser.user?.experienceList
  );

  const {
    isOpen: DeleteExperienceModalIsOpen,
    onOpen: DeleteExperienceModalOnOpen,
    onClose: DeleteExperienceModalOnClose,
  } = useDisclosure();

  const {
    isOpen: EditExperienceModalIsOpen,
    onOpen: EditExperienceModalOnOpen,
    onClose: EditExperienceModalOnClose,
  } = useDisclosure();

  return (
    <Flex flexDirection={'column'}>
      {experienceList?.map((experience) => {
        console.log(experience.description);

        return (
          <Flex
            key={experience._id}
            my={6}
            rounded={'md'}
            p={4}
            transition={'all 0.2s ease-in-out'}
            cursor={'pointer'}
            _hover={{
              backgroundColor: 'gray.100',
              transform: 'scale(1.01)',
            }}>
            <Box
              w={'20%'}
              fontSize={'md'}
              fontWeight='medium'
              color={'gray.900'}>
              <Text>{experience.company}</Text>
            </Box>
            <Box w={'80%'}>
              <Flex justifyContent='space-between' alignItems={'center'}>
                <Heading
                  mb={2}
                  size={'md'}
                  fontWeight='semibold'
                  color={'gray.700'}>
                  {experience.title}
                </Heading>
                <Flex>
                  <IconButton
                    aria-label={'delete'}
                    variant='ghost'
                    colorScheme={'red'}
                    onClick={DeleteExperienceModalOnOpen}
                    icon={<AiFillDelete />}
                  />
                  <IconButton
                    aria-label={'edit'}
                    variant='ghost'
                    colorScheme={'teal'}
                    onClick={EditExperienceModalOnOpen}
                    icon={<AiFillEdit />}
                  />
                </Flex>
              </Flex>
              <Text
                my={2}
                fontSize={'md'}
                fontWeight='normal'
                color={'gray.600'}>
                {dateConverter(experience.from)} -{' '}
                {dateConverter(experience.to)}
              </Text>
              <UnorderedList>
                {convertParaToBulletPoints(experience.description).map((p) => {
                  return (
                    <ListItem
                      my={2}
                      lineHeight='taller'
                      fontSize={'md'}
                      fontWeight='normal'
                      color={'gray.500'}
                      key={p}>
                      {p}
                    </ListItem>
                  );
                })}
              </UnorderedList>
            </Box>
            <DeleteExperienceModal
              isOpen={DeleteExperienceModalIsOpen}
              onClose={DeleteExperienceModalOnClose}
              expId={experience._id}
            />
            <EditExperienceModal
              experience={experience}
              isOpen={EditExperienceModalIsOpen}
              onClose={EditExperienceModalOnClose}
            />
          </Flex>
        );
      })}
    </Flex>
  );
};

export default FilledExperienceList;
