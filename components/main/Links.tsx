import { Box, Button, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import { FC } from 'react';
import {
  AiFillMediumSquare,
  AiOutlineGithub,
  AiOutlineGlobal,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { ProfileQuery } from '../../generated/graphql';
import { useAppSelector } from '../../hooks/redux';
import { ModalProps } from '../../utils/ModalProps';
import { SocialLink } from '../../utils/SocialLinkTypes';
import AddSocialLinkModal from '../modals/SocialLinksModal';

interface LinksProps extends ModalProps {
  onOpen: () => void;
  userProfileData?: ProfileQuery | undefined;
}

const Links: FC<LinksProps> = ({
  isOpen,
  onClose,
  onOpen,
  userProfileData,
}) => {
  const currentUser = useAppSelector((state) => state.currentUser.user);

  return (
    <Box ml={0} mt={4}>
      <Heading size={'md'} fontWeight='semibold'>
        {userProfileData
          ? userProfileData.userProfile?.username
          : currentUser?.username}
      </Heading>
      <Text mt={2}>
        {userProfileData
          ? userProfileData.userProfile?.oneLiner
          : currentUser?.oneLiner}
      </Text>
      {!userProfileData ? (
        currentUser?.socialLinks && currentUser?.socialLinks.length === 0 ? (
          <Button mt={10} variant={'solid'} onClick={onOpen}>
            <Text fontWeight={'medium'}>Add Links</Text>
          </Button>
        ) : (
          <Flex>
            {currentUser?.socialLinks.map((link) => {
              let icon;
              switch (link.name as SocialLink['type']) {
                case 'Github':
                  icon = <AiOutlineGithub />;
                  break;
                case 'Email':
                  icon = <AiOutlineMail />;
                  break;
                case 'Linkedin':
                  icon = <AiOutlineLinkedin />;
                  break;
                case 'Medium':
                  icon = <AiFillMediumSquare />;
                  break;
                case 'Twitter':
                  icon = <AiOutlineTwitter />;
                  break;
                case 'Website':
                  icon = <AiOutlineGlobal />;
                  break;
                case 'Youtube':
                  icon = <AiOutlineYoutube />;
                  break;
                default:
                  break;
              }

              return (
                <Box m={2} ml={0} key={link._id}>
                  <a
                    href={
                      link.name === 'Email' ? `mailto:${link.link}` : link.link
                    }
                    rel='noopener noreferrer'
                    target='_blank'>
                    <IconButton
                      variant={'ghost'}
                      colorScheme={'teal'}
                      aria-label={link.name}
                      size={'lg'}
                      icon={icon}
                    />
                  </a>
                </Box>
              );
            })}
            <Box ml={0} m={2}>
              <IconButton
                variant={'ghost'}
                size={'lg'}
                aria-label={'edit section'}
                icon={<BiEditAlt />}
                onClick={onOpen}
              />
            </Box>
          </Flex>
        )
      ) : (
        <Flex>
          {userProfileData.userProfile?.socialLinks.map((link) => {
            let icon;
            switch (link.name as SocialLink['type']) {
              case 'Github':
                icon = <AiOutlineGithub />;
                break;
              case 'Email':
                icon = <AiOutlineMail />;
                break;
              case 'Linkedin':
                icon = <AiOutlineLinkedin />;
                break;
              case 'Medium':
                icon = <AiFillMediumSquare />;
                break;
              case 'Twitter':
                icon = <AiOutlineTwitter />;
                break;
              case 'Website':
                icon = <AiOutlineGlobal />;
                break;
              case 'Youtube':
                icon = <AiOutlineYoutube />;
                break;
              default:
                break;
            }

            return (
              <Box m={2} ml={0} key={link._id}>
                <a
                  href={
                    link.name === 'Email' ? `mailto:${link.link}` : link.link
                  }
                  rel='noopener noreferrer'
                  target='_blank'>
                  <IconButton
                    variant={'ghost'}
                    colorScheme={'teal'}
                    aria-label={link.name}
                    size={'lg'}
                    icon={icon}
                  />
                </a>
              </Box>
            );
          })}
          {!userProfileData && (
            <Box ml={0} m={2}>
              <IconButton
                variant={'ghost'}
                size={'lg'}
                aria-label={'edit section'}
                icon={<BiEditAlt />}
                onClick={onOpen}
              />
            </Box>
          )}
        </Flex>
      )}
      {!userProfileData && (
        <AddSocialLinkModal isOpen={isOpen} onClose={onClose} />
      )}
    </Box>
  );
};

export default Links;
