import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import { Switch, TableCell, TableRow } from '@mui/material'


import Scrollbar from 'src/components/scrollbar';

import { Toolbar } from '@mui/material';

import PaymentTableHead from './payment-table-head';
import PaymentTableRow from './payment-table-row';
import PaymentModal from './payment-modal';

const PaymentMethodsView = () => {
  const [byCardAccounts, setByCardAccounts] = useState([]);
  const [transfertAccounts, setTransfertAccounts] = useState([]);
  const [walletAccounts, setWalletAccounts] = useState([]);
  const [open,setOpen] = useState(false)
  const [selectedMethode, setSelectedMethode] = useState(0);
  const [accounts, setAccounts] = useState({
    0: [], // For transfer accounts
    1: [], // For wallet accounts
    2: [], // For byCard accounts
  });

  const onAddAccount = () => {

    setOpen(true)
  };

/*   const handleAdd = (newAccounts) => {
    if (selectedMethode === 0) {
      setTransfertAccounts(newAccounts);
    } else if (selectedMethode === 1) {
      setWalletAccounts(newAccounts);
    }else if (selectedMethode === 2) {
      setByCardAccounts(newAccounts);
    }
  }; */

  const handleAdd = (newAccount) => {
    setAccounts((prev) => ({
      ...prev,
      [selectedMethode]: [...prev[selectedMethode], newAccount],
    }));
  };
  
  
  
  

  const handleClick = (index) => {
    setSelectedMethode(index);
  };

  const getTableHeaders = () => {
    if (selectedMethode === 0) {
      return [
        { id: 'rib', label: 'Rib' },
        { id: 'status', label: 'Status' },
      ];
    } else if (selectedMethode === 1) {
      return [
        { id: 'phoneNumber', label: 'Phone Number' },
        { id: 'publicKey', label: 'Public Key' },
        { id: 'switchId', label: 'Switch ID' },
        { id: 'trackingId', label: 'Tracking ID' },
        { id: 'status', label: 'Status' },
      ];
    }else if(selectedMethode === 2){
      return [
        { id: 'smtName', label: 'Smt Name' },
        { id: 'smtPassword', label: 'Smt Password' },
        { id: 'status', label: 'Status' },
      ];
    }
    return [];
  };

  const renderTableRows = () => {
    const rows = accounts[selectedMethode] || [];
  
    return rows.map((row, index) => (
      <TableRow key={index}>
        {selectedMethode === 0 && (
          <>
            <TableCell align="center">{row.rib}</TableCell>
            <TableCell align="center">{row.compteActive ? 'Active' : 'Inactive'}</TableCell>
          </>
        )}
        {selectedMethode === 1 && (
          <>
            <TableCell align="center">{row.phoneNumber}</TableCell>
            <TableCell align="center">{row.publicKey}</TableCell>
            <TableCell align="center">{row.switchId}</TableCell>
            <TableCell align="center">{row.trackingId}</TableCell>
            <TableCell align="center">{row.compteActive ? 'Active' : 'Inactive'}</TableCell>
          </>
        )}
        {selectedMethode === 2 && (
          <>
            <TableCell align="center">{row.smtName}</TableCell>
            <TableCell align="center">{row.smtPassword}</TableCell>
            <TableCell align="center">{row.compteActive ? 'Active' : 'Inactive'}</TableCell>
          </>
        )}
      </TableRow>
    ));
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
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          {['Transfer', 'Wallet', 'By Card'].map((label, index) => (
         <Button
          key={label}
          onClick={() => handleClick(index)}
          sx={{
            px: 8, // Increase horizontal padding
            ...(selectedMethode === index && {
              bgcolor: 'primary.main',
              color: 'white', 
              borderColor: 'primary.main', 
              '&:hover': {
                bgcolor: 'primary.dark', 
                borderColor: 'primary.dark', 
              },
            }),
          }}
        >
          {label}
        </Button>
      ))}
        </ButtonGroup>

          <Button variant="contained" color="inherit" sx={{ ml: 'auto' }} onClick={onAddAccount}>
            Add an account
          </Button>
        </Toolbar>

  


        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ width: '100%' }}>
            <PaymentTableHead headLabel={getTableHeaders()} />
            <TableBody>
            {renderTableRows()}
          </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>
      </Card>
      <PaymentModal
      open={open}
      handleClose={()=>setOpen(false)}
      handleAdd={handleAdd}
      selectedMethode={selectedMethode}
      />
    </Container>
  );
};

export default PaymentMethodsView;
