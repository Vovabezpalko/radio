import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RadioItem({img,text,item,setState,index,setRadio,setPlay,play,radio}) {
  const [expanded, setExpanded] = React.useState(false);
  
 console.log(radio)

 

  return (
    <Card sx={{ maxWidth: 345 }}>
      
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
      />
      <CardContent>
      <Typography variant="h6" color="inherit" component="div">
      {text}
    </Typography>

{radio!=item.uri?
  <PlayArrowIcon

  fontSize="large"
onClick={()=>{
 setPlay(true)
 setState(item.uri)
 setRadio(item)
 }}

 />:play?<StopCircleOutlinedIcon
 onClick={()=>setPlay(false)}
 fontSize="large"
 color="primary"
 />:<PlayArrowIcon

 fontSize="large"
 onClick={()=>{
  setPlay(true)
  setState(item.uri)
  setRadio(item)
  }}

  />
}

{/* {play?<StopCircleOutlinedIcon
  onClick={()=>setPlay(false)}
  fontSize="large"
  color="primary"
  />:<PlayArrowIcon


  onClick={()=>{
   setPlay(true)
   setState(item.uri)
   setRadio(item)
   }}
 
   />} */}


  
  
  

 

{/* <ReactPlayer 
url={item.uri}
playing={play}


/> */}
      </CardContent>
     
     
      <Collapse in={expanded} timeout="auto" unmountOnExit>
       
      </Collapse>
    </Card>
  );
}