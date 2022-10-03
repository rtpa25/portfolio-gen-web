import { Flex } from '@chakra-ui/react';
import { useAppSelector } from '../../../hooks/redux';
import FilledTechIndividualComponent from './individualFilledComponents/FilledTechIndividualComponent';

const FilledTechList = () => {
  const techStack = useAppSelector((state) => state.currentUser.user?.techList);

  return (
    <Flex flexDirection={'column'} wrap='wrap' maxH={700}>
      {techStack?.map((tech) => {
        return <FilledTechIndividualComponent key={tech._id} tech={tech} />;
      })}
    </Flex>
  );
};

export default FilledTechList;
