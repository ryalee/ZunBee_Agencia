import React from 'react';
import {questions} from '../data/questions';

function FAQ() {
  return (
    <section className='px-[10px]'>
      <div>
        <h1 className='section-title'>FAQ</h1>
        <p className='section-subtitle'>Dúvidas que recebemos frequentemente</p>
      </div>

      <div className='flex flex-col gap-[30px] mt-[40px]'>
        {
          questions.map((question) => (
            <div className='flex flex-col border-4 border-main p-[15px] gap-2 rounded-[20px]'>
              <h1 className='text-[16pt] font-bold'>{question.question}</h1>
              <p className='text-[13pt]'>{question.answer}</p>
            </div>
          ))
        }
      </div>

      <div className='mt-[20px]'>
        <p className='text-[16pt]'>Tem alguma dúvida e não encontrou resposta aqui?</p>
        <button className='bg-main border-3 border-dark rounded-[10px] hover:cursor-pointer font-bold w-[100%] text-[15pt] px-[30px] py-[10px]'>Entre em contato</button>
      </div>
    </section>
  )
}

export default FAQ;