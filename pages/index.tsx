import { Box, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
    DataSection,
    UserProfileTopSection,
    Wrapper,
} from '../components/zExporter';
import { useMeQuery } from '../generated/graphql';

const Home = () => {
    const {
        isOpen: EditProfileModalIsOpen,
        onOpen: EditProfileModalOnOpen,
        onClose: EditProfileModalOnClose,
    } = useDisclosure();

    const {
        isOpen: AddSocialLinkModalIsOpen,
        onOpen: AddSocialLinkModalOnOpen,
        onClose: AddSocialLinkModalOnClose,
    } = useDisclosure();

    const {
        isOpen: AddAboutSectionModalIsOpen,
        onOpen: AddAboutSectionModalOnOpen,
        onClose: AddAboutSectionModalOnClose,
    } = useDisclosure();

    const {
        isOpen: AddTechStackModalIsOpen,
        onOpen: AddTechStackModalOnOpen,
        onClose: AddTechStackModalOnClose,
    } = useDisclosure();

    const {
        isOpen: AddExperienceModalIsOpen,
        onOpen: AddExperienceModalOnOpen,
        onClose: AddExperienceModalOnClose,
    } = useDisclosure();

    const {
        isOpen: AddProjectModalIsOpen,
        onOpen: AddProjectModalOnOpen,
        onClose: AddProjectModalOnClose,
    } = useDisclosure();

    const { data, loading } = useMeQuery();
    const router = useRouter();

    if (!data?.me && !loading) {
        router.push('/auth/login');
    }

    return (
        <Wrapper variant='regular'>
            <Box w={'full'}>
                <UserProfileTopSection
                    EditProfileModalOnOpen={EditProfileModalOnOpen}
                    EditProfileModalIsOpen={EditProfileModalIsOpen}
                    AddSocialLinkModalOnOpen={AddSocialLinkModalOnOpen}
                    AddSocialLinkModalIsOpen={AddSocialLinkModalIsOpen}
                    AddSocialLinkModalOnClose={AddSocialLinkModalOnClose}
                    EditProfileModalOnClose={EditProfileModalOnClose}
                />

                <DataSection
                    isOpen={AddAboutSectionModalIsOpen}
                    onClose={AddAboutSectionModalOnClose}
                    onOpen={AddAboutSectionModalOnOpen}
                    heading={'About'}
                    sectionAddHeading={'Share something about yourself'}
                    sectionAddBody={`
            Let people know who you are and how you work. Make sure to
            describe your style of working to the world in a clear and
            concise way
          `}
                    buttonText={'Add About'}
                />

                <DataSection
                    isOpen={AddTechStackModalIsOpen}
                    onClose={AddTechStackModalOnClose}
                    onOpen={AddTechStackModalOnOpen}
                    heading={'TechStack'}
                    sectionAddHeading={
                        ' Share the Tech that you have worked with'
                    }
                    sectionAddBody={`
            List the technologies that you have worked with
            and your proficiency with those technologies
          `}
                    buttonText={'Add Tech'}
                />

                <DataSection
                    isOpen={AddExperienceModalIsOpen}
                    onClose={AddExperienceModalOnClose}
                    onOpen={AddExperienceModalOnOpen}
                    heading={'Experience'}
                    sectionAddHeading={'Share your past work experiences'}
                    sectionAddBody={`
            Let people know where you have worked at previously. Describe
             your contribution to the teams and the things that you are proud of
          `}
                    buttonText={'Add Position'}
                />

                <DataSection
                    isOpen={AddProjectModalIsOpen}
                    onClose={AddProjectModalOnClose}
                    onOpen={AddProjectModalOnOpen}
                    heading={'Projects'}
                    sectionAddHeading={'Share about your personal projects'}
                    sectionAddBody={`
            Let people know about your personal endeavors. Describe either
            about your personal projects or any open source
            contributions you have done that you are proud of
          `}
                    buttonText={'Add Project'}
                />
            </Box>
        </Wrapper>
    );
};

export default Home;
