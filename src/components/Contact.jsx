import React, { useState } from 'react';
import { FaRegEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const contacts = [
    { icon: <FaRegEnvelope />, link: "https://mail.google.com/mail/?view=cm&fs=1&to=reziaurrehman@gmail.com", text: "reziaurrehman@gmail.com" },
    { icon: <FaGithub />, link: "https://github.com/ziasial007", text: "GitHub" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/muhammad-zia-ul-rehman-831387250/", text: "LinkedIn" }
  ];

  // Form State
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS Credentials
    const serviceID = "service_zxtkjgn";
    const templateID = "template_aqf2zmr";
    const publicKey = "55YnDIkhuNn1M2pEH";

    emailjs.send(serviceID, templateID, form, publicKey)
      .then((response) => {
        // console.log("Email sent successfully!", response);
        alert("Message sent successfully!");
        setForm({ name: '', email: '', message: '' }); // Reset form
      })
      .catch((error) => {
        // console.log("Failed to send email:", error);
        alert("Failed to send message. Please try again later.");
      });
 

  const newErrors = {};
  if (!form.name.trim()) newErrors.name = 'Plz fill the name';
  if (!form.email.trim()) newErrors.email = 'Email is requird';
  if (!form.message.trim()) newErrors.message = 'Message is requird';

  if (Object.keys(newErrors).length < 2) {
    setError(newErrors);
    return;
  }
};

  return (
    <section className='contact bg-[#1F2124]'>
      <div className="container mx-auto p-10 flex flex-wrap w-full">

        <div className="first-side w-full md:w-[50%] min-h-[40vh]">
          <h1 className='text-[40px]'>Contact</h1>
          <p>Send me a message or reach out via the links</p>
        </div>

        <div className="second-side w-full md:w-[50%] min-h-[50vh] md:h-[100vh]">
          <div className="flex flex-col nav-item list-none gap-4">
            <h2 className='text-[30px]'>Reach Out</h2>
            <div className='flex flex-col space-y-2'>
              {contacts.map((item, index) => (
                <div key={index} className='flex items-center gap-2 text-white'>
                  <p className='text-[22px]'>{item.icon}</p>
                  <a
                    className='hover:underline underline-offset-4 cursor-pointer transition-all duration-300 py-1'
                    href={item.link}
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    {item.text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className='mail-portion w-full'>
            <h2 className='text-[30px]'>Or Send a Message</h2>

            <label htmlFor="name" className='sr-only'>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="bg-gray-600 px-4 py-2 w-full my-2 outline-none"
              required
              value={form.name}
              onChange={handleChange}
            />
            {error.name && <p className='text-red-500 text-sm'>{error.name}</p>}

            <label htmlFor="email" className='sr-only'>Email</label>
            <input
              type="email"
              id='email'
              name="email"
              placeholder='Email'
              className='bg-gray-600 px-4 py-2 w-full my-2 outline-none'
              required
              value={form.email}
              onChange={handleChange}
            />
            {error.email && <p className='text-red-600 text-sm'>{error.email}</p>}

            <label htmlFor="message" className='sr-only'>Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder='Message'
              className='bg-gray-600 px-4 py-2 w-full my-2 outline-none'
              required
              value={form.message}
              onChange={handleChange}
            ></textarea>
            {error.message && <p className='text-red-600 text-sm'>{error.message}</p> }
            <button
              type='submit'
              className='bg-red-600 px-8 cursor-pointer py-4 hover:bg-red-700 transition-colors duration-300'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;