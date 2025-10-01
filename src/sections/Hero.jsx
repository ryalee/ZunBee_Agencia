import hero from '../assets/images/hero.png'
import HeaderBanner from '../components/HeaderBanner'

function Hero() {
  return (
    <section className='flex flex-col px-[10px]'>
      <HeaderBanner/>

      <div className='flex flex-col gap-[20px] mt-[50px]'>
        <h1 className='font-semibold text-[30pt] text-center'>Ideias incríveis merecem espaço para brilhar.</h1>

        <div className='flex flex-col'>
          <img 
            src={hero} alt="imagem da seção hero representando ideias ganhando forma"
            className='w-[90%] self-center'
          />

          <div className='flex flex-col'>
            <p className='font-medium text-[19pt] text-right'>Criatividade + estratégia = resultado. Essa é a fórmula que usamos para destacar sua marca.</p>

            <div className='flex flex-col gap-5 self-center mt-[20px]'>
              <button className='w-[240px] h-[60px] bg-main border-3 font-semibold py-2 px-6 rounded-[15px] text-[16pt]'>Contato</button>
              <button className='w-[240px] h-[60px] border-3 border-main rounded-[15px] text-[16pt] font-semibold'>Nosso Portfólio</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
