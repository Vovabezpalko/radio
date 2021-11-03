import * as React from 'react';
import SearchResult from './SearchResult';
import api from '../../api'



export default function Search({setState,setRadio,setPlay,play}) {
    
    const [search, setSearch] = React.useState('');
    console.log(api)
    function handleSubmit(event) {
        event.preventDefault();
        console.log('search:', search);
        
      }


      const filteredPersons = api.filter(
        person => {
          return (
            person
            .name
            .toLowerCase()
            .includes(search.toLowerCase())
          );
        }
      );
      
     

  return (
      <>
   <form>
       <input
       id='search'
       
       placeholder="Search"
       value={search}
       onChange={(e) => setSearch(e.target.value)}
       style={{
           width:600,
           height:20
           
       }}
       >
       
       </input>

   </form>
{Object.keys(search).length!==0&&
    <SearchResult
   filteredPersons={filteredPersons}
   setState={setState}
 setRadio={setRadio}
 setPlay={setPlay}
 play={play}

   />
}
   
   </>
  );
}