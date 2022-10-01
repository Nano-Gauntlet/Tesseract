import React from 'react'
import "./SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';
import transition from "./Assets/bg_home.mp4";

function SearchBar({ placeholder, videoSetter, video }) {
    function queryhandler(){
        console.log("horaha")
        console.log(video)
        videoSetter(transition);
        console.log(video)

    }
    return (
        <div className='search'>
            <div className='searchInput'>
                <input type='text' placeholder={placeholder}  />              
                <div className="searchIcon">
                    <SearchIcon />
                </div>
                <button onClick={queryhandler}>submit</button>
            </div>
        </div>
    )
}

export default SearchBar