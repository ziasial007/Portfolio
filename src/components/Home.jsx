import React from 'react'
import zia from '../images/zia.png'
const Home = () => {
  return (
    <>
      <div className="main flex flex-col flex-wrap md:flex-row overflow-hidden">
        <div className="first-side text-[28px] md:w-[40%] h-[100vh] md:h-[100vh] md:full bg-black borde relative">
          <div className="about px-16 leading-10 absolute left-0 right-0 top-[25%]">
            <p className=' text-[12px] text-amber-300'>Asslam O Alikum!</p>
            <h1 className='text-[#F9BD45] font-bold text-[40px] w-[250px]'><span className='text-white'>I'm </span>Muhammad Zia Ul Rehman</h1>
            <h2>Front-End Web Developer</h2>
            <button className='bg-[#f9bd45] cursor-pointer text-[13px] px-3 rounded-2xl text-white'><a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=reziaurrehman@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire Me
            </a></button>
            
            <a href="https://drive.google.com/file/d/10uOpR7Nu78NkWtyMeifVtFVrrCsNyLXl/view?usp=sharing" target='_blanck' download>
              <button className="border cursor-pointer hover:text-black hover:bg-[#f9bd45] transition  mx-3 text-[13px] px-3 rounded-2xl text-white">
                Download CV
              </button>
            </a>




          </div>
        </div>
        <div className="second-side bg-black  md:w-[60%]  md:h-[100vh]">
          <div className='h-[100%] flex justify-center w-[100%] mx-aut items-center'>
            <img src={zia} alt="" className='w-[500px] h-auto md:h-[80%]   object-contain md:mt-20 rounded md:rounded-3xl' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home