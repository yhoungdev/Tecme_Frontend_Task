import { IButton } from '@/app/interface/ button.interface';
import { Button } from '@chakra-ui/react';
import React, { FC } from 'react';

const PrimaryButton: FC<IButton> = ({ children, ...rest }) => {
  return (
    <Button {...rest} borderRadius={'50px'}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
