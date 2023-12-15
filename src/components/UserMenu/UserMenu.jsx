import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <>
      <p>Welcome, {user.name}</p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </>
  );
};
