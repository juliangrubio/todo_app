import React, { Dispatch, FC, SetStateAction } from 'react';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import { useForm } from '../../hooks/useForm';
import { Grid } from '@mui/material';
import imgToDO_app from '../../assets/ToDO_app.svg';
import { pickScreen } from '../../interfaces/todo.interface';

interface Props {
  setWindow: Dispatch<SetStateAction<pickScreen>>;
}

const RegisterForm: FC<Props> = ({ setWindow }) => {
  const [values, handleInputChange] = useForm({
    name: 'Julian',
    email: 'juliangrubio@gmail.com',
    password: 'abc123',
  });

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = () => {
    setWindow(pickScreen.todos);
  };

  const handleLogin: React.MouseEventHandler<HTMLButtonElement> = () => {
    setWindow(pickScreen.login);
  };

  return (
    <Grid container spacing={0} direction='column' alignItems='center' gap='0'>
      <Grid
        item
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <img
          style={{
            padding: 0,
            maxWidth: '100%',
            // marginTop: '0%'
          }}
          src={imgToDO_app}
          alt='imglogin'
        />
      </Grid>

      <Grid
        item
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Input
          name='name'
          type='text'
          // value={userCredentials.email}
          value={values.name}
          label='Name'
          onChange={handleInputChange}
          // error={emailError}
          sx={{
            mt: { xs: 1, md: 1 },
            width: { xs: '85%', md: '100%' },
          }}
        />
      </Grid>

      <Grid
        item
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {/* <Grid item flex={1} justifyContent={"center"} alignItems={'center'} flexDirection={"column"}> */}
        <Input
          name='email'
          type='email'
          value={values.email}
          label='Email'
          onChange={handleInputChange}
          // error={emailError}
          sx={{
            mt: { xs: 2, md: 2 },
            width: { xs: '85%', md: '100%' },
          }}
        />
      </Grid>

      <Grid
        item
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Input
          name='password'
          type='password'
          value={values.password}
          label='Password'
          onChange={handleInputChange}
          // error={emailError}
          sx={{
            mt: { xs: 2, md: 2 },
            width: { xs: '85%', md: '100%' },
          }}
        />
      </Grid>
      <Grid
        item
        sx={{
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // flexDirection: 'column'
          mt: { xs: 1, sm: 1 },
        }}
      >
        <CustomButton
          name='Save'
          onClick={handleSubmit}
          // sx={{mt:2}}
        />
      </Grid>
      <Grid
        item
        container
        sx={{
          // mt: 3,
          // ml: 3,
          position: 'absolute',
          // left: 70,
          right: 20,
          bottom: 20,
          justifyContent: 'flex-end', // Alinea los elementos al final del eje principal (horizontal)
          alignItems: 'flex-end',
        }}
      >
        <CustomButton name={'< Login'} onClick={handleLogin} />
      </Grid>

      {/* <Input
          name='email'
          type='email'
          value={values.email}
          label='Email'
          onChange={handleInputChange}
          // error={emailError}
          sx={{
            mt: 2, 
            width: {
              xs: '75%',
              md: '90%',
              lg: '100%',
            }}
          }
        />

        <Input
          name='password'
          type='password'
          value={values.password}
          label='Password'
          onChange={handleInputChange}
          sx={{
            mt: 2, 
            width: {
              xs: '75%',
              md: '90%',
              lg: '100%',
            }}
          }
        />

        <CustomButton 
          name='Save' 
          onClick={handleClickSave}
          sx={{mt:2}}
        />
        </Grid>  */}
      {/* <Grid item container sx={{
        mt: 1,
        ml: {xs: 0, md: 3, lg: 5},
      }}>
      <CustomButton 
        name='Back to login screen'
        onClick={handleClickChangeView} 
      />
    </Grid> */}
    </Grid>
  );
};

export default RegisterForm;
