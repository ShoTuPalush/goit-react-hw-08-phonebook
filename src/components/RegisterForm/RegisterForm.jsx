import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const RegisterForm = () => {
  return (
    <>
      <Box
        component="form"
        direction="column"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          name="name"
        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          name="name"
        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          name="name"
        />
      </Box>
    </>
  );
};
