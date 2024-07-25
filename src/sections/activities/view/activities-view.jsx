import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

//import { users } from 'src/_mock/user';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';
import { activitiesMocks } from '../mocks/activities-mocks';
import DateRangePicker from 'src/components/date-range-picker';
import { Box } from '@mui/material';
import label from 'src/components/label';

// ----------------------------------------------------------------------

export default function ActivitiesPage({isBillView = false}) {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };



  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = activitiesMocks.map((n) => n.client_name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    //inputData: users,
    inputData: activitiesMocks,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
      <Typography variant="h3">
        {!isBillView ? "Activities" : "Bills"}
      </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <DateRangePicker />
         {/*  <Button variant="contained" color="inherit">
            Export
          </Button> */}

        </Box>

       
      </Stack>

      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={activitiesMocks.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'activity_type', label:isBillView == true ?'Status' : 'Type' },
                  { id: 'reference', label: 'Reference' },
                  { id: 'product_id', label: 'Product ID' },
                  { id: 'creation_date', label: 'Date' },
                  { id: 'psp_solution_name', label: 'Solution' },
                  { id: 'provider_name', label: 'Client Name' },
                  { id: 'balance_name', label: 'Balance' },
                  { id: 'amount_name', label: 'Amount' },
                  { id: 'amount_type', label: 'Amount Type' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <UserTableRow
                      key={row.id}
                      status={isBillView === false ? (row.activity_type === 'rejected' ? 'reserved' : row.activity_type) : row.activity_type}
                      reference={row.reference}
                      productId={row.product_id}
                      date={row.creation_date}
                      solution={row.psp_solution_name}
                      providerName={row.provider_name}
                      balanceName={row.balance}
                      amountName={row.amount}
                      amountToPay={row.amount_to_pay}
                      //providerAvatar={`/assets/images/avatars/avatar_${index + 1}.jpg`}
                      // name={row.client_name}
                      // role={row.role}
                      
                      // company={row.company}
                      // avatarUrl={row.avatarUrl}
                      // isVerified={row.isVerified}
                      selected={selected.indexOf(row.name) !== -1}
                      handleClick={(event) => handleClick(event, row.name)}
                      isBillView={isBillView}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, activitiesMocks.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={activitiesMocks.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
