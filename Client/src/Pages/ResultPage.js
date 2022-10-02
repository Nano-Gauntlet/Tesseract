import React from 'react'
import Bg_home from '../MyComponents/Assets/searchBg.mp4'
import ResultHeader from '../MyComponents/ResultHeader'
import { useState } from 'react'
import ResultCard from '../MyComponents/ResultCard'
import ResultImageSection from '../MyComponents/ResultImageSection'


function ResultContainer({dataType, searchResult}){
  console.log("called", dataType==="all", searchResult)
    if(dataType==="all"){
      return(<div>{searchResult.map((element) => (<ResultCard resultElement={element} />))}</div> );
    }
    if(dataType==="image"){
      return( <ResultImageSection itemData={searchResult}/> )
    }
}

function ResultPage() {
  const [searchResult, setSearchResult] = useState([]);
  const [dataType, setDataType] = useState("all")

  
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
      <ResultHeader processResult={displayResult} setDataType={setDataType} />
        <div style={{paddingLeft:"150px", background:"rgba(0,0,0,0.7)"}}>
          <ResultContainer dataType={dataType} searchResult={searchResult}/>
        </div>
    </div>
  )
}

export default ResultPage