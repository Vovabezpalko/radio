import React,{use} from 'react'
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';

const Footer =({setPlay,play,radioName})=>{
   
    return(
<>
<AppBar position="fixed-bottom "
sx={{
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#212121'

}}
>
  <Toolbar variant="dense">
   
    <Typography variant="h6" color="inherit" component="div">
      {radioName}
    </Typography>
    
  
  {play?<StopCircleOutlinedIcon
  onClick={()=>setPlay(false)}
  fontSize="large"
  color="primary"
  />:  
  <PlayArrowIcon
  onClick={()=>{
    setPlay(true)
    
    }}
    fontSize="large"

  />
  }

  </Toolbar>
</AppBar>
</>
    )
}

export default Footer