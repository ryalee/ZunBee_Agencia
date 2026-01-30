import about from '../assets/images/about.png';

function About() {
  return (
    <section className='flex flex-col px-[10px] md:flex-row items-center md:justify-evenly md:px-[40px]'>
      <div className='flex flex-col'>
        <h1 className="section-title">Quem está por trás da colmeia?</h1>
        <p className='font-medium text-[20pt] mt-[300px] px-[10px] md:mt-[40px] md:w-[80%]'>
          Somos a ponte entre sua ideia e o mercado. Na ZunBee, combinamos criatividade, estratégia e tecnologia para entregar softwares, sites e aplicativos que não só funcionam, mas transformam a forma como você gera valor. Uma equipe apaixonada por inovação e comprometida com a excelência, garantindo que cada projeto seja uma obra-prima de eficiência e impacto.
        </p>
      </div> 

      <img 
        src={about} alt="equipe especializada trabalhando no desenvolvimento de software" 
        className='absolute mt-[60px] w-[400px] self-center md:relative'  
      />
    </section>
  )
}

export default About;
