import { Box, colors } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import CheckBox from './CheckBox';
import Input from './Input';
import { todoReducerProps } from '../../interfaces/todo.interface';
import { useState } from 'react';

const CheckboxWithInput: React.FC<todoReducerProps> = ({ data: { todo, dispatch } }) => {
  const { id, title, finished } = todo;
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const [editedInputValue, setEditedInputValue] = useState<{ touched: boolean; value: string }>({
    touched: false,
    value: '',
  });

  const handleOnChangeUpdating = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEditedInputValue({ touched: true, value: ev.target.value });
  };

  const onLostFocus = () => {
    if (editedInputValue?.touched && !editedInputValue.value) {
      setEditedInputValue((prev) => ({ ...prev, touched: false }));
    }
    setReadOnly(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onLostFocus();
    }
  };

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <CheckBox data={{ todo, dispatch }} />
      <Input
        name={id}
        value={editedInputValue.touched ? editedInputValue.value : title}
        variant={'standard'}
        touched={{ ...editedInputValue, setEditedInputValue }}
        onDoubleClick={() => setReadOnly(false)}
        onKeyDown={handleKeyDown}
        onBlur={onLostFocus}
        readOnly={readOnly}
        onChange={handleOnChangeUpdating}
        sx={{ m: 0, marginLeft: '10px' }}
        multiLine
        inputProps={{
          disableUnderline: true,
          classes: {
            input: finished ? 'strikeThrough' : 'none',
          },
          style: { color: finished ? 'green' : 'black' },
        }}
      />
      <Box
        onClick={() => dispatch({ type: '[TODO] - DeleteTodo', payload: todo })}
        sx={{
          display: 'flex',
          alignItems: 'center',
          ml: 2,
          color: 'black',
          '&:hover': {
            color: colors.red[300],
            cursor: 'pointer',
          },
        }}
      >
        <HighlightOffIcon />
      </Box>
    </Box>
  );
};

export default CheckboxWithInput;
