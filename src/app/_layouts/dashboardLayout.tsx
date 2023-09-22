import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import DashboardHeader from '../_components/molecules/header/dashboardHeader';

interface IDashboardProps {
  children: ReactNode;
}

const DashboardLayout: FC<IDashboardProps> = ({ children }) => {
  return (
    <Box>
      <DashboardHeader />
      {children}
    </Box>
  );
};

export default DashboardLayout;
