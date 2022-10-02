import React from 'react'
import Bg_home from '../MyComponents/Assets/bg_home.mp4'
import ResultHeader from '../MyComponents/ResultHeader'

function ResultPage() {
  console.log(Bg_home)
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