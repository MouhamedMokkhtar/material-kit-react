import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import ModalParamsRow from './modal-params-row';
import CombLookupAccordion from './comb-lookup-accordion';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: 800,
};

const lookupParamsOptions = {
  reference: 'Reference',
  client_code: 'Client Code',
  contract_number: 'Contract Number',
  biller_mf: 'Biller MF',
  biller_rs: 'Biller RS',
  client_mf: 'Client MF',
  client_cin: 'Client CIN',
  client_passport: 'Client Passport',
  client_cs: 'Client CS',
  client_phone: 'Client Phone',
  client_email: 'Client Email',
  client_name: 'Client Name',
};

const AddProductModal = ({ open, handleClose }) => {
  const [type, setType] = React.useState('');
  const [lookupParams, setLookupParams] = React.useState('');
  const [regex, setRegex] = React.useState('');
  const [freeEntry, setFreeEntry] = React.useState('');
  const [lookupParamsArray, setLookupParamsArray] = React.useState([]);
  const [accordionsCount, setAccordionsCount] = React.useState([1]);
  const [freeEntryArray, setFreeEntryArray] = React.useState([]);
  //const []

  const handleChange = (event) => {
    setType(event.target.value);
  };
  const handleAddLookupParams = (event) => {
    setLookupParams(event.target.value);
  };
  const addLookUpParams = () => {
    setLookupParamsArray([...lookupParamsArray, `${lookupParamsOptions[lookupParams]} : ${regex}`]);
    setLookupParams('');
    setRegex('');
  };

  const addFreeEntry = () => {
    setFreeEntryArray([...freeEntryArray, freeEntry]);
    setFreeEntry('');
  };

  const handleFreeEntryDelete = (index) => {
    setFreeEntryArray(freeEntryArray.filter((_, i) => i !== index));
  };

  const handleLookupDelete = (index) => {
    setLookupParamsArray(lookupParamsArray.filter((_, i) => i !== index));
  };

  /*9odem el lookup params dropdown famma input w 9odemlha button trash w t7at el trash fel next line add button

  ellooklup params feha drop down w 9odemha input w add w trash 9odem comibnision tetna7a amma lazem min famma 1 comibinsion

  accept amount label w 9odemha plus tnajem tzis akther men input, tetsajel w tatla3 ta7et'ha f lista w 9odemha delete button

  */
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card sx={style}>
        <CardContent sx={{ width: '100%' }}>
          <Typography
            variant="h6"
            component="h2"
            sx={{ textAlign: 'center', mt: '-20px', mb: '30px' }}
          >
            New Product
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <TextField label="Product ID" id="standard-start-adornment" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  label="Type"
                  onChange={handleChange}
                >
                  <MenuItem value={'invoice'}>Invoice</MenuItem>
                  <MenuItem value={'subscription'}>Subscription</MenuItem>
                  <MenuItem value={'service'}>Service</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Reserve delay"
                id="standard-start-adornment"
                helperText="helper text here !"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Lookup params</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={lookupParams}
                  label="Lookup params"
                  onChange={handleAddLookupParams}
                >
                  {Object.keys(lookupParamsOptions).map((option) => (
                    <MenuItem key={option} value={option}>
                      {lookupParamsOptions[option]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={5}>
              <TextField
                label="Regex"
                id="standard-start-adornment"
                helperText="regular expression"
                fullWidth
                value={regex}
                onChange={(event) => {
                  setRegex(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton
                color="primary"
                aria-label="add to a new lookup params"
                onClick={addLookUpParams}
                size="large"
                sx={{ marginBottom: '25px' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m5 9h-4V7h-2v4H7v2h4v4h2v-4h4z"
                  ></path>
                </svg>
              </IconButton>
            </Grid>
            {lookupParamsArray.map((param, index) => (
              <ModalParamsRow
                key={index}
                param={param}
                isDeletable
                handleDelete={() => handleLookupDelete(index)}
              />
            ))}

            {accordionsCount.map((index) => (
              <>
                <Grid item xs={11}>
                  <CombLookupAccordion index={index}>
                    {lookupParamsArray.map((param, index) => (
                      <ModalParamsRow
                        key={index}
                        param={param}
                        handleDelete={() => handleLookupDelete(index)}
                      />
                    ))}
                  </CombLookupAccordion>
                </Grid>
                <Grid item xs={1}>
                  <IconButton
                    color="error"
                    aria-label="delete"
                    onClick={() => {
                      if (accordionsCount.length <= 1) return;
                      setAccordionsCount((cs) => cs.filter((i) => i !== index));
                    }}
                    sx={{ marginBottom: '25px' }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0"
                      ></path>
                    </svg>
                  </IconButton>
                </Grid>
              </>
            ))}

            <Grid item xs={12} >
              <Button
                sx={{ float: 'right' }}
                variant="contained"
                onClick={() => setAccordionsCount((cs) => [...cs, cs.length + 1])}
              >
                Add Combination
              </Button>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                value="start"
                control={<Switch color="primary" />}
                label="Free Entry"
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                value="start"
                control={<Switch color="primary" />}
                label="is Available"
                labelPlacement="start"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Free Entry"
                id="standard-start-adornment"
                fullWidth
                value={freeEntry}
                onChange={(event) => {
                  setFreeEntry(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <IconButton
                color="primary"
                aria-label="add to a new lookup params"
                onClick={addFreeEntry}
                size="large"
                sx={{ marginBottom: '25px' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m5 9h-4V7h-2v4H7v2h4v4h2v-4h4z"
                  ></path>
                </svg>
              </IconButton>
            </Grid>
            {freeEntryArray.map((param, index) => (
              <ModalParamsRow
                key={index}
                param={param}
                isDeletable
                handleDelete={() => handleFreeEntryDelete(index)}
              />
            ))}
          </Grid>
        </CardContent>
        <CardActions>
        <Button variant="contained" onClick={handleClose}>
            Add Product
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            Close
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

export default AddProductModal;
