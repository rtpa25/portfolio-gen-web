import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { ProfileQuery } from '../../../generated/graphql';
import { useAppSelector } from '../../../hooks/redux';
import FilledExperienceIndividualComponent from './individualFilledComponents/FilledExperienceIndividualComponent';

interface FilledExperienceListProps {
    userProfileData?: ProfileQuery | undefined;
}

const FilledExperienceList: FC<FilledExperienceListProps> = ({
    userProfileData,
}) => {
    const experienceList = useAppSelector(
        (state) => state.currentUser.user?.experienceList
    );

    if (userProfileData) {
        return (
            <Flex flexDirection={'column'}>
                {userProfileData.userProfile?.experienceList?.map(
                    (experience) => {
                        return (
                            <FilledExperienceIndividualComponent
                                key={experience._id}
                                experience={experience}
                                isSelf={false}
                            />
                        );
                    }
                )}
            </Flex>
        );
    } else {
        return (
            <Flex flexDirection={'column'}>
                {experienceList?.map((experience) => {
                    return (
                        <FilledExperienceIndividualComponent
                            key={experience._id}
                            experience={experience}
                            isSelf={true}
                        />
                    );
                })}
            </Flex>
        );
    }
};

export default FilledExperienceList;
