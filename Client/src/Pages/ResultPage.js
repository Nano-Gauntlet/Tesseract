import React from 'react'
import ResultCacd from '../MyComponents/ResultCard'
import DefaultCard from '../MyComponents/DefaultCard'
import TabPanelResult from '../MyComponents/TabPanelResult'
import SearchBar from '../MyComponents/SearchBar'
import Bg_home from '../MyComponents/Assets/videoplayback.mp4'
import ResultHeader from '../MyComponents/ResultHeader'

function ResultPage() {
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
            <ResultHeader/>
        
        
    </div>
  )
}

export default ResultPage