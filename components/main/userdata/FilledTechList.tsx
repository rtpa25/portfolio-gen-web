import { Flex } from '@chakra-ui/react';
import { ProfileQuery, Tech } from '../../../generated/graphql';
import { useAppSelector } from '../../../hooks/redux';
import FilledTechIndividualComponent from './individualFilledComponents/FilledTechIndividualComponent';
import { FC } from 'react';

interface FilledTechListProps {
  userProfileData?: ProfileQuery | undefined;
}

const FilledTechList: FC<FilledTechListProps> = ({ userProfileData }) => {
  const techStack = useAppSelector((state) => state.currentUser.user?.techList);

  if (userProfileData) {
    return (
      <Flex flexDirection={'column'}>
        {userProfileData.userProfile?.techList?.map((tech) => {
          return (
            <FilledTechIndividualComponent
              key={tech._id}
              tech={tech as Tech}
              isSelf={false}
            />
          );
        })}
      </Flex>
    );
  }

  return (
    <Flex flexDirection={'column'} wrap='wrap' maxH={700}>
      {techStack?.map((tech) => {
        return (
          <FilledTechIndividualComponent
            key={tech._id}
            tech={tech}
            isSelf={true}
          />
        );
      })}
    </Flex>
  );
};

export default FilledTechList;
