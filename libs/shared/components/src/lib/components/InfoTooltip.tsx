import React from 'react';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

type InfoTooltipProps = Omit<TooltipProps, 'title'> & {
  info: React.ReactNode; 
  children: React.ReactNode; 
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({
  info,
  children,
  ...rest
}) => {
  return (
    <Tooltip title={info} arrow {...rest}>
      {children}
    </Tooltip>
  );
};

