import React from 'react';

const InstructionCard = ({ img, altText, cardTitle, cardText }) => (
  <li>
    <div className='instruction-card'>
      <figure className='card-banner'>
        <img
          src={img}
          width='96'
          height='96'
          loading='lazy'
          alt={altText}
          className='img'
        />
      </figure>
      <h3 className='h3 card-title'>{cardTitle}</h3>
      <p className='card-text'>{cardText}</p>
    </div>
  </li>
);

export default InstructionCard;
