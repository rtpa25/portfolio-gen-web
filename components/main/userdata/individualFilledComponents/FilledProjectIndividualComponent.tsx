import {
    Box,
    Text,
    Flex,
    Heading,
    IconButton,
    UnorderedList,
    ListItem,
    Image,
    useDisclosure,
} from '@chakra-ui/react';
import { FC } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { Project } from '../../../../generated/graphql';
import DeleteProjectModal from '../../../modals/DeleteProjectModal';
import EditProjectModal from '../../../modals/EditProjectModal';

interface FilledProjectIndividualComponentProps {
    project: Project;
    key: string;
    isSelf: boolean;
}

const FilledProjectIndividualComponent: FC<
    FilledProjectIndividualComponentProps
> = ({ project, isSelf }) => {
    const {
        isOpen: DeleteProjectModalIsOpen,
        onOpen: DeleteProjectModalOnOpen,
        onClose: DeleteProjectModalOnClose,
    } = useDisclosure();

    const {
        isOpen: EditProjectModalIsOpen,
        onOpen: EditProjectModalOnOpen,
        onClose: EditProjectModalOnClose,
    } = useDisclosure();
    return (
        <Box
            my={6}
            rounded={'md'}
            p={4}
            transition={'all 0.2s ease-in-out'}
            cursor={'pointer'}
            _hover={{
                backgroundColor: 'gray.100',
                transform: 'scale(1.01)',
            }}
            key={project._id}>
            <Flex justifyContent={'space-between'}>
                <Heading size={'lg'} fontWeight='semibold' color={'teal.700'}>
                    {project.title}
                </Heading>
                {isSelf && (
                    <Flex justifyContent={'space-evenly'} mr={6}>
                        <IconButton
                            aria-label={'delete'}
                            variant='ghost'
                            colorScheme={'red'}
                            onClick={DeleteProjectModalOnOpen}
                            icon={<AiFillDelete />}
                        />
                        <IconButton
                            aria-label={'edit'}
                            variant='ghost'
                            colorScheme={'teal'}
                            onClick={EditProjectModalOnOpen}
                            icon={<AiFillEdit />}
                        />
                    </Flex>
                )}
            </Flex>
            <Flex my={4} justifyContent='space-between'>
                <Box
                    width={'80%'}
                    height='auto'
                    overflow='hidden'
                    borderRadius={'md'}
                    bgGradient={'linear(to-r, teal.100, teal.200)'}>
                    <Image
                        opacity={0.7}
                        transition={'all 0.2s ease-in-out'}
                        _hover={{ transform: 'scale(1.01)', opacity: 1 }}
                        width={'100%'}
                        borderRadius={'md'}
                        objectFit='cover'
                        src={project.imageUrl}
                        alt={project.title}
                    />
                </Box>

                <Flex
                    justifyContent={'space-evenly'}
                    width='20%'
                    alignItems='flex-end'>
                    <a
                        href={project.github}
                        rel='noopener noreferrer'
                        target='_blank'>
                        <IconButton
                            aria-label={'github'}
                            icon={<BsGithub />}
                            colorScheme='teal'
                            variant='outline'
                        />
                    </a>
                    <a
                        href={project.demo}
                        rel='noopener noreferrer'
                        target={'_blank'}>
                        <IconButton
                            aria-label={'external'}
                            icon={<BiLinkExternal />}
                            colorScheme='teal'
                            variant='outline'
                        />
                    </a>
                </Flex>
            </Flex>
            <Box>
                <Text
                    lineHeight='taller'
                    fontSize={'md'}
                    fontWeight='normal'
                    color={'gray.500'}>
                    {project.description}
                </Text>
                <UnorderedList mx={0} my={4}>
                    {project.tech.map((tech) => {
                        return (
                            <ListItem
                                color={'teal'}
                                display={'inline'}
                                mr={2}
                                key={tech}>
                                {tech}
                            </ListItem>
                        );
                    })}
                </UnorderedList>
            </Box>
            {isSelf && (
                <DeleteProjectModal
                    isOpen={DeleteProjectModalIsOpen}
                    onClose={DeleteProjectModalOnClose}
                    projectId={project._id}
                />
            )}
            {isSelf && (
                <EditProjectModal
                    isOpen={EditProjectModalIsOpen}
                    onClose={EditProjectModalOnClose}
                    project={project}
                />
            )}
        </Box>
    );
};

export default FilledProjectIndividualComponent;
