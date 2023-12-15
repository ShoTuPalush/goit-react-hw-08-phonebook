import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyle } from './GlobalStyle';
import { logOut, login, refreshUser, register } from '../redux/auth/operations';
import { useEffect } from 'react';
import { selectIsLoggenIn, selectUser } from '../redux/auth/selectors';
import {
  addContacts,
  deleteContacts,
  featchContacts,
} from '../redux/contacts/operations';
import { selectVisibleContacts } from '../redux/contacts/selectors';
import { selectFilter } from '../redux/filter/selectors';
import { changeFilter } from '../redux/filter/slice';

export const App1 = () => {
  const dispath = useDispatch();
  const { name } = useSelector(selectUser);
  const isLoggen = useSelector(selectIsLoggenIn);
  const visivleContacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispath(refreshUser());
    dispath(featchContacts());
  }, [dispath]);

  const handleRegister = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispath(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleLogin = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispath(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleAdd = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispath(
      addContacts({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <GlobalStyle />

      {/* login  */}

      <form onSubmit={handleLogin}>
        <label>
          name
          <input type="text" name="name" />
        </label>
        <label>
          email
          <input type="email" name="email" />
        </label>
        <label>
          password
          <input type="password" name="password" />
        </label>
        <button type="submit">Sign up</button>
      </form>
      <button onClick={() => dispath(logOut())}>Log out</button>

      {isLoggen ? <p>name: {name}</p> : <p>not login user</p>}

      <form onSubmit={handleAdd}>
        <label>
          name
          <input type="text" name="name" />
        </label>
        <label>
          number
          <input type="tel" name="number" />
        </label>
        <button type="submit">Add</button>
      </form>

      <input
        type="text"
        value={filter}
        onChange={evt => dispath(changeFilter(evt.target.value))}
      />

      {visivleContacts.length > 0 && (
        <ul>
          {visivleContacts.map(contact => (
            <li key={contact.id}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <button onClick={() => dispath(deleteContacts(contact.id))}>
                delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
