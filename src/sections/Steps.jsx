import React from 'react'
import { process } from '../data/process'

function Steps() {
  return (
    <section className='px-[10px]'>
      <div>
        <h1 className='section-title'>Como tiramos suas ideias do papel</h1>
        <p className='section-subtitle'>Visão geral e técnica do nosso trabalho</p>
      </div>

      {
        process.map((process, index) => (
          <div className={`flex flex-col md:items-center md:justify-around mt-[40px] md:px-[40px] ${index % 2 !== 0 ? 'md:flex-row' : "md:flex-row-reverse" }`}>
            <img src={process.image} className='w-[80%] self-center md:w-[300px]'/>

            <div className='px-[20px] my-[20px] md:flex-col'>
              <div className='flex items-center px-[10px] gap-[10px]'>
                <div className='flex bg-dark text-main font-bold text-[20pt] w-[50px] h-[50px] rounded-full justify-center items-center'>
                  {process.step}
                </div>

                <h2 className='font-semibold text-[18pt]'>{process.title}</h2>
              </div>

              <ul className='flex flex-col p-[10px] gap-1'>
                {
                  process.items.map((item, idx) => (
                    <li key={idx} className='list-disc text-[16pt]'>{item}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default Steps
