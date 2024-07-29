import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import Nav from './nav';
import Main from './main';
import Header from './header';

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {
  const [openNav, setOpenNav] = useState(false);
  const userRole = 'PSP';
  return (
    <>
      {/* <Header onOpenNav={() => setOpenNav(true)} />
 */}
      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Nav role={userRole} openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <Main>{children}</Main>
      </Box>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
/* 

"client_cin":         ^[A-Z]12)[0-9116}$
"client_passport":    ^[A-Z0-9]{8,9}$
"client_code":        ^[A-ZO-9](10}$

rib :             45300000000000000000

"phone_number":       57895689
"public_key":         reDiAUHwCTeC3317CzDKvb9GSbW3eEHrA
"switch_id":          1024567890123456789
"tracking_id":        8£34a229-360-48af-2623-eZeala6a2ec7




*/ 