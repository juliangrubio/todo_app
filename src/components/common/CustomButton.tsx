import { Button, SxProps } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import { useState } from 'react';

interface Props {
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  sx?: SxProps;
}

const CustomButton = ({ name, onClick, sx }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={[
        {
          // margin: 0.5,
          textTransform: 'none',
          outline: 'none',
          // border: 'none',
          border: 'none' /* Standard syntax */,

          backgroundColor: 'transparent',
          color: lightBlue,
          fontWeight: 800,
          transition: 'transform .5s ease',
          transform: isHovered ? 'scale(1.5)' : 'scale(1.0)',
          // "&:hover": {
          //     transition: 'transform .5s ease',
          //     transform: 'scale(1.5)'
          // },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {name}
    </Button>
  );
};

export default CustomButton;
