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
import { Switch } from '@mui/material';

const formatDate = (date) =>
  `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;

// ----------------------------------------------------------------------

export default function ProductTableRow({
  isAvailable,
  selected,
  productId,
  type,
  acceptPromoCode,
  freeEntry,
  reserveDelay,
  handleClick,
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };


  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        {/* <TableCell>
          <Label color={statusData[status]}>{status}</Label>
        </TableCell> */}

        
        <TableCell>
        <Switch defaultChecked={isAvailable} />
         </TableCell>

        <TableCell>{productId}</TableCell>

        <TableCell>{type}</TableCell>

        <TableCell>
        <Switch defaultChecked={acceptPromoCode} /></TableCell>

        <TableCell>
        <Switch defaultChecked={freeEntry} /></TableCell>

        <TableCell>{reserveDelay}</TableCell>
       
        {/* <TableCell>{formatDate(new Date(date))}</TableCell> */}

        {/* <TableCell>{solution}</TableCell> */}
{/* 
         <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={providerName} src={providerAvatar} />
            <Typography variant="subtitle2" noWrap>
              {providerName}
            </Typography>
          </Stack>
        </TableCell> */}
{/*
        <TableCell>{company}</TableCell>

        <TableCell>{role}</TableCell>

        <TableCell align="center">{isVerified ? 'Yes' : 'No'}</TableCell>

*/}

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell> 
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 180 },
        }}
      >
        {/* <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem> */}
        <MenuItem onClick={handleCloseMenu}>
          <b>Actions</b>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          Edit
        </MenuItem>
        <div style={{ borderTop: '1px solid #e0e0e0', margin: '5px 0' }} />
        <MenuItem onClick={handleCloseMenu}>
          View service info
        </MenuItem>
        

        {/* <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem> */}
      </Popover>
    </>
  );
}

ProductTableRow.propTypes = {
  avatarUrl: PropTypes.any,
  company: PropTypes.any,
  handleClick: PropTypes.func,
  isVerified: PropTypes.any,
  name: PropTypes.any,
  role: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string,
};
