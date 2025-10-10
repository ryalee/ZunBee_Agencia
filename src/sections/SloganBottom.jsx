import React from 'react'
import geometry from '../assets/images/geometry.png';

function SloganBottom() {
  return (
    <section className='text-[20pt] text-main [text-shadow:_2px_2px_0px_#4e4e4e] font-bold flex gap-2 items-center justify-center px-[10px] md:text-[50pt] md:w-[80%] md:justify-between md:self-center'>
      <h1 className=''>Inovar</h1>
      <img src={geometry} className='w-[50px] md:w-[70px]'/>
      <h1>Inspirar</h1>
      <img src={geometry} className='w-[50px] md:w-[70px]'/>
      <h1>Criar</h1>
    </section>
  )
}

export default SloganBottom
