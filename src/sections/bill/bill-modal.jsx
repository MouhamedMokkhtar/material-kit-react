import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Modal, Typography } from '@mui/material';
import React from 'react';
import { billsMock } from './bill-mock';
import { faker } from '@faker-js/faker';

const BillModal = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
  };

  const selectedData = billsMock[faker.number.int({ min: 0, max: billsMock?.length - 1 })];


  return (
    <>
      <Button onClick={handleOpen}>{children}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
           
          <CardContent>
          <Typography variant="h6" component="h2" sx={{textAlign: 'center', mt: "-20px", mb: "30px"}}>
                Détails
            </Typography>
          {Object.entries(selectedData).map(([key, value]) => (
          <Row key={key} objKey={key} value={value} />
        ))}
          </CardContent>
          <CardActions>
        <Button variant='outlined' onClick={handleClose}>Close</Button>
      </CardActions>
        </Card>
      </Modal>
    </>
  );
};

const Row = ({ objKey, value }) => {
  return (
    <Grid container spacing={6} sx={{mb:1}}>
      <Grid item xs={6}>
        <Typography variant="subtitle2">{objKey}</Typography>
      </Grid>
      <Grid item xs={6}>
      <Typography variant="body1">{value}</Typography>
      </Grid>
    </Grid>
  );
};

export default BillModal;
