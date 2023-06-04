
import React, {useState} from "react"

export default function Box(props) {
    const [on, setOn] = React.useState(props.on)
  

    const styles= {
        backgroundColor: on ? "#222222" : "transparent"
    } 
    function toogle()
    {
        setOn(prevOn => !prevOn)
    }
    return (
        <div 
        className='box' 
        style={styles} 
         onClick={toogle}
        handleClick={props.toggle}>

   </div>
    )
}


