import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';


import Scrollbar from 'src/components/scrollbar';

import { Toolbar } from '@mui/material';

import PaymentTableHead from './payment-table-head';
import PaymentTableRow from './payment-table-row';
import PaymentModal from './payment-modal';

const PaymentMethodsView = () => {
  const [accounts, setAccounts] = useState([]);
  const [open,setOpen] = useState(false)

  const onAddAccount = () => {
    // setAccounts((prev) => [
    //   ...prev,
    //   {
    //     banque: 'Banque',
    //     RIB: 'RIB',
    //     compteActive: true,
    //   },
    // ]);
    setOpen(true)
  };

  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h3">Payments Methods</Typography>
      </Stack>

      <Card>
        <Toolbar
          sx={{
            height: 96,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button variant="contained" color="inherit" sx={{ ml: 'auto' }} onClick={onAddAccount}>
            Add an account
          </Button>
        </Toolbar>

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ width: '100%' }}>
              <PaymentTableHead
                headLabel={[
                  { id: 'banque', label: 'Banque' },
                  { id: 'RIB', label: 'RIB' },
                  { id: 'compte_active', label: 'Compte active' },
                ]}
              />
              <TableBody>
                {accounts.map((row, index) => (
                  <PaymentTableRow
                    key={index}
                    banque={row.banque}
                    RIB={row.RIB}
                    compteActive={row.compteActive}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>
      </Card>
      <PaymentModal
      open={open}
      handleClose={()=>setOpen(false)}
      handleAdd={setAccounts}
      />
    </Container>
  );
};

export default PaymentMethodsView;
