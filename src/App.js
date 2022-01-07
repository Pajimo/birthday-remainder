import React, { useState } from 'react';
import {data} from './data';
import List from './List';
function App() {


  return(
    // <div className='section'>
    //   {data.map((person) =>{
    //     return <List key={person.id} {...person}/>
    //   })}
    //</div>
    
    <main className='section'>
      <List />
    </main>
  )


}

export default App;
