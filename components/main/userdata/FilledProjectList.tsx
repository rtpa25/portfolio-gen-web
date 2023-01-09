import { Flex } from '@chakra-ui/react';
import { useAppSelector } from '../../../hooks/redux';
import FilledProjectIndividualComponent from './individualFilledComponents/FilledProjectIndividualComponent';
import { FC } from 'react';
import { ProfileQuery, Project } from '../../../generated/graphql';

interface FilledProjectListProps {
    userProfileData?: ProfileQuery | undefined;
}

const FilledProjectList: FC<FilledProjectListProps> = ({ userProfileData }) => {
    const selfProjectList = useAppSelector(
        (state) => state.currentUser.user?.projectList
    );

    if (userProfileData) {
        return (
            <Flex flexDirection={'column'}>
                {userProfileData.userProfile?.projectList?.map((project) => {
                    return (
                        <FilledProjectIndividualComponent
                            key={project._id}
                            project={project as Project}
                            isSelf={false}
                        />
                    );
                })}
            </Flex>
        );
    } else {
        return (
            <Flex flexDirection={'column'}>
                {selfProjectList?.map((project) => {
                    return (
                        <FilledProjectIndividualComponent
                            key={project._id}
                            project={project}
                            isSelf={true}
                        />
                    );
                })}
            </Flex>
        );
    }
};

export default FilledProjectList;
