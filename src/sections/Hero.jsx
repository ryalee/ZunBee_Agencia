import hero from '../assets/images/hero.png';
import HeaderBanner from '../components/HeaderBanner';
import BotaoContato from '../components/BotaoContato';

function Hero() {
  return (
    <section className='flex flex-col px-[10px]'>
      <HeaderBanner/>

      <div className='flex flex-col gap-[20px] mt-[50px] md:items-center'>
        <h1 className='font-semibold text-[30pt] text-center md:text-[45pt] md:mt-[-20px]'>Ideias incríveis merecem espaço para brilhar!</h1>

        <div className='flex flex-col md:flex-row md:justify-evenly md:mt-[-20px] md:self-center md:px-[20px] md:items-center'>
          <img 
            src={hero} alt="imagem da seção hero representando ideias ganhando forma"
            className='w-[90%] self-center md:w-[300px]'
          />

          <div className='flex flex-col md:w-[60%] '>
            <p className='font-medium text-[19pt] text-right md:text-[25pt] md:w-[80%] md:self-end'>Criatividade + estratégia = resultado. Essa é a fórmula que usamos para destacar sua marca.</p>

            <div className='flex flex-col gap-10 self-center mt-[20px] md:flex-row'>
              <BotaoContato/>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
