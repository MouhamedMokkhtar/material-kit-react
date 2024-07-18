import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fCurrency, fShortenNumber } from 'src/utils/format-number';
import DinarCurrency from 'src/components/dinar-currency/dinar-currency';

// ----------------------------------------------------------------------

export default function AppWidgetSummary({ title,currency, total, icon, variant = 'primary', sx, ...other }) {
  const backGroundColor = variant === 'primary' ? "white" : "linear-gradient(135.09deg, #A447ED 5.17%, #5648F1 94.75%)";
  const textColor = variant === 'primary' ? 'text.disabled' : "white";
  const secondaryTextColor = variant === 'primary' ? "black" : "white";
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        px: 3,
        py: 3,
        borderRadius: 2,
        ...sx,
        background: backGroundColor
      }}
      {...other}
    >
      {/* {icon && <Box sx={{ width: 64, height: 64 }}>{icon}</Box>} */}

      <Stack spacing={0.5}>
       

        <p style={{ color: textColor, fontWeight:400, fontSize: 14 }}>
          {title}
        </p>
        
        <Typography variant="h2" sx={{color: secondaryTextColor, fontWeight: 500}}>
          { currency ? <DinarCurrency value={total} /> : fShortenNumber(total) }
          </Typography>
      </Stack>
    </Card>
  );
}

AppWidgetSummary.propTypes = {
  variant: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number || PropTypes.string,
  currency: PropTypes.bool,
};
