import { padding } from '@mui/system';
import React, {  useEffect } from 'react';
import SearchItem from './SearchItem';

const SearchResult=({filteredPersons,setState,setRadio,setPlay,play})=>{
    

    useEffect(()=>{
       
    }, filteredPersons)
 return(
<>
<div
style={{
    background: '#212121',
    position:'absolute',
    width:600,
    padding:20,
    right:-0+'%',
    top:50
}}
>

{ filteredPersons.map((item,index) =>( 
        <SearchItem
        item={item}
        setState={setState}
 setRadio={setRadio}
 setPlay={setPlay}
 play={play}

        />
   
))}



</div>
</>

    )
}

export default SearchResult