import { Grid } from '@mui/material';
import Input from '../../components/common/Input';
import imgToDO_app from '../../assets/ToDO_app.svg';

import CustomButton from '../../components/common/CustomButton';
import { useForm } from '../../hooks/useForm';
import { Dispatch, SetStateAction } from 'react';
import { pickScreen } from '../../interfaces/todo.interface';

interface Props {
  // isLoginBox: boolean;
  // setWindow: Dispatch<SetStateAction<string>>;
  setWindow: Dispatch<SetStateAction<pickScreen>>;
}

const LoginForm: React.FC<Props> = ({ setWindow }) => {
  const [values, handleInputChange] = useForm({
    email: 'juliangrubio@gmail.com',
    password: 'abc123',
  });

  const handleSignUp: React.MouseEventHandler<HTMLButtonElement> = () => {
    setWindow(pickScreen.register);
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = () => {
    setWindow(pickScreen.todos);
    // console.log('submit from login')
  };

  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      gap='0'
      // maxHeight={'80%'}
      sx={
        {
          // backgroundColor: 'red',
          // height: '100%',
          // overflow: 'hidden'
        }
      }
    >
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
        {/* <Grid item flex={1} justifyContent={"center"} alignItems={'center'} flexDirection={"column"}> */}
        <Input
          name='email'
          type='email'
          value={values.email}
          label='Email'
          onChange={handleInputChange}
          // error={emailError}
          sx={{
            mt: { xs: 1, md: 3 },
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
            mt: { xs: 2, md: 3 },
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
          mt: { xs: 1, sm: 3 },
        }}
      >
        <CustomButton
          name='Sign In'
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
          left: 25,
          bottom: 20,
        }}
      >
        <CustomButton name={'Sign Up >'} onClick={handleSignUp} />
      </Grid>
    </Grid>
  );
};

export default LoginForm;
