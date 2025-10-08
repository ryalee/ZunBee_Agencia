import logo from './assets/images/logo.png'
import About from './sections/About'
import CTA from './sections/CTA'
import FAQ from './sections/FAQ'
import Feedbacks from './sections/Feedbacks'
import Hero from './sections/Hero'
import Portfolio from './sections/Portfolio'
import Services from './sections/Services'
import SloganBottom from './sections/SloganBottom'
import Steps from './sections/Steps';

function App() {
  return (
    <>
      <header className='p-5 flex justify-between items-center'>
        <div className='flex items-center gap-1'>
          <img 
            src={logo} alt="logo"
            className='w-[70px]'
          />
          <p className='font-bold text-[30pt]'>Zun<span className='text-main'>Bee</span></p>
        </div>
      </header>

      <main className='flex flex-col gap-[150px]'>
        <Hero/>
        <About/>
        <Services/>
        <Portfolio/>
        <Steps/>
        <Feedbacks/>
        <FAQ/>
        <CTA/>
        <SloganBottom/>
      </main>

      <footer className='flex flex-col shadow-[0px_-2px_4px_#00000025] w-[100%] p-[10px] mt-[150px]'> {/* só pra nao esquecer: shadow-[x_y_blur_color(o final é a porcetagem de opacidade)] */}
        <section className='flex flex-col'>
          <div className='flex items-center gap-1 mt-[20px]'>
            <img 
              src={logo} alt="logo"
              className='w-[55px]'
            />
            <p className='font-bold text-[22pt]'>Zun<span className='text-main'>Bee</span></p>
          </div>

          <div className='flex flex-col gap-1 mt-[40px]'>
            <h4 className='font-bold text-[15pt]'>Suporte</h4>

            <ul className='flex flex-col text-blue-800 underline'>
              <a href="mailto:contato@zunbee.com.br">contato@zunbee.com.br</a>
              <a href='https://wa.me/5574999115799?text=Olá! Gostaria de saber mais sobre os seus serviços.'>WhatsApp</a>
            </ul>
          </div>
        </section>

        <p className='mt-2 p-[20px] self-center'>&copy; {new Date().getFullYear()} ZunBee. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}

export default App