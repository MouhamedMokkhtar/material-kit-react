import { useState } from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import BillModal from '../bill/bill-modal';

const formatDate = (date) =>
  `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;

// ----------------------------------------------------------------------

export default function UserTableRow({
  reference,
  clientName,
  cin,
  amount,
  matricule,
  codeClient,
  numeroContract,
  status,
  selected,
  handleClick,
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const statusData = {
    Disponible: 'success',
    Indisponible: 'warning',

  };
  console.log('status', status);

  return (
    <>
      <TableRow  >
        <TableCell>{reference}</TableCell>
        <TableCell>{clientName}</TableCell>
        <TableCell>{cin}</TableCell>
        <TableCell>{amount}</TableCell>
        <TableCell>{matricule}</TableCell>
        <TableCell>{codeClient}</TableCell> <TableCell>{numeroContract}</TableCell>{' '}
        <TableCell>
          
       <Label color={statusData[status]}>{status}</Label></TableCell>
        {/* <TableCell>
          <Label color={statusData[status]}>{status}</Label>
        </TableCell> */}
      </TableRow>

     
       
    </>
  );
}
