import { Switch, TableCell, TableRow } from '@mui/material'
import React from 'react'



const PaymentTableRow = ({transfer, wallet, byCard}) => {
  return (
    <TableRow >
   
    
    <TableCell align={"center"}>
    {transfer}
     </TableCell >

    <TableCell align={"center"}>{wallet}</TableCell>

    <TableCell align={"center"}>
    <Switch defaultChecked={byCard} /></TableCell>
    </TableRow>

 
  )
}

export default PaymentTableRow