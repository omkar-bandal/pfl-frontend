/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, ButtonProps, styled } from '@mui/material';
import { FC, memo } from 'react';
import { InfoTooltip } from '../InfoTooltip';

const StyledButton = styled(Button)(() => ({
  textTransform: 'none',
  fontWeight: 600,
  boxShadow: 'none',
  width: 120,
  marginRight: 1,
  marginLeft: 1,
  '&.MuiButton-startIcon':{
    fontSize: 12
  },
  '&.MuiButton-text':{
    fontSize: 12,
  }
}));
type BtnSmallProps = Omit<ButtonProps, 'startIcon' | 'variant' | 'size'> & {
  label: any;
  icon?: React.ReactNode;
  toolTipText?: string;
};

export const BtnSmall: FC<BtnSmallProps> = memo(({ label, icon, toolTipText = '', ...rest }: BtnSmallProps) => {
  return (
    <InfoTooltip info={toolTipText}>
      <StyledButton variant="contained" size="small" startIcon={icon} {...rest}>
        {label}
      </StyledButton>
    </InfoTooltip>
  );
});
