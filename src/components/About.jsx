import React from 'react'
import zia from '../images/zia.png'
const About = () => {
    return (
        <>
            <section className='about py-[40px] flex flex-wrap md:flex-row flex-col overflow-hidden  bg-black'>
                <div className="first-side md:w-[36%] w-[100%] ">
                    <img src={zia} alt="" className='md:w-[400px] hidden md:block mx-auto rounded md:rounded-3xl' />
                </div>
                <div className='relative text-white md:w-[60%]  mx-auto'>
                    <h1 className='text-[80px] top-5 px-2 text-gray  absolute opacity-15'>ABOUT</h1>
                    <div className="second-side w-[60%] mx-3 ">
                        <h3 className='text-[30px] md:text-[50px] pb-6  text-white font-bold md:w-full whitespace-nowrap'>
                            About me
                        </h3>
                        <p className="text-[#8f8d8d] ">
                            Passionate front-end developer skilled in HTML, CSS, JavaScript, and React.
                        </p>
                        <div className=" text-white  rounded-lg w-full ">
                            <table className="w-[150%]  border-separate border-spacing-y-2 ">
                                <tbody>
                                    <tr>
                                        <td className="font-semibold pr-4">Name:</td>
                                        <td className="text-[#afaeae]">Zia Ul Rehman</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold pr-4">Date of Birth:</td>
                                        <td className="text-[#afaeae]">Jun 10, 2000</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold pr-4">Address:</td>
                                        <td className="text-[#afaeae]">Liaquat Pur, Rahim Yar Khan</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold pr-4">Zip Code:</td>
                                        <td className="text-[#afaeae]">64000</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold pr-4">Email:</td>
                                        <td className="text-[#afaeae]">reziaurrehman</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold pr-4">Phone:</td>
                                        <td className="text-[#afaeae]">+923088526284</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About
