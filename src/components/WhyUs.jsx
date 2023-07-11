import React from 'react';
import { instructions } from '../constants';
import InstructionCard from './InstructionCard';

const WhyUs = () => (
  <section
    className='section instruction'
    aria-label='instruction'
    data-section
  >
    <div className='container'>
      <h2 className='h2 section-title'>Why Us!</h2>
      <p className='section-text'>The Best In The multiple crypto Industry</p>
      <ul className='instruction-list'>
        {instructions.map((instruction) => (
          <InstructionCard key={instruction.id} {...instruction} />
        ))}
      </ul>
    </div>
  </section>
);

export default WhyUs;
