import { Dispatch, FC, SetStateAction } from 'react';
import { Todos } from './';
import { pickScreen } from '../../interfaces/todo.interface';

interface Props {
  setWindow: Dispatch<SetStateAction<pickScreen>>;
}

const TodosForm: FC<Props> = ({ setWindow }) => {
  return (
    <>
      <Todos setWindow={setWindow} />
    </>
  );
};

export default TodosForm;
