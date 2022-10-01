
import { useState } from "react";
import * as React from "react";
import "./SearchBar.css";
import { Paper, TextField, Box, Button, Grid } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { IconButton, InputAdornment } from '@mui/material';

import { styled } from '@mui/material/styles';
export default function SearchBar() {
  const [search, setSearch] = useState("");
  const paperCss = {
    border: "none",
    // backdropFilter: "blur(2px)",
    borderRadius: "15px",
    background:"rgba(0,0,0,0.4)"
  };
  const StyledButton = styled(Button)(({ theme, color = "primary" }) => ({
    ":hover": {
      color: theme.palette[color].main,
      backgroundColor: "white"
    },
    textTransform: "none"
  }));
  const textFieldCss = {
    background: "rgba(128,128,128,0.2)",
   
    input: {
        color: "rgba(255,255,255,0.2)",
      },
  };

  return (
    <div className="search">
    <div className='searchInput'>
      <Box display="inline-block" sx={{ p: 2 }}>
        <Paper elevation={3} style={paperCss}>
          <div></div>
          <Grid container spacing={1} sx={{ p: 2 }}>
            <Grid item xs={7} md={9}>
           
              <TextField
          inputProps={{ style: { color: "white" } }}
                style={textFieldCss}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                label=""
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <RocketLaunchIcon  style={{ color: "white" }}/>
                      </IconButton>
                    </InputAdornment>
                  ),
                  endAdornment:
                    search.length !== 0 ? (
                      <InputAdornment>
                        <IconButton>
                          <CloseIcon
                            onClick={() => setSearch("")}
                            style={{ color: "white" }}/>
                        </IconButton>
                      </InputAdornment>
                    ) : (
                      <InputAdornment>
                        <IconButton></IconButton>
                      </InputAdornment>
                    )
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={5} md={3}>
              <Box pt={1}>
                <StyledButton variant="contained">Search</StyledButton>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
    </div>
  );
}