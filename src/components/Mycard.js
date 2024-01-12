import React from 'react'

const Mycard = ({title,date,location,description}) => {
    
  return (
    <div>
      <div className="card">
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{location}</p>
            <p><small>{description}</small></p>
        </div>
    </div>
  )
}

export default Mycard;
