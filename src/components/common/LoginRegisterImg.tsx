import { Box } from '@mui/material'
import imgLogin from '../../assets/dibujo.svg'

const LoginRegisterImg = () => {
  return (
    <Box sx={{ overflow: 'hidden' }}>
        <img style={{
            width: '100%', 
            height: '100%', 
            borderRadius: '20px',
            objectFit: 'cover',
        }} src={imgLogin} alt="imglogin" />
  </Box>
  )
}

export default LoginRegisterImg