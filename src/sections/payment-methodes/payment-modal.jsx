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

const PaymentModal = ({ open, handleClose, handleAdd ,selectedMethode }) => {
  console.log('selectedMethode', selectedMethode);

  const [rib, setRib] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [publicKey, setPublicKey] = useState('');
  const [switchId, setSwitchId] = useState('');
  const [trackingId, setTrackingId] = useState('');

  const [smtName, setSmtName] = useState('');
  const [smtPassword, setSmtPassword] = useState('');

  const [activeAccount, setActiveAccount] = useState(false);


  const handleRibChange = (event) => {
    setRib(event.target.value);
  };

  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handlePublicKeyChange = (e) => setPublicKey(e.target.value);
  const handleSwitchIdChange = (e) => setSwitchId(e.target.value);
  const handleTrackingIdChange = (e) => setTrackingId(e.target.value);

  const handleSmtNameChange = (e) => setSmtName(e.target.value);
  const handleSmtPasswordChange = (e) => setSmtPassword(e.target.value);

  const handleActiveAccountChange = (event) => {
    setActiveAccount(event.target.checked);
  };

  const onClose = () => {
    setRib('')
    setPhoneNumber('')
    setPublicKey('')
    setSwitchId('')
    setTrackingId('')
    setSmtName('')
    setSmtPassword('')
    setActiveAccount(false)
    handleClose();
  };

  const onHandleAdd = () => {
    if (selectedMethode === 0) {
      if (!rib) return;
      handleAdd({
        rib,
        compteActive: activeAccount,
      });
    } else if (selectedMethode === 1) {
      if (!phoneNumber || !publicKey || !switchId || !trackingId) return;
      handleAdd({
        phoneNumber,
        publicKey,
        switchId,
        trackingId,
        compteActive: activeAccount,
      });
    } else if (selectedMethode === 2) {
      if (!smtName || !smtPassword) return;
      handleAdd({
        smtName,
        smtPassword,
        compteActive: activeAccount,
      });
    }
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

          {selectedMethode === 0 && (
            <>
              <TextField
                name="rib"
                label="Rib"
                value={rib}
                onChange={handleRibChange}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={activeAccount}
                    onChange={handleActiveAccountChange}
                  />
                }
                label="Compte Activé"
              />
            </>
          )}

          {selectedMethode === 1 && (
            <>
              <TextField
                name="phoneNumber"
                label="Phone Number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <TextField
                name="public_key"
                label="Public Key"
                value={publicKey}
                onChange={handlePublicKeyChange}
              />
              <TextField
                name="switch_id"
                label="Switch ID"
                value={switchId}
                onChange={handleSwitchIdChange}
              />
              <TextField
                name="tracking_id"
                label="Tracking ID"
                value={trackingId}
                onChange={handleTrackingIdChange}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={activeAccount}
                    onChange={handleActiveAccountChange}
                  />
                }
                label="Compte Activé"
              />
            </>
          )}

          {selectedMethode === 2 && (
            <>
              <TextField
                name="Smt Name"
                label="Smt Name"
                value={smtName}
                onChange={handleSmtNameChange}
              />
              <TextField
                name="Smt Password"
                label="Smt Password"
                value={smtPassword}
                onChange={handleSmtPasswordChange}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={activeAccount}
                    onChange={handleActiveAccountChange}
                  />
                }
                label="Compte Activé"
              />
            </>
          )}
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
