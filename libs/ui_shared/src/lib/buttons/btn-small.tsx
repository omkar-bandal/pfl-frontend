import { Button, ButtonProps, styled } from '@mui/material';
import { FC } from 'react';

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 600,
  boxShadow: 'none',
  // margin: theme.spacing(1),
  width: 120,
  marginRight: 2,
  marginLeft: 2,
}));
type BtnSmallProps = Omit<ButtonProps, 'startIcon' | 'variant' | 'size'> & {
  label: string;
  icon?: React.ReactNode;
};

export const BtnSmall: FC<BtnSmallProps> = (props) => {
  const { label, icon, ...rest } = props;
  return (
    <StyledButton variant="contained" size="small" startIcon={icon} {...rest}>
      {label}
    </StyledButton>
  );
};
