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
import { FormControl, InputLabel, MenuItem, Select, Snackbar } from '@mui/material';
import { faker } from '@faker-js/faker';
import { set } from 'lodash';

// ----------------------------------------------------------------------

const FSP_MOCKS = [
  'ATTIJARI REAL TIME',
  'ZITOUNA REAL TIME',
  'BNA REAL TIME',
  'WAFA REAL TIME',
  'BIAT REAL TIME',
];

export default function TokenView() {
  const theme = useTheme();

  const [selectedSolution, setSelectedSolution] = useState('');
  const [generatedToken, setGeneratedToken] = useState('');
  const [copy, setCopy] = useState(false);

  const handleChange = (event) => {
    setSelectedSolution(event.target.value);
  };

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setGeneratedToken(faker.string.nanoid(24));
    }, 1000);
  };

  const renderForm = (
    <>
      <Stack spacing={3}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Fsp Solution</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedSolution}
            label="Fsp Solution"
            onChange={handleChange}
          >
            {FSP_MOCKS.map((text) => (
              <MenuItem key={text} value={text}>
                {text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>

      <LoadingButton
        sx={{ mt: 5 }}
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        loading={loading}
        onClick={handleClick}
        disabled={!selectedSolution}
      >
        Generate Key
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
          <Typography variant="h4" sx={{ mb: 5 }}>
            Generate Key
          </Typography>
          {renderForm}

         {generatedToken && <Box
            sx={{
              mt:3,
              py: 2,
              px: 2,
              bgcolor: '#f5f5f5',
              textAlign: 'center',
              borderRadius: 2,
            }}
          >
            {/* <ContentCopyIcon/> */}
            <span style={{fontSize:"16px"}}>{generatedToken}</span>
            <span style={{float:"right", cursor:"pointer"}} onClick={()=>{setCopy(true)}}>
            <Iconify icon="eva:copy-outline" width={24} color="primary"  />
            </span>
          </Box>}
        </Card>
      </Stack>
      <Snackbar
        open={copy}
        autoHideDuration={3000}
        onClose={()=>{setCopy(false)}}
        message={`Key Copied : ${generatedToken}`}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
    </Box>
  );
}
