import React from 'react';
import service1 from '../assets/images/services/software.png';
import service2 from '../assets/images/services/mobile.png';
import service3 from '../assets/images/services/site.png';

function Services() {
  return (
    <section className='flex flex-col items-center'>
      <div>
        <h1 className='section-title'>O que podemos fazer por você?</h1>
        <h2 className='section-subtitle'>Nossos serviços</h2>
      </div>

      <div className='flex flex-col gap-[45px]'>
        <article className='service-card text-center h-[520px]'>
          <img 
            src={service1} alt="Desenvolvimento de software sob medida"
            className='w-[300px] self-center'
          />

          <div className='flex flex-col gap-[10px]'>
            <h3 className='font-semibold text-[22pt]'>Desenvolvimento de Software Sob Medida</h3>
            <p className='text-[18pt]'>Soluções criadas do zero, alinhadas às suas necessidades e metas de negócio.</p>
          </div>

          <button className='bg-main border-3 w-[260px] h-[46px] font-bold text-[14pt] rounded-[10px] self-center mt-[20px]'>Solicitar esse serviço</button>
        </article>

        <article className='service-card text-center h-[530px]'>
          <img 
            src={service2} alt="Desenvolvimento de software sob medida"
            className='w-[200px] self-center'
          />

          <div className='flex flex-col gap-[10px]'>
            <h3 className='font-semibold text-[22pt]'>Desenvolvimento de Software Sob Medida</h3>
            <p className='text-[18pt]'>Soluções criadas do zero, alinhadas às suas necessidades e metas de negócio.</p>
          </div>

          <button className='bg-main border-3 w-[260px] h-[46px] font-bold text-[14pt] rounded-[10px] self-center mt-[20px]'>Solicitar esse serviço</button>
        </article>

        <article className='service-card text-center h-[530px]'>
          <img 
            src={service3} alt="Desenvolvimento de software sob medida"
            className='w-[200px] self-center'
          />

          <div className='flex flex-col gap-[10px]'>
            <h3 className='font-semibold text-[22pt]'>Desenvolvimento de Software Sob Medida</h3>
            <p className='text-[18pt]'>Soluções criadas do zero, alinhadas às suas necessidades e metas de negócio.</p>
          </div>

          <button className='bg-main border-3 w-[260px] h-[46px] font-bold text-[14pt] rounded-[10px] self-center mt-[20px]'>Solicitar esse serviço</button>
        </article>


      </div>
    </section>
  )
}

export default Services
