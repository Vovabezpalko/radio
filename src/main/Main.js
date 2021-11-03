import React,{useState} from 'react'
import Header from '../components/radio/Header'
import Radio from '../components/radio/Radio'
import Footer from '../components/radio/Footer'
import ReactPlayer from 'react-player'


const Main =()=>{
    const [state,setState]=useState('')
    const [play,setPlay]=React.useState(false)
    const [radio,setRadio]=useState('')
    console.log(radio)
    return(
<>
<div style={{
    height:0
}}>
<ReactPlayer 
url={radio.uri}
playing={play}
controls={false}

/>
</div>

<Header
setState={setState}
setRadio={setRadio}
setPlay={setPlay}
play={play}

/>
<Radio
setState={setState}
setRadio={setRadio}
setPlay={setPlay}
play={play}
radio={radio.uri}
/>


 {Object.keys(state).length!==0&&
    <Footer
state={state}
setPlay={setPlay}
play={play}
radioName={radio.name}
/>
} 


</>

    )
}


export default Main
