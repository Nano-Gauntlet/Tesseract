import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import HoverDisplayDetailsCircle1 from '../MyComponents/HoverDisplayDetailsCircle1'
import ResultCacd from '../MyComponents/ResultCard'
import ResultImageSection from '../MyComponents/ResultImageSection'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const gridcss = {
  border: "none",
  boxShadow: "none",
  background: "none"
}
export default function Prototype() {
  return (
    <div style={{background: "black"}}>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
          <Grid item xs={8}>
            <Item style={gridcss}>
              <ResultCacd />
            </Item>
          </Grid>
          {/*<Grid item xs={4}>
            <Item style={gridcss}>
              <Grid>
                <Grid item xs={12}>
                  <Item style={gridcss}>
                    <HoverDisplayDetailsCircle1 />
                  </Item>
                </Grid>
                
              </Grid>
            </Item>
  </Grid>*/}
          <Grid item xs={8}>
            <Item style={gridcss}>
              <ResultImageSection />
            </Item>
          </Grid>

        </Grid>
      </Box>
    </div>
  );
}
