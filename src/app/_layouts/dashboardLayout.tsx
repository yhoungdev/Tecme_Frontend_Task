import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import DashboardHeader from '../_components/molecules/header/dashboardHeader';
import ContainerLayout from './containerLayout';

interface IDashboardProps {
  children: ReactNode;
}

const DashboardLayout: FC<IDashboardProps> = ({ children }) => {
  return (
    <Box>
      <DashboardHeader />
      <ContainerLayout>{children}</ContainerLayout>
    </Box>
  );
};

export default DashboardLayout;
