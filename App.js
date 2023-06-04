
import './App.css';
import React, {useState} from "react"
import Boxes from "./boxes"
import Box from "./box"

function App() 

{
  const [squares, setSquares] = React.useState(Boxes)
  const squareElements = squares.map(square => (
   <Box key={square.id} on={square.on} />

 
  ))
  return (
    <div>
      <h1 className='devname'>Sameer - the React developer</h1>
      <h2 className='topic'>Box Model</h2>

   {squareElements}
    </div>
      
  )
}



export default App;


