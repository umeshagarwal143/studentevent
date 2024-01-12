import React, {useState} from 'react'
import './Card.css';
import eventDetails from './cardapi.js';
import Mycard from './Mycard.js';
const Maincard = () => {
    const [carddata,cardsetData] = useState(eventDetails);
  return (
    <div className="card card-container" >
      {
         carddata.map((curElem)=>{
            const{id}=curElem;
            return <Mycard  key={id} {...curElem} />
          })
      }
    </div>
  )
}

export default Maincard;
