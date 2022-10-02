import React from "react";
import opps from './Assets/opps.gif'
import future from './Assets/You came to the future.gif'
import wrong from './Assets/wrong timeline.gif'

export default function LokiError({varient}){
    if(varient==="future")
        return(<img src={future} height="600px" /> )
    else if(varient==="opps")
        return(<img src={opps}  height="600px"/>)
    else if(varient ==="wrong")
        return(<img src={wrong} height="600px"/>)
}