import React from 'react';
import {
  FilledInputProps,
  FormControl,
  InputProps,
  OutlinedInputProps,
  SxProps,
  TextField,
  TextFieldVariants,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import './styles.css';

interface Props {
  name: string;
  value: string;
  type?: string;
  variant?: TextFieldVariants | undefined;
  label?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error?: string;
  multiLine?: boolean | undefined;
  touched?: {
    touched: boolean;
    value: string;
    setEditedInputValue: React.Dispatch<
      React.SetStateAction<{
        touched: boolean;
        value: string;
      }>
    >;
  };

  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
  readOnly?: boolean;
  onDoubleClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;

  sx?: SxProps;
  inputProps?:
    | Partial<FilledInputProps>
    | Partial<OutlinedInputProps>
    | Partial<InputProps>
    | undefined;
}

export default function Input(props: Props) {
  const {
    type,
    name,
    label,
    placeholder,
    value,
    error = null,
    onChange,
    sx = [],
    inputProps,
    multiLine,
    touched,
    readOnly,
    onDoubleClick,
    onBlur,
    onKeyDown,
    variant,
    ...other
  } = props;

  return (
    <FormControl margin='dense' sx={{ width: '100%' }}>
      <TextField
        type={type || 'text'}
        variant={variant}
        label={label}
        onDoubleClick={onDoubleClick}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        // disabled
        placeholder={placeholder}
        name={name}
        // value={value}
        value={touched?.touched ? touched.value : value}
        onChange={onChange}
        multiline={multiLine}
        fullWidth
        autoComplete='off'
        sx={[
          {
            padding: 0,
            margin: 0,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: grey[200],
              },
              '&:hover fieldset': {
                borderColor: grey[200],
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        InputProps={{
          style: { color: 'white', width: '100%' },
          ...inputProps,
          // readOnly: readOnly ? readOnly.readOnly : true,
          readOnly: readOnly,
        }}
        {...other}
        {...(error && { error: true, helperText: error })}
      />
    </FormControl>
  );
}
