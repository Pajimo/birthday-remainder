import React, {useState} from 'react';
import { data } from './data';

const List = (props) => {

  // return(
  //   <main className='container'>
  //     <main className='person'>
  //       <img src={props.image}></img>
  //       <h3>{props.name}</h3>
  //       <h4>{props.age}</h4>
  //     </main>
  //     <button className=''>Clear All</button>
  //   </main>
  // )

  const [people, setPeople] = useState(data);

  const clearAll = ()=>{
    setPeople([]);
  }
  return (
    <div className='container'>
      <h3>{people.length} Birthdays Today</h3>
      {people.map((person) => {
        const{id, name, age, image} = person
        return(
          <div key={id} className='person'>
            <img src={image} alt='Person'></img>
            <div><h4>{name}</h4>
            <p>{age} Years</p></div>
          </div>
        )
      })}
      <button className='btn' onClick={clearAll}>Clear All</button>
    </div>
  );
};

export default List;
