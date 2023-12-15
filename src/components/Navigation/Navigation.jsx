import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggenIn } from '../../redux/auth/selectors';

export const Navigation = () => {
  const isLoggen = useSelector(selectIsLoggenIn);
  return (
    <>
      <NavLink to={'/'}>Home</NavLink>
      {isLoggen && <NavLink to={'/contacts'}>Contacts</NavLink>}
    </>
  );
};
