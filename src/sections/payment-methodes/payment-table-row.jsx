import { Switch, TableCell, TableRow } from '@mui/material'
import React from 'react'



const PaymentTableRow = ({banque, RIB, compteActive}) => {
  return (
    <TableRow >
   
    
    <TableCell align={"center"}>
    {banque}
     </TableCell >

    <TableCell align={"center"}>{RIB}</TableCell>

    <TableCell align={"center"}>
    <Switch defaultChecked={compteActive} /></TableCell>
    </TableRow>

 
  )
}

export default PaymentTableRow