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

// ----------------------------------------------------------------------

export default function ResetPasswordView() {
  const theme = useTheme();

  const router = useRouter();
  const dispatch = useDispatch();

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const [showRepeatedPassword, setShowRepeatedPassword ] = useState(false);
  const [repeatedPassword, setRepeatedPassword] = useState('');

  const [username, setUsername] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [localError, setLocalError] = useState('');

  const handleClick = () => {
    if (!currentPassword?.trim()?.length || !newPassword?.trim().length || !repeatedPassword?.trim().length) {
      setLocalError('inputs are required');
      return;
    }
    setLocalError('');
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },1500)
    // const userBody = {
    //   currentPassword: currentPassword.trim(),
    //   newPassword: newPassword.trim(),
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
    setNewPassword(event.target.value);
  };

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleRepeatedPasswordChange = (event) => {
    setRepeatedPassword(event.target.value);
  };
  const renderForm = (
    <>
      <Stack spacing={3}>
        {/* <TextField  value={username}
          onChange={handleUsernameChange}
          error={Boolean(localError)}
          helperText={localError ? 'Username and Password are required' : ''}
          /> */}

        <TextField
          name="currentPassword"
          label="Current Password"
          type={showCurrentPassword ? 'text' : 'password'}
          value={currentPassword}
          onChange={handleCurrentPasswordChange}
          error={Boolean(localError)}
          helperText={localError ? 'Current Password is required' : ''}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowCurrentPassword(!showCurrentPassword)} edge="end">
                  <Iconify icon={showNewPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          name="newPassword"
          label="NewPassword"
          type={showNewPassword ? 'text' : 'password'}
          value={newPassword}
          onChange={handlePasswordChange}
          error={Boolean(localError)}
          helperText={localError ? 'New Password is required' : ''}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowNewPassword(!showNewPassword)} edge="end">
                  <Iconify icon={showNewPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          name="repeatedPassword"
          label="Repeat NewPassword"
          type={showRepeatedPassword ? 'text' : 'password'}
          value={repeatedPassword}
          onChange={handleRepeatedPasswordChange}
          error={Boolean(localError)}
          helperText={localError ? 'Repeat new Password is required' : ''}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowRepeatedPassword(!showRepeatedPassword)} edge="end">
                  <Iconify icon={showRepeatedPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
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

      {/* <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack> */}

      <LoadingButton
        sx={{mt:5}}
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        loading={loading}
        onClick={handleClick}
      >
        Change Password
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

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4" sx={{mb:5}}>Change Password</Typography>

          {/* <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Don’t have an account?
            <Link variant="subtitle2" sx={{ ml: 0.5 }}>
              Get started
            </Link>
          </Typography> */}

          {/* <Stack direction="row" spacing={2}>
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
    </Box>
  );
}
