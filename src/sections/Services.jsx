import React from 'react';
import { services } from '../data/services.js';

function Services() {
  return (
    <section className='flex flex-col items-center'>
      <div>
        <h1 className='section-title'>O que podemos fazer por você?</h1>
        <h2 className='section-subtitle'>Nossos serviços</h2>
      </div>

      <div className='flex flex-col gap-[50px] mt-[40px]'>
        {
          services.map((service) => (
            <div 
              key={service.id}
              className='service-card text-center'
            >
              <img 
                src={service.image} alt={service.imageDesc}
                className='w-[250px] self-center'
              />

              <h3 className='font-semibold text-[25pt]'>{service.title}</h3>
              <p className='font-medium text-[15pt]'>{service.description}</p>

              <button className='bg-main border-3 border-dark py-1 rounded-[10px] mt-[20px] hover:cursor-pointer font-bold text-[15pt]'>Criar o Meu</button>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Services