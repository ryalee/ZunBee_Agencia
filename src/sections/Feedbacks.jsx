import React from 'react'
import {feedbacks} from '../data/feedbacks';

function Feedbacks() {
  return (
    <section className='px-[10px]'>
      <h1 className='section-title'>Depoimentos de Clientes Satisfeitos</h1>

      <div className='flex flex-col gap-[50px] mt-[40px] px-[20px] md:flex-row'>
        {
          feedbacks.map((feedback) => (
            <div className='flex flex-col gap-[20px] shadow-[0px_0px_10px_#4e4e4e40] px-[12px] py-[20px] rounded-[20px]'>
              <img 
                src={feedback.open}
                className='w-[70px]'
              />

              <p className='px-[30px] font-medium text-[15pt]'>
                {feedback.comment}
              </p>

              <div className='flex items-center justify-between'>
                <p className='px-[12px] text-[12pt]'>{feedback.client}</p>

                <img 
                  src={feedback.close}
                  className='w-[70px]'
                />
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Feedbacks
