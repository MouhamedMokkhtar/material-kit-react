import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import Iconify from 'src/components/iconify';
import ActivitiesFilter from './activities-filter';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { min } from 'lodash';


// ----------------------------------------------------------------------

export default function UserTableToolbar({ numSelected, filterName, onFilterName, handleRandomizeData }) {
  const [solution, setSolution] = useState('');
  const [facturier, setFacturier] = useState('');
  const [product, setProduct] = useState('');
  const handleSolutionChange = (event) => {
    setSolution(event.target.value);
  };

  const handleFacturierChange = (event) => {
    setFacturier(event.target.value);
  };

  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  return (
    <Toolbar
      sx={{
        height: 96,
        display: 'flex',
        justifyContent: 'space-between',
        p: (theme) => theme.spacing(0, 1, 0, 3),
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >
      {/*      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <OutlinedInput
          value={filterName}
          onChange={onFilterName}
          placeholder="Search bill..."
          startAdornment={
            <InputAdornment position="start">
              <Iconify
                icon="eva:search-fill"
                sx={{ color: 'text.disabled', width: 20, height: 20 }}
              />
            </InputAdornment>
          }
        />
      )} */}

      <Box sx={{ minWidth: 120 }}>
        <Stack direction="row" spacing={2}>
          <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
              <InputLabel id="solution-select-label">FSP Solution</InputLabel>
              <Select
                labelId="solution-select-label"
                id="solution-select"
                value={solution}
                label="FSP Solution"
                onChange={handleSolutionChange}
              >
                <MenuItem value="attijari-real-time">ATTIJARI REAL TIME</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
              <InputLabel id="facturier-select-label">Facturier</InputLabel>
              <Select
                labelId="facturier-select-label"
                id="facturier-select"
                value={facturier}
                label="Facturier"
                onChange={handleFacturierChange}
              >
                <MenuItem value="steg">STEG</MenuItem>
                <MenuItem value="topnet">TOPNET</MenuItem>
                <MenuItem value="orange">ORANGE</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
              <InputLabel id="product-select-label">Product</InputLabel>
              <Select
                labelId="product-select-label"
                id="product-select"
                value={product}
                label="Facturier"
                onChange={handleProductChange}
              >
                <MenuItem value="steg">INVOICE</MenuItem>
                <MenuItem value="topnet">SUBSCRIPTION</MenuItem>
                <MenuItem value="orange">RECHARGE</MenuItem>
              </Select>
            </FormControl>
          </Box>

        </Stack>
      </Box>


      <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <Button variant="contained" color="inherit" onClick={handleRandomizeData}>
          Régéneration
        </Button>
        {/* <ActivitiesFilter/> */}
      </Box>



      {/* {numSelected > 0 && (
        <Tooltip title="Delete">
          <IconButton>
            <Iconify icon="eva:trash-2-fill" />
          </IconButton>
        </Tooltip>
      ) 
      // : (
      //   <Tooltip title="Filter list">
      //     <IconButton>
      //       <Iconify icon="ic:round-filter-list" />
      //     </IconButton>
      //   </Tooltip>
      // )
      } */}
    </Toolbar>
  );
}

UserTableToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};
