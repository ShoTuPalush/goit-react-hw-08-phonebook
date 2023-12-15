import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectIsLoggenIn } from '../../redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const AppBar = () => {
  const isLoggen = useSelector(selectIsLoggenIn);
  return (
    <>
      <Navigation />
      {isLoggen ? <UserMenu /> : <AuthNav />}
    </>
  );
};
