import React,{useState} from 'react'
import api from '../../api'
import RadioItem from './RecipeReviewCard'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ReactPlayer from 'react-player'
import { Margin } from '@mui/icons-material';



 
const Radio =({setState,setRadio,setPlay,play,radio})=>{
return(
<>

<Box 
sx={{
   
    backgroundColor: '#030303'
   
  }}
>
<Grid container  spacing={12} justifyContent="center"   
>

{ 
api.map((item,index) =>( 
         
         <Grid item xs={12} md={3}
         >
         <RadioItem
         index={index}
         img={item.image_url}
         text={item.name}
         item={item}
         setState={setState}
         setRadio={setRadio}
         setPlay={setPlay}
         play={play}
         radio={radio}
        />
         </Grid>
 ))}
</Grid>
</Box>
</>
    )
}

export default Radio