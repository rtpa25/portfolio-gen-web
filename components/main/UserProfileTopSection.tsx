import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { useAppSelector } from '../../hooks/redux';
import EditProfileModal from '../modals/EditProfileModal';
import AddSocialLinkModal from '../modals/SocialLinksModal';

interface UserProfileTopSectionProps {
  EditProfileModalOnOpen: () => void;
  EditProfileModalIsOpen: boolean;
  EditProfileModalOnClose: () => void;
  AddSocialLinkModalOnOpen: () => void;
  AddSocialLinkModalIsOpen: boolean;
  AddSocialLinkModalOnClose: () => void;
}

const UserProfileTopSection: FC<UserProfileTopSectionProps> = ({
  EditProfileModalOnOpen,
  EditProfileModalIsOpen,
  EditProfileModalOnClose,
  AddSocialLinkModalOnOpen,
  AddSocialLinkModalIsOpen,
  AddSocialLinkModalOnClose,
}) => {
  const currentUser = useAppSelector((state) => state.currentUser.user);

  return (
    <Box>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Box position={'relative'}>
          <Avatar
            name={currentUser?.username}
            mx={4}
            cursor={'pointer'}
            size={'2xl'}
          />
          <Box
            bgColor={'black'}
            position='absolute'
            borderRadius='full'
            right={4}
            p={4}
            bottom={0}>
            <Text position={'absolute'} top={1} right={2}>
              👋
            </Text>
            {/* <Box position={'absolute'} w='auto' bgColor='black'>
              <Text color={'white'}>Hello There</Text>
            </Box> */}
          </Box>
        </Box>

        <Button
          mt={20}
          variant={'outline'}
          textColor='teal'
          borderColor={'teal'}
          onClick={EditProfileModalOnOpen}>
          <Text fontWeight={'medium'}>Edit Profile</Text>
        </Button>

        <EditProfileModal
          isOpen={EditProfileModalIsOpen}
          onClose={EditProfileModalOnClose}
        />
      </Flex>
      <Box ml={6} mt={4}>
        <Heading size={'md'} fontWeight='semibold'>
          {currentUser?.username}
        </Heading>
        <Text mt={2}>This is Vansita</Text>
        <Button mt={10} variant={'solid'} onClick={AddSocialLinkModalOnOpen}>
          <Text fontWeight={'medium'}>Add Links</Text>
        </Button>
        <AddSocialLinkModal
          isOpen={AddSocialLinkModalIsOpen}
          onClose={AddSocialLinkModalOnClose}
        />
      </Box>

      <Flex
        ml={6}
        mt={10}
        w={'full'}
        bgColor='gray.100'
        rounded='base'
        p={4}
        justifyContent='space-between'>
        <Flex>
          <IconButton
            mr={4}
            mt={1}
            aria-label={'visit link'}
            variant='outline'
            textColor='teal'
            borderColor={'teal'}
            icon={<BiLinkExternal />}
          />
          <Box>
            <Text fontSize={'sm'} color='gray.600'>
              My Front Page:
            </Text>
            <Heading size={'md'} fontWeight='semibold'>
              {'vansita.devfolio.com'}
            </Heading>
          </Box>
        </Flex>
        <Button
          mt={1}
          variant={'outline'}
          textColor='teal'
          borderColor={'teal'}>
          <Text fontWeight={'medium'}>Visit</Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default UserProfileTopSection;
