import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import TabPanelResult from './TabPanelResult'
import logo from '../MyComponents/Assets/logo.png'
import { searchAPI } from "../util";
import { useState } from "react";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Paper, TextField, Box, Button, Grid } from "@mui/material";
import { IconButton, InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const StyledButton = styled(Button)(({ theme, color = "primary" }) => ({
  ":hover": {
    color: theme.palette[color].main,
    backgroundColor: "white"
  },
  textTransform: "none"
}));
{/*const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));*/}

const appbarTop={
    background: "rgba(16,18,27,0.4)",
boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
backdropFilter: "blur( 7.5px )"

}

export default function PrimarySearchAppBar({processResult, setDataType, searchTerm}) {
  const [search, setSearch] = useState(searchTerm || "");
  const query = async (e)=>{
    e.preventDefault();
    var res = await searchAPI(search);
    processResult(res);
  }
  
  const searchInputBox={
    
    width: "20%",
    display: "flex",
    background: "rgba(0,0,0,0.7)"
  }
  const textFieldCss = {
    background: "rgba(128,128,128,0.2)",

    input: {
      color: "rgba(255,255,255,0.2)",
    },
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={appbarTop}>
        <Toolbar >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            
            <img src={logo} height="40" style={{"padding":"12px"}} ></img>
          </Typography>
          <form onSubmit={query} style={searchInputBox}>
        <TextField
        fullWidth
          inputProps={{ style: { color: "white" } }}
          style={textFieldCss}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          label=""
          InputProps={{
            startAdornment: (
              <InputAdornment>
                  <RocketLaunchIcon style={{ color: "white", paddingRight: "10px"}} />
              </InputAdornment>
            ),
            endAdornment:
              (search.length !==0 && 
                <InputAdornment>
                    <CloseIcon
                      onClick={() => setSearch("")}
                      style={{ color: "white" }} />
                </InputAdornment>
              ) 
          }}
          variant="outlined"
        />
        <StyledButton variant="contained" type="submit">Search</StyledButton>
      </form>
          </Toolbar>
          <TabPanelResult setDataType={setDataType}/>
      </AppBar>
    </Box>
  );
}
