import { Box, Typography } from '@mui/material';

export const AuthDescript = () => {
  return (
    <>
      <Box>
        <Typography
          textAlign={'center'}
          variant="h4"
          sx={{ mt: 12, width: 600 }}
        >
          Use the phone book from anywhere in the world
        </Typography>
        <img
          src="https://t4.ftcdn.net/jpg/00/32/19/73/360_F_32197323_PvTikBuAZkgf9dOVznMYYsD6wWiGB6tQ.jpg"
          alt="PhotoBook"
          style={{ marginLeft: 75 }}
        />
      </Box>
    </>
  );
};
