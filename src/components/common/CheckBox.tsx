import { Checkbox } from '@mui/material';
import { green, grey } from '@mui/material/colors';

import { todoReducerProps } from '../../interfaces/todo.interface';

const CheckBox: React.FC<todoReducerProps> = ({ data: { todo, dispatch } }) => {
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    todo.finished = ev.target.checked;
    dispatch({ type: '[TODO] - UpdateTodo', payload: todo });
  };

  return (
    <Checkbox
      name={todo.id}
      checked={todo.finished}
      onChange={handleChange}
      sx={{
        color: grey[800],
        '&.Mui-checked': {
          color: green[600],
        },
      }}
    />
  );
};

export default CheckBox;
