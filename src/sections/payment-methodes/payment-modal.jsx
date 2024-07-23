import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  Modal,
  Stack,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';

const PaymentModal = ({ open, handleClose, handleAdd }) => {
  const [banque, setBanque] = useState('');
  const [rib, setRib] = useState('');
  const [activeAccount, setActiveAccount] = useState(false);
  const handleBanqueChange = (event) => {
    setBanque(event.target.value);
  };
  const handleRibChange = (event) => {
    setRib(event.target.value);
  };

  const handleActiveAccountChange = (event) => {
    setActiveAccount(event.target.checked);
  };

  const onClose = () => {
    setBanque("")
    setRib('')
    setActiveAccount(false)
    handleClose();
  };

  const onHandleAdd = () => {
    if(!banque || !rib ){
      return;
    }
     handleAdd((prev) => [
      ...prev,
      {
        banque,
        RIB: rib,
        compteActive: activeAccount,
      },
    ]);
    onClose();
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    p: 4,
    display: 'flex',
    width:450,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card sx={style}>
        <CardContent sx={{width:"100%"}}>
          <Stack spacing={3}>
              <TextField
                name="banque"
                label="Banque"
                value={banque}
                onChange={handleBanqueChange}
                //   error={Boolean(localError)}
                //   helperText={localError ? 'Username and Password are required' : ''}
              />

              <TextField
                name="rib"
                label="Rib"
                value={rib}
                onChange={handleRibChange}
                //   error={Boolean(localError)}
                //   helperText={localError ? 'Username and Password are required' : ''}
              />
              <FormControlLabel control={<Checkbox 
              value={activeAccount}
              onChange={handleActiveAccountChange}
                
              />} label="Compte Activé" />
          </Stack>
        </CardContent>
        <CardActions>
          <Button variant="outlined" onClick={onClose} sx={{px:3, py:1}}>
            Close
          </Button>
          <Button variant="contained" onClick={onHandleAdd} sx={{px:3, py:1}}>
            Add
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

export default PaymentModal;
