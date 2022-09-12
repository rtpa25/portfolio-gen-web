import { Box, Button, Heading, IconButton, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { useAppSelector } from '../../hooks/redux';
import { ModalProps } from '../../utils/ModalProps';
import AddSocialLinkModal from '../modals/SocialLinksModal';

interface LinksProps extends ModalProps {
  onOpen: () => void;
}

const Links: FC<LinksProps> = ({ isOpen, onClose, onOpen }) => {
  const currentUser = useAppSelector((state) => state.currentUser.user);
  return (
    <Box ml={6} mt={4}>
      <Heading size={'md'} fontWeight='semibold'>
        {currentUser?.username}
      </Heading>
      <Text mt={2}>{currentUser?.oneLiner}</Text>
      {currentUser?.socialLinks.length === 0 ? (
        <Button mt={10} variant={'solid'} onClick={onOpen}>
          <Text fontWeight={'medium'}>Add Links</Text>
        </Button>
      ) : (
        <div>
          {currentUser?.socialLinks.map((link) => {
            return <div key={link._id}>{link.name}</div>;
          })}
          <IconButton mx={2} aria-label={'edit section'} icon={<BiEditAlt />} />
        </div>
      )}
      <AddSocialLinkModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Links;
