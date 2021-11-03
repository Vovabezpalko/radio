import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';

const SearchItem =({item,setState,setRadio,setPlay,play})=>{
    
    return(
<>
<h1>{item.name}</h1>
<Toolbar variant="dense">
   
    <Typography variant="h6" color="inherit" component="div">
      {item.name}
    </Typography>
    
  
  {play?<StopCircleOutlinedIcon
  onClick={()=>(setPlay(false))}
  fontSize="large"
  color="primary"
  />:  
  <PlayArrowIcon
  onClick={()=>{
    setPlay(true)
    setState(item.uri)
    setRadio(item)
    
    }}
    fontSize="large"

  />
  }

  </Toolbar>
</>
    )
}

export default SearchItem