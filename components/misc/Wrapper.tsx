import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import NavBar from './NavBar';

interface WrapperProps {
    children: ReactNode;
    variant?: 'small' | 'regular';
}

const Wrapper: FC<WrapperProps> = ({ children, variant }) => {
    return (
        <Box>
            <NavBar />
            <Box
                mt={8}
                maxW={variant === 'regular' ? '800px' : '500px'}
                w='100%'
                ml={0}
                mx={'auto'}>
                {children}
            </Box>
        </Box>
    );
};

export default Wrapper;
