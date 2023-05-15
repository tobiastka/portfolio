import proyectos from './proyects.json'
import educacion from './educacion.json'

function App () {
  return (
    <div className='flex flex-col items-center w-11/12 max-w-2xl md:max-w-4xl mx-auto gap-8'>
      <header className='flex flex-col md:mb-5 items-center gap-5'>
        <div className='h-44 w-44 relative'>
          <img className='h-full w-full object-cover rounded-full mt-4' src='./profilePicture.jpg' alt='Foto de Tobias Tkaczek en la playa' />
          <img className='w-10 h-10 absolute bottom-0 right-0 translate-y-1/2 ' src='./js.png' alt='Logo de Java Script' />
        </div>
        <div className='flex flex-col gap-3'>
          <h1 style={{ fontSize: '28px' }} className='w-full text-center items-center font-poppins font-extrabold'>Hola, mi nombre es Tobias y soy <br /><span className='px-3 py-0.5 bg-sky-600 text-white w-full  '>Frontend Developer</span></h1>
          <div className='w-full text-sm md:text-xl flex flex-row justify-center gap-2 font-roboto-mono'>
            <a href='https://www.linkedin.com/in/tobias-tkaczek-2a1b7624b/' target='_blank' className='px-3 bg-yellow-300 rounded-xl hover:shadow-md hover:bg-yellow-400 hover:transition-all  flex flex-row items-center gap-1' rel='noreferrer'>
              <img src='./linkedin.png' className='h-3 inline-block' alt='icono linkedin' />
              LINKEDIN
            </a>
            <a href='https://github.com/tobiastka' target='_blank' className='px-3 bg-yellow-300 rounded-xl hover:shadow-md hover:bg-yellow-400 hover:transition-all  flex flex-row items-center gap-1' rel='noreferrer'>
              <img src='./github.png' className='h-3 inline-block' alt='icono github' />
              GITHUB
            </a>
            <a href='./cv.pdf' download className='px-3 bg-yellow-300 rounded-xl hover:shadow-md hover:bg-yellow-400 hover:transition-all  flex flex-row items-center gap-1'>
              <img src='./cv.png' className='h-3 inline-block' alt='icono cv' />
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </header>
      <main className='w-full flex flex-col gap-16'>
        <section className='flex flex-col gap-2 before:w-full before:content-[""] before:border-t-2 before:border-black'>
          <h2 className='px-2 -mt-2 bg-red-400 font-sans font-semibold text-xl md:text-2xl md:w-44 text-white w-28  text-center align-middle'>SOBRE MI</h2>
          <p className='text-sm md:text-xl font-poppins mt-4'>
            Ex estudiante de Ingeniería Biomédica (+4 años) con gran pasión por el desarrollo tecnológico.
          </p>
          <p className='text-sm md:text-xl font-poppins'>
            Mis primeros pasos en el desarrollo web fue mediante estudios autodidactas, leyendo documentación y siguiendo el curso gratuito de "r/ArgentinaPrograma".
          </p>
          <p className='text-sm md:text-xl font-poppins'>
            Egresado de Soy Henry Bootcamp donde a demás de consolidar conocimientos, sume experiencia realizando pair programming y aplicando tecnologías de desarrollo ágil a la hora de realizar proyectos en equipo.
          </p>
          <p className='text-sm md:text-xl font-poppins'>
            Actualmente sigo estudiando de forma autodidacta y realizando proyectos para sumar experiencia y aprender buenas practicas!
          </p>
          <div className='w-full flex flex-col md:flex-row gap-2 mt-8'>
            <div className='flex flex-col bg-yellow-300 shadow-md'>
              <img src='./mate.jpg' alt='Foto de mi mate y mi codigo' />
              <h3 className='text-xs text-center font-poppins p-1'>No puede faltar un buen matecito a la hora de codear ^^</h3>
            </div>
            <div className='flex flex-col bg-yellow-300 shadow-md'>
              <img src='.\chibi.jpg' alt='Foto de mi gato' />
              <h3 className='text-xs text-center font-poppins p-1'>Mi gato Chibi me hace compañia mientras programo :)</h3>
            </div>
          </div>
        </section>
        <section className='flex flex-col gap-4 before:w-full before:content-[""] before:border-t-2 before:border-black'>
          <h2 className='px-2 -mt-4 bg-red-400 font-poppins font-extrabold text-xl text-white w-36 text-center md:text-2xl md:w-44'>PROYECTOS</h2>
          <div className='flex flex-col gap-4 md:grid md:grid-cols-2 mt-4'>
            {
            proyectos.map(proyecto => {
              return (
                <div className='flex flex-col gap-2 hover:bg-green-50 hover:transition-all p-2 shadow-md' key={proyecto.titulo}>
                  <div className='flex flex-col gap-0.5'>
                    <h3 className='font-poppins text-xl md:text-2xl font-semibold text-green-900'>{proyecto.titulo}</h3>
                    <h4 className='font-poppins text-sm md:text-base font-light text-green-700 -mt-1'>{proyecto.role}</h4>
                    <p className='text-xs md:text-base font-nunito'>{proyecto.descripcion}</p>
                    <div className='flex flex-row flex-wrap gap-1 justify-center mt-1'>
                      {
                      proyecto.tags.map(tag => {
                        return (
                          <div className='bg-green-500 py-0.5 px-1 text-white flex items-start text-xs md:text-base rounded-sm' key={tag}>{tag}</div>
                        )
                      }
                      )
}
                    </div>
                  </div>
                  <div className='flex flex-row gap-0.5 md:mt-auto w-full'>
                    {
                      proyecto.imagenes?.map(imagen => {
                        return (
                          <img className='w-1/2 rounded-sm' key={imagen} src={imagen} />
                        )
                      })
}
                  </div>
                </div>
              )
            })
          }
          </div>
        </section>
        <section className='flex flex-col gap-4 before:w-full before:content-[""] before:border-t-2 before:border-black'>
          <h2 className='px-2 -mt-4 bg-red-400 font-poppins font-extrabold text-xl text-white w-36 text-center md:text-2xl md:w-44'>EDUCACION</h2>
          <div className='flex flex-col mt-4'>
            {
              educacion.map(elemento => {
                return (
                  <div key={elemento.titulo} className='max-w-full ml-3 flex flex-col justify-center items-center'>
                    <div className='pl-4 md:pl-8 max-w-xs md:max-w-md font-poppins flex flex-col gap-2 relative border-l-2 pb-10'>
                      <h3 className=''>{elemento.titulo}</h3>
                      <img src={elemento.logo} className='h-6 w-6 md:w-12 md:h-12 rounded-full object-cover absolute left-0 top-0 -translate-x-1/2 border-2' alt='' />
                      <div className='flex flex-row gap-1 flex-wrap'>
                        <h4 className='text-xs text-sky-600 md:text-base -mt-1'>{elemento.nivel}</h4>
                        <h4 className='text-xs text-sky-900 md:text-base -mt-1'>{elemento.fecha}</h4>
                      </div>
                      {!elemento.finalizado ? <p className='text-xs -mt-1 italic'>(Sin finalizar)</p> : ''}

                      <div className='text-xs flex flex-col gap-2'>
                        {
                          elemento.descripcion.split('/').map((parrafo, index) => <p key={index} className='md:text-base text-xs'>{parrafo}</p>)
                        }
                      </div>

                    </div>
                  </div>
                )
              })
            }
          </div>

        </section>
      </main>
    </div>
  )
}

export default App
