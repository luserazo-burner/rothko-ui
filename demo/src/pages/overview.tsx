import { Typography } from '@rothko-ui/ui';
import React from 'react';
import WithNavigation from '../components/WithNavigation';

const Overview = () => {
  return (
    <WithNavigation selected="/overview">
      <Typography.h1>Todo</Typography.h1>
    </WithNavigation>
  );
};

export default Overview;
