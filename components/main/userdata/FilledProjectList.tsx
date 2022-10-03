import { Flex } from '@chakra-ui/react';
import { useAppSelector } from '../../../hooks/redux';
import FilledProjectIndividualComponent from './individualFilledComponents/FilledProjectIndividualComponent';

const FilledProjectList = () => {
  const projectList = useAppSelector(
    (state) => state.currentUser.user?.projectList
  );
  return (
    <Flex flexDirection={'column'}>
      {projectList?.map((project) => {
        return (
          <FilledProjectIndividualComponent
            key={project._id}
            project={project}
          />
        );
      })}
    </Flex>
  );
};

export default FilledProjectList;
