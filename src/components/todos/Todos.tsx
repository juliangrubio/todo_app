import { Dispatch, SetStateAction, useReducer, useState } from 'react';
import { Box, Grid, Typography, colors } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import { TodoState, todoReducer } from '../../reducers/todos.reducer';
import TodoComponent from './Todo';
import { Input } from '../common';
import { pickScreen } from '../../interfaces/todo.interface';

// const todos = [
//   {
//     id: 'uno',
//     title: 'julian',
//     finished: true,
//   },
//   {
//     id: 'dos',
//     title: 'fernando',
//     finished: false,
//   },
// ];

// const Todo_INITIAL_STATE: TodoState = {
//   todos: [...todos],
//   completedTodos: [...todos],
// };

const Todo_INITIAL_STATE: TodoState = {
  todos: [
    {
      id: crypto.randomUUID(),
      title: 'First task...',
      finished: true,
    },
    {
      id: crypto.randomUUID(),
      title: 'Second task...',
      finished: false,
    },
    {
      id: crypto.randomUUID(),
      title: 'If you want to modify this label, you can tap here by double clicking on it...',
      finished: false,
    },
  ],
  completedTodos: false,
};

const bottomButtons = [
  { id: 1, label: 'All' },
  { id: 2, label: 'Completed' },
  { id: 3, label: 'Delete completed' },
];

interface Props {
  setWindow: Dispatch<SetStateAction<pickScreen>>;
}

const Todos: React.FC<Props> = ({ setWindow }) => {
  const [todoValue, setTodoValue] = useState<string>('');
  const [state, dispatch] = useReducer(todoReducer, Todo_INITIAL_STATE);

  const handleOnChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const type = ev.target.value;
    setTodoValue(type);
  };

  const handleOnSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    // console.log(state);
    if (todoValue.length <= 0) return;

    dispatch({
      type: '[TODO] - PostTodo',
      payload: [
        {
          id: window.crypto.randomUUID(),
          title: todoValue,
          finished: false,
        },
      ],
    });

    setTodoValue('');
  };

  const handleClickLogout = () => {
    setWindow(pickScreen.login);
  };

  const handleClickBottomButtons = (buttonId: number) => {
    // alert(`Has hecho clic en el botón ${buttonId}`);
    switch (buttonId) {
      case 1:
        dispatch({ type: '[TODO] - GetAllTodo' });
        return;

      case 2:
        dispatch({ type: '[TODO] - GetCompletedTodo' });
        return;

      case 3:
        dispatch({ type: '[TODO] - DeleteCompletedTodo' });
        return;

      default:
        state;
    }
  };

  return (
    <>
      {/* <Box
        sx={{
          // height: 'auto',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'pink',
        }}
      >
        <Box
          sx={{
            // height: '10px',
            width: '40%',
            maxWidth: '300px',
            backgroundColor: 'green',
          }}
        >
          <form onSubmit={handleOnSubmit}>
            <Input name='nameTodo' value={todoValue} onChange={handleOnChange} />
          </form>
        </Box>
        <button onClick={handleClick}>back</button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          // justifyContent: 'center',
          backgroundColor: 'blue',
          height: 'auto',
          // overflowY: 'auto',
          maxHeight: '100%',
        }}
      >
        <Box
          sx={{
            // width: '60%',
            // width: { xs: '300px', sm: '400px' },
            minWidth: { xs: '100%', sm: '90%', md: '80%', lg: '70%' },
            maxWidth: '600px',
            // height: 'auto',
            backgroundColor: 'grey',
            overflowY: 'scroll',
          }}
        >
          {state.todos.map((todo) => (
            <TodoComponent key={todo.id} data={{ todo, dispatch }} />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          height: '50px',
          width: '100%',
          backgroundColor: 'red',
          position: 'fixed',
          bottom: 0,
          borderRadius: '0px 0px 20px 20px',
        }}
      ></Box> */}

      <Grid container direction={'column'} sx={{ height: '60vh' }}>
        <Grid
          item
          // xs={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '70px',
            // backgroundColor: 'pink',
          }}
        >
          <form onSubmit={handleOnSubmit}>
            <Input
              name='nameTodo'
              value={todoValue}
              onChange={handleOnChange}
              placeholder='Agrega aquí una tarea...'
              inputProps={{
                style: { color: 'white', backgroundColor: colors.grey[500] },
              }}
            />
          </form>
          <Box
            onClick={() => handleClickLogout()}
            sx={{
              display: 'flex',
              position: 'absolute',
              right: 10,
              top: 20,
              color: 'black',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            <LogoutIcon />
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            // backgroundColor: 'blue',
            // height: 'auto',
            // flexGrow: 1,
            // height: 'calc(100% - 120px)',
            height: { xs: 'calc(100% - 220px)', sm: 'calc(100% - 120px)' },
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              // width: '60%',
              // width: { xs: '300px', sm: '400px' },
              minWidth: { xs: '100%', sm: '90%', md: '80%', lg: '70%' },
              maxWidth: '600px',
              // height: 'auto',
              // backgroundColor: 'grey',
              // overflowY: 'scroll',
            }}
          >
            {state.completedTodos
              ? state.todos
                  .filter((todo) => todo.finished === true)
                  .map((todo) => <TodoComponent key={todo.id} data={{ todo, dispatch }} />)
              : state.todos.map((todo) => (
                  <TodoComponent key={todo.id} data={{ todo, dispatch }} />
                ))}
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            height: { xs: '150px', sm: '50px' },
            width: '100%',
            // backgroundColor: 'red',
            position: 'fixed',
            bottom: 0,
            borderRadius: '0px 0px 20px 20px',
            borderTop: '1px solid black',
          }}
        >
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: { xs: 1, sm: 1, md: 2, lg: 4 },
            }}
          >
            <Typography sx={{ color: 'black' }}>
              Item count:
              {state.completedTodos
                ? ` ${state.todos.filter((todo) => todo.finished === true).length}`
                : ` ${state.todos.length}`}
            </Typography>
            {bottomButtons.map((button) => (
              <button key={button.id} onClick={() => handleClickBottomButtons(button.id)}>
                {button.label}
              </button>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* <Grid
        container
        direction='column'
        spacing={2}
        style={{ height: '700px', border: '1px solid black' }}
      >
        <Grid item>
          <div style={{ backgroundColor: 'red', height: '100px' }}>Contenido 1</div>
        </Grid>

        <Grid item style={{ height: 'calc(50% - 100px)', overflow: 'auto' }}>
          <div style={{ backgroundColor: 'blue', minHeight: '50px' }}>
            Lorem ipsum dolor sit amerem ipsum dolor sit amerem ipsum dolor sit amerem ipsum dolor
          </div>
        </Grid>
        
        <Grid item>
          <div style={{ backgroundColor: 'green', height: '100px' }}>Contenido 3</div>
        </Grid>
      </Grid> */}
    </>
  );
};

export default Todos;
