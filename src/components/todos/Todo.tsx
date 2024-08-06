import CheckboxWithInput from '../common/CheckBoxWithInput';
import { FC } from 'react';
import { todoReducerProps } from '../../interfaces/todo.interface';

// const TodoComponent: FC<Todo> = ({ id, name, enable }) => {
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CheckboxWithInput
//         id={id}
//         name={name}
//         enable={enable}
//       />
//     </Box>
//   );
// };

const TodoComponent: FC<todoReducerProps> = ({ data: { todo, dispatch } }) => {
  return <CheckboxWithInput data={{ todo, dispatch }} />;
};

export default TodoComponent;
