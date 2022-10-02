
import { useState } from "react";
import * as React from "react";
import "./SearchBar.css";
import { Paper, TextField, Box, Button, Grid } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { IconButton, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import { searchAPI } from "../util";


const StyledButton = styled(Button)(({ theme, color = "primary" }) => ({
  ":hover": {
    color: theme.palette[color].main,
    backgroundColor: "white"
  },
  textTransform: "none"
}));

export default function SearchBar(){

  const [search, setSearch] = useState("");
  const query = async (e)=>{
    e.preventDefault();
    var res = await searchAPI(search);
    console.log(res);
  }
  const textFieldCss = {
    background: "rgba(128,128,128,0.2)",

    input: {
      color: "rgba(255,255,255,0.2)",
    },
  };


  return (
      <form onSubmit={query} className="searchInput">
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
  );
}