import React, { useState } from 'react'
import Bg_home from '../MyComponents/Assets/searchBg.mp4'
import ResultCard from '../MyComponents/ResultCard'
import ResultHeader from '../MyComponents/ResultHeader'
import ResultImageSection from '../MyComponents/ResultImageSection'
import {useLocation} from 'react-router-dom';
import LokiError from '../MyComponents/LokiError';

function ResultContainer({dataType, searchResult}){
    if(searchResult.length === 0){
      return (<LokiError varient="opps"/>)
    }
    else if(dataType==="all"){
      return(<div>{searchResult.map((element) => (<ResultCard resultElement={element} />))}</div> );
    }
    else if(dataType==="image"){
      return( <ResultImageSection itemData={searchResult}/> )
    }
    else{
      return(<LokiError varient="future"/>)
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