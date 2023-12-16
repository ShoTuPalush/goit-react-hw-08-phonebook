import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import { Button, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <>
      <PersonIcon />
      <Typography>Welcome, {user.name}</Typography>
      <Button
        color="primary"
        variant="contained"
        disableElevation
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </>
  );
};
