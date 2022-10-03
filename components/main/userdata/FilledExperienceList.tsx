import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import FilledExperienceIndividualComponent from './individualFilledComponents/FilledExperienceIndividualComponent';

interface FilledExperienceListProps {}

const FilledExperienceList: FC<FilledExperienceListProps> = () => {
  const experienceList = useAppSelector(
    (state) => state.currentUser.user?.experienceList
  );

  return (
    <Flex flexDirection={'column'}>
      {experienceList?.map((experience) => {
        return (
          <FilledExperienceIndividualComponent
            key={experience._id}
            experience={experience}
          />
        );
      })}
    </Flex>
  );
};

export default FilledExperienceList;
