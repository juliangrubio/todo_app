import { useState } from 'react';
import { Box } from '@mui/material';

import imgContainer from '../../assets/bg.jpg';
import { LoginRegisterImg } from '../../components/common';
import LoginForm from '../../components/login/LoginForm';
import RegisterForm from '../../components/register/RegisterForm';
import { TodosForm } from '../../components/todos';
import { pickScreen } from '../../interfaces/todo.interface';

const AppLayout = () => {
  const [window, setWindow] = useState<pickScreen>(pickScreen.login);
  // const setWindowMemoizado = useMemo(() => setWindow, [setWindow]);
  return (
    <>
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          backgroundImage: `url(${imgContainer})`,
          perspective: '800%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* TODOS SCREEN */}
        <Box
          sx={{
            // minHeight: { xs: "350px", sm: "400px" },
            width: '60vw',
            // backgroundColor: 'white',
            background: 'radial-gradient(at bottom, #f2f2f2, #9A9A9A 90%) no-repeat',
            // display: "grid",
            // gridTemplateColumns: '50% 50%',
            // gridTemplateColumns: {
            //   xs: "100% 0%",
            //   sm: "100% 0%",
            //   md: "50% 50%",
            // },
            // gridTemplateRows: '1fr',
            // gridTemplateRows: {xs: '1fr 0.5fr', sm: '1fr 0.5fr', md: 'auto 1fr'},
            // columnGap: "0px",
            // rowGap: "0px",
            // overflow: 'hidden',
            position: 'absolute',
            borderRadius: '20px',
            transformStyle: 'preserve-3d',
            transition: 'transform 2s ease, width 2s ease, opacity 2s ease, height 2s ease',
            ...(window === 'todos'
              ? {
                  transform: 'rotateX(0deg)',
                  opacity: 1,
                  height: '60vh',
                }
              : {
                  transform: 'rotateX(45deg) translateZ(0vw) translateY(-45vh)',
                  opacity: 0,
                  height: '0vh',
                }),
          }}
        >
          <TodosForm setWindow={setWindow} />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* LOGIN SCREEN */}
          <Box
            sx={{
              position: 'absolute',
              height: '60vh',
              minHeight: { xs: '350px', sm: '400px' },
              backgroundImage: 'linear-gradient(to top, #402438 0%, #535378 50%, #0a1933 100%)',
              display: 'grid',
              gridTemplateColumns: {
                xs: '100% 0%',
                sm: '100% 0%',
                md: '50% 50%',
              },
              columnGap: '0px',
              rowGap: '0px',
              borderRadius: '20px',
              transformStyle: 'preserve-3d',
              transition: 'transform 2s ease, width 2s ease, opacity 1s ease, height 2s ease',
              ...(window === 'login'
                ? {
                    transform: 'rotateY(0deg)',
                    opacity: 1,
                    width: '60%',
                  }
                : window === 'todos'
                  ? {
                      transform: 'rotateX(-90deg) translateZ(0vw) translateY(70vh)',
                      opacity: 0,
                      width: '60%',
                    }
                  : {
                      transform: 'rotateY(-90deg) translateZ(0vw) translateX(-90vh)',
                      opacity: 0,
                      width: '0%',
                    }),
            }}
          >
            <LoginForm setWindow={setWindow} />
            <LoginRegisterImg />
          </Box>

          {/* REGISTER SCREEN */}
          <Box
            sx={{
              position: 'absolute',
              height: '60vh',
              minHeight: { xs: '350px', sm: '400px' },
              backgroundImage: 'linear-gradient(to top, #402438 0%, #535378 50%, #0a1933 100%)',
              display: 'grid',
              gridTemplateColumns: {
                xs: '0% 100%',
                sm: '0% 100%',
                md: '50% 50%',
              },
              columnGap: '0px',
              rowGap: '0px',
              borderRadius: '20px',
              transformStyle: 'preserve-3d',
              transition: 'transform 2s ease, width 2s ease, opacity 1s ease, height 2s ease',
              ...(window === 'register'
                ? {
                    transform: 'rotateY(0deg)',
                    opacity: 1,
                    width: '60%',
                  }
                : // {
                  //     transform: "rotateY(90deg) translateZ(0vw) translateX(90vh)",
                  //     opacity: 0,
                  //     width: "0%",
                  //   }
                  window === 'todos'
                  ? {
                      transform: 'rotateX(-90deg) translateZ(0vw) translateY(70vh)',
                      opacity: 0,
                      width: '60%',
                    }
                  : // {
                    //   transform: "rotateY(0deg)",
                    //   opacity: 1,
                    //   width: "60%",
                    //   }
                    {
                      transform: 'rotateY(90deg) translateZ(0vw) translateX(90vh)',
                      opacity: 0,
                      width: '0%',
                    }),
            }}
          >
            <LoginRegisterImg />
            <RegisterForm setWindow={setWindow} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AppLayout;
