import React from 'react'
import ResultCacd from '../MyComponents/ResultCard'
import DefaultCard from '../MyComponents/DefaultCard'
import ImageZoom1 from '../MyComponents/ImageZoom1'
import HoverDisplayDetailsCircle1 from '../MyComponents/HoverDisplayDetailsCircle1'
import ImageGalaryTab from '../MyComponents/ImageGalaryTab'
import ResultImageSection from '../MyComponents/ResultImageSection'
import ImageoftheDay from '../MyComponents/ImageoftheDay'
import CardFlip from '../MyComponents/CardFlip'

function Demo() {
  return (
    <div>
        <ImageoftheDay/>
        <ResultCacd/>
        <DefaultCard/>
        <ImageZoom1/>
        <HoverDisplayDetailsCircle1/>
        <ImageGalaryTab/>
        <ResultImageSection/>
        <CardFlip/>
    </div>
  )
}

export default Demo