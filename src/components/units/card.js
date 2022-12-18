import React from 'react'

import "../style/card.scss";

const card = ({img,title,desc,reads,comments}) => {
  return (
    <div className='card'>
        {/* Image */}
        <div className='card-image'>
            <img src={img} alt=""></img>
        </div>
        {/* Title */}
        <div className='card-title'>
            <h3>{title}</h3>
        </div>
        {/* Description */}
        <div className='card-desc'>
            <p>{desc}</p>
        </div>
        {/* Interaction */}
        <div className='card-inter'>
            <div className='card-reads'>
                {reads + " Reads"}
            </div>
            <div className='card-comments'>
                {comments + " Comments"}
            </div>
        </div>
    </div>
  )
}

export default card