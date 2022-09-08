import { Box } from '@chakra-ui/react';
import { Wrapper } from '../components/zExporter';
import { createWithApollo } from '../utils/withApollo';

const Home = () => {
  return (
    <Wrapper variant='regular'>
      <Box>hello world</Box>
    </Wrapper>
  );
};

/*
  get server side props can be an option by fetching the data that the navbar is fetching we can put it in out redux store 
*/
// const getServerSideProps

export default createWithApollo({ ssr: false })(Home);
