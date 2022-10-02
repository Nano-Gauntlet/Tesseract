import React from 'react'
import Bg_home from '../MyComponents/Assets/bg_home.mp4'
import ResultHeader from '../MyComponents/ResultHeader'
import { useState } from 'react'

function ResultPage() {
  //console.log(Bg_home)
  const [searchResult,setSearchResult] = useState("");
  function getQuery(query){
  setSearchResult(query);
  console.log(searchResult)
  console.log(query)
  }
  return (
    <div>
      <video
                autoPlay
                loop
                muted
                style={{
                    position: "absolute",
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                    zIndex: "-1",
                    position: "fixed"
                }}
            >
                <source src={Bg_home} type="video/mp4" />
            </video>
            <ResultHeader processResult = {getQuery}/>
                  
        
    </div>
  )
}

export default ResultPage