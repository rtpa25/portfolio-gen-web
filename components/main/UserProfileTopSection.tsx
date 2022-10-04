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
import { ProfileQuery } from '../../generated/graphql';
import { useAppSelector } from '../../hooks/redux';
import EditProfileModal from '../modals/EditProfileModal';
import Links from './Links';

interface UserProfileTopSectionProps {
  EditProfileModalOnOpen?: () => void;
  EditProfileModalIsOpen?: boolean;
  EditProfileModalOnClose?: () => void;
  AddSocialLinkModalOnOpen?: () => void;
  AddSocialLinkModalIsOpen?: boolean;
  AddSocialLinkModalOnClose?: () => void;
  userProfileData?: ProfileQuery | undefined;
}

const UserProfileTopSection: FC<UserProfileTopSectionProps> = ({
  EditProfileModalOnOpen,
  EditProfileModalIsOpen,
  EditProfileModalOnClose,
  AddSocialLinkModalOnOpen,
  AddSocialLinkModalIsOpen,
  AddSocialLinkModalOnClose,
  userProfileData,
}) => {
  const authenticatedUser = useAppSelector((state) => state.currentUser.user);

  return (
    <Box>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Box position={'relative'}>
          <Avatar
            name={
              userProfileData
                ? userProfileData?.userProfile?.username
                : authenticatedUser?.username
            }
            src={
              userProfileData
                ? userProfileData?.userProfile?.avatar
                : authenticatedUser?.avatar
            }
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
          </Box>
        </Box>

        {!userProfileData && (
          <Button
            mt={20}
            variant={'outline'}
            textColor='teal'
            borderColor={'teal'}
            onClick={EditProfileModalOnOpen}>
            <Text fontWeight={'medium'}>Edit Profile</Text>
          </Button>
        )}
        {!userProfileData && (
          <EditProfileModal
            isOpen={EditProfileModalIsOpen as boolean}
            onClose={EditProfileModalOnClose as () => void}
          />
        )}
      </Flex>
      <Links
        onOpen={AddSocialLinkModalOnOpen as () => void}
        isOpen={AddSocialLinkModalIsOpen as boolean}
        onClose={AddSocialLinkModalOnClose as () => void}
        userProfileData={userProfileData}
      />

      {!userProfileData && (
        <Flex
          mt={10}
          wrap={'wrap'}
          w={'full'}
          bgColor='gray.100'
          rounded='base'
          p={4}
          justifyContent='space-between'>
          <Flex wrap={'wrap'}>
            <a
              href={`https://devfolio.ronit.pro/${authenticatedUser?._id}`}
              target='_blank'
              rel='noreferrer'>
              <IconButton
                mr={4}
                mt={1}
                aria-label={'visit link'}
                variant='outline'
                textColor='teal'
                borderColor={'teal'}
                icon={<BiLinkExternal />}
              />
            </a>

            <Box>
              <Text fontSize={'sm'} color='gray.600'>
                My Front Page:
              </Text>
              <Heading size={'md'} fontWeight='semibold'>
                {`${authenticatedUser?.username}.devfolio.io`}
              </Heading>
            </Box>
          </Flex>
          <a
            href={`https://devfolio.ronit.pro/${authenticatedUser?._id}`}
            target='_blank'
            rel='noreferrer'>
            <Button
              mt={1}
              variant={'outline'}
              textColor='teal'
              borderColor={'teal'}>
              <Text fontWeight={'medium'}>Visit</Text>
            </Button>
          </a>
        </Flex>
      )}
    </Box>
  );
};

export default UserProfileTopSection;
