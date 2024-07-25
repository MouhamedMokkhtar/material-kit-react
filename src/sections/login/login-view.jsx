import { useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import { useDispatch, useSelector } from 'react-redux';
import { authUser } from 'src/store/Auth/auth.action';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import { Navigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();

  const router = useRouter();
  const dispatch = useDispatch();


  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [localError, setLocalError] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    if (!username?.trim()?.length || !password?.trim().length) {
      setLocalError('Email and Password are required');
      return;
    }
    console.log('redirecting');
    navigate('/', { replace: true });
    // setLocalError('');
    // const userBody = {
    //   username: username.trim(),
    //   password: password.trim(),
    // };
    // setLoading(true);

    // dispatch(authUser(userBody))
    // .then(() => {
    //   setLoading(false);
      
    //   router.push('/');
    //   console.log('Login success');
    //   //<Navigate to="/dashboard" />;  
    // })
    // .catch((err) => {
    //   console.error('Login failed:', err);
    //   setLocalError('Email or Password are wrong');
    // });
};

  

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField  value={username}
          onChange={handleUsernameChange}
          error={Boolean(localError)}
          helperText={localError ? 'Username and Password are required' : ''}
          />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          error={Boolean(localError)}
          helperText={localError ? 'Username and Password are required' : ''}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      {localError && (
        <Alert severity="error" sx={{ mt: 2 }}>
          <AlertTitle>Error</AlertTitle>
          {localError}
        </Alert>
      )}

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        loading={loading}
        onClick={handleClick}
      >
        Login
      </LoadingButton>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />
      <Grid container spacing={2} sx={{ height: 1 }}>
  <Grid item xs={6} >
  <Stack alignItems="center" justifyContent="center" sx={{ height: 1}}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Sign in to Flouci<span style={{color:"#5949F1"}}>BillPay</span></Typography>

  {        <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            
            <Link variant="subtitle2" sx={{ ml: 0.5 }}>
            
            </Link>
          </Typography>}

        {/*   <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:google-fill" color="#DF3E30" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:facebook-fill" color="#1877F2" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
            </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              OR
            </Typography>
          </Divider> */}

          {renderForm}
        </Card>
      </Stack>
  </Grid>
  <Grid item xs={6}>
    <Box sx={{height:1, backgroundColor:"white", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <img src="/assets/background/overlay_5.svg" alt="login-background" style={{width:"80%"}}/>

    </Box>
  </Grid>
  
</Grid>

     
    </Box>
  );
}
