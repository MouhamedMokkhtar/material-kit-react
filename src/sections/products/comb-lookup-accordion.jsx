import { Accordion, AccordionDetails, AccordionSummary, Button, Grid } from '@mui/material';
import { cs } from 'date-fns/locale';
import React from 'react';

const ExpandMoreIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M15.88 9.29L12 13.17L8.12 9.29a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41c-.39-.38-1.03-.39-1.42 0"
    ></path>
  </svg>
);

function CombLookupAccordion({ children, index }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {`Combination #${index}`}
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={1}>
          {children}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default CombLookupAccordion;
