import DashboardLayout from '@/app/_layouts/dashboardLayout';
import React from 'react';
import TaskBoard from '../template/taskboard';
const Homepage = () => {
  return (
    <DashboardLayout>
      <TaskBoard />
    </DashboardLayout>
  );
};

export default Homepage;
