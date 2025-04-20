import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skill = () => {

    const Cards = [
        { skill: 'CSS', percentage: 66  },
        { skill: 'TAIWLWIND', percentage: 80 },
        { skill: 'HTML', percentage: 90 },
        { skill: 'JAVASCRIPT', percentage: 30, },
        { skill: 'REACT.JS', percentage: 60, },
        { skill: 'BOOTSTRAP', percentage: 60, },
    ]
    return (
        <>
            <section className='Skill py-4 w-full overflow-hidden bg-black'>

                <div className='relative '>
                    <h1 className='absolute top-0 left-[25%] md:left-[43%] text-gray-200  text-[80px] opacity-15 '>Skills</h1>
                    <h2 className='text-[40px] text-center pb-4'>My Skills</h2>
                    <p className='text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    <div className='  rounded-2xl shadow-2xl my-3  grid-cols-3 place-items-center'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center mt-6' >
                            {Cards.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className=' m-3 h-[280px] rounded shadow-yellow-500 shadow-sm cursor-pointer hover:shadow-white hover:shadow-xl  transition w-[300px] p-4'>
                                            <p className='text-center '>{item.skill}</p>
                                            <p><CircularProgressbar   text={`${item.percentage}%`} styles={{path:{stroke: '#FFB400'},text:{stroke:'white'}}} value={item.percentage} className='h-[160px] pt-6' /></p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill
