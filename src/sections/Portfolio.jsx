import React, {useState} from 'react'
import { projects } from '../data/projects.js';

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className='px-[10px]'>
      <div>
        <h1 className='section-title'>O que já criamos até aqui?</h1>
        <h2 className='section-subtitle'>Projetos que falam por nós</h2>
      </div>

      {/* Grid de projetos */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-4'>
        {
          projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} className='w-full object-cover transition-transform duration-500 group-hover:scale-110'/>

              <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-light p-4'>
                <h3 className='text-xl font-bold'>{project.title}</h3>
                <p className='text-sm mt-2'>{project.description}</p>
              </div>
            </div>
          ))
        }
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className='fixed inset-0 bg-black/70 flex justify-center items-center p-4 z-50'>
          <div className='bg-light rounded-2xl shadow-lg max-w-lg w-full px-4 py-[40px] relative'>
            <button 
              className='absolute top-1 right-4 text-2xl font-bold'
              onClick={() => setSelectedProject(null)}
            >
              x
            </button>

            <img 
              src={selectedProject.image} alt={selectedProject.title} 
              className='w-full h-64 object-cover rounded-lg'
            />
            <h2 className='text-2xl font-semibold mt-4'>{selectedProject.title}</h2>
            <p>{selectedProject.details}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio
