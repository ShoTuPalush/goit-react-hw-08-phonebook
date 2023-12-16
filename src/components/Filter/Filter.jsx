import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filter/slice';

export const Filter = () => {
  const dispath = useDispatch();
  return (
    <>
      <TextField
        fullWidth
        label="Search"
        variant="outlined"
        margin="dense"
        type="text"
        onChange={evt => dispath(changeFilter(evt.target.value))}
      />
    </>
  );
};
