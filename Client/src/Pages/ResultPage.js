import React from 'react'
import Bg_home from '../MyComponents/Assets/bg_home.mp4'
import ResultHeader from '../MyComponents/ResultHeader'
import { useState } from 'react'
import ResultCacd from '../MyComponents/ResultCard'


function ResultPage() {
  const [searchResult, setSearchResult] = useState([]);

  
  function displayResult(result) {
    setSearchResult(result.res.slice(0, 10));
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
      <ResultHeader processResult={displayResult} />
        <div>
          {searchResult.map((element) => (<ResultCacd resultElement={element} />))}
        </div>



    </div>
  )
}

export default ResultPage