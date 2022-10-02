import React, { useState } from 'react'
import Bg_home from '../MyComponents/Assets/searchBg.mp4'
import ResultCard from '../MyComponents/ResultCard'
import ResultHeader from '../MyComponents/ResultHeader'
import ResultImageSection from '../MyComponents/ResultImageSection'
import {useLocation} from 'react-router-dom';

function ResultContainer({dataType, searchResult}){
    if(dataType==="all"){
      return(<div>{searchResult.map((element) => (<ResultCard resultElement={element} />))}</div> );
    }
    if(dataType==="image"){
      return( <ResultImageSection itemData={searchResult}/> )
    }
}

function ResultPage() {
  const [searchResult, setSearchResult] = useState(useLocation().state || []);
  const [dataType, setDataType] = useState("all")
  console.log(useLocation()["searchTerm"])
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
      <ResultHeader processResult={displayResult} setDataType={setDataType} searchTerm={useLocation().search}/>
        <div style={{paddingLeft:"150px", background:"rgba(0,0,0,0.7)"}}>
          <ResultContainer dataType={dataType} searchResult={searchResult}/>
        </div>
    </div>
  )
}

export default ResultPage