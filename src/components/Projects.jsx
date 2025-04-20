import React from 'react'
import img1 from '../images/upwork.png'
import img2 from '../images/alime.png'
import img3 from '../images/api.png'
const Projects = () => {

  const ProjectCards = [
    { heading: 'React-JS-CRUD-Operation-with-Rest-API-using-Axios', para: 'This is the practices project ', img: img3, link: 'https://apiaxious.netlify.app/' },
    { heading: 'The Alime Photoghraph clone', para: 'This is the practices project ', img: img2, link: 'https://alimeproject.netlify.app/' },
    { heading: 'The Upwork Clone', para: 'This is the practices project ', img: img1, link: 'https://upworkclone1.netlify.app/' },
  ]



  return (
    <>

      <section className='project bg-black'>
        <div className='relative '>
          <h1 className='absolute  md:text-[80px] text-[60px] md:left-[40%] left-[20%] py-10 opacity-30'>Projects</h1>
          <div className='text-center text-[40px] pt-4'>
            <h2 >Our Projects</h2>
            <p className='text-[20px] py-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>

        <div className='container pt-6 mx-auto  py-4 grid md:grid-cols-3 grid-cols-1 w-[90%] gap-3'>
          {ProjectCards.map((item, index) => {


            return (
              <div className="flex  rounded-md cursor-pointer bg-black group" key={index}>
                <div className="relative ">
                  <p className="absolute bottom-[30%] left-1/2 transform -translate-x-1/2 translate-y-10  opacity-0 
       group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white text-center font-bold">
                    {item.heading} <br />
                    <span className='font-normal leading-8'>{item.para}</span>
                  </p>
                  <a href={item.link} target='_blank'><img src={item.img} alt="" className='opacity-80 rounded-md group-hover:opacity-20 transition duration-1000 w-full h-full object-cover ' /></a>

                </div>
              </div>
            )
          })}
        </div>


      </section>

    </>
  )
}

export default Projects
