import React from 'react'
import SearchBar from '../MyComponents/SearchBar';
import Bg_home from '../MyComponents/Assets/searchBg.mp4'
import './HomeCss.css'
import { useState } from 'react';
import logo from "../MyComponents/Assets/logo.png"
import { Button } from '@mui/material';
import ImageofTheDay from '../MyComponents/ImageoftheDay';

function Home() {
    const clickHandler = (e)=>{
        e.preventDefault();
        window.location.href = "/result";
    }
    const [first, setfirst] = useState(Bg_home)
    return (
        <div className='searchPage'>
            <video
                autoPlay
                loop
                muted
                style={{
                    position: "absolute",
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                    zIndex: "-1"
                }}
            >
                <source src={first} type="video/mp4" />
            </video>
            <div className='searchContainer'>
                <center><img className='center' src = {logo}/></center>
                <SearchBar placeholder="Search" videoSetter={(e)=>setfirst(e)} video={first} onClick={clickHandler} />
                {/* <Button variant=''>Search Through the starts</Button> */}
                <ImageofTheDay />
            </div>
        </div>
    )
}

export default Home