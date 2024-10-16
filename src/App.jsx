import React from "react"

let WebHeading =React.lazy(()=>import("./webnav"))
import "./webnav.css"


function App()
{
  
  return(
    <>
    <WebHeading/>
    </>
  )
}
export default App