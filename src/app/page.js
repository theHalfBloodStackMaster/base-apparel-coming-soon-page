'use client';


import { useState } from "react";
import Image from "next/image";
import backgroundPattern from "../assets/images/bg-pattern-desktop.svg"
import BaseApparelLogo from "../assets/images/logo.svg"
import heroMobile from "../assets/images/hero-mobile.jpg"
import heroDesktop from "../assets/images/hero-desktop.jpg"
import arrowIcon from "../assets/images/icon-arrow.svg"
import errorIcon from "../assets/images/icon-error.svg"


export default function Home() {

const [email, setEmail] = useState('');
const [error, setError] = useState('');

const handleSubmit = (e) => {
  e.preventDefault(); // prevents from reloading the page on email input

  if (email.trim() === ''){
    // email is blank
    setError('Please provide a valid email');
    return;
  }

  // check if the email entered is having correct email pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailPattern.test(email)) {
    setError('Please provide a valid email');
    return;
  }

  // if email is valid
  setError('');
  console.log("Valid Email ", email); 

};

  return (
    <>
      <main className= "flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/2 lg:order-1 lg:flex lg:flex-col lg:min-h-screen">
          <header className="p-8 lg:px-24 lg:pt-12">
            <Image src={BaseApparelLogo} alt="Base Apparel Logo" className="w-32 h-auto" />
          </header>
          <Image src={heroMobile} alt="women in orange shirt" className="w-full h-auto lg:hidden"/>
          <div className="px-8 text-center lg:text-left pt-12 lg:px-24 lg:flex-1 lg:flex lg:flex-col lg:justify-center">
            <h1 className="text-5xl leading-tight tracking-[0.5em]">
              <span className="text-pink-400 font-light uppercase">we're</span>
              <br />
              <span className="text-gray-900 font-semibold uppercase">coming soon</span>
            </h1>
            <p className="text-pink-400 mt-4">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
            </p>
            <form 
            onSubmit={handleSubmit}
            className={`flex flex-row items-center rounded-full mt-8 ${error ? 'border-2 border-red-500' : ' border border-pink-400'}`}>
              <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address" 
              className="flex-1 bg-transparent px-6 py-3 outline-none placeholder:text-pink-400/30"/>
              {error && (
                <Image src={errorIcon} alt="" className="w-6 h-auto mr-2" />
              )}
              <button type="submit" className="bg-red-300 rounded-full px-8 py-3 cursor-pointer hover:bg-red-200 hover:translate-x-2 hover:scale-110 hover:shadow-2xl hover:shadow-fadeout/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 active:translate-x-0 active-scale-100 active-shadow-md transition duration-300">
                <Image src={arrowIcon} alt=""className="w-4 h-auto" />
              </button>
            </form>
            {error && (
              <p className="text-red-500 text-sm mt-2 ml-6 text-left">{error}</p>
            )}
          </div>
        </div>
        <Image src={heroDesktop} alt="women in orange shirt" className="hidden lg:order-2 lg:block lg:w-1/2 lg:h-screen lg:object-cover" />
      </main>
    </>
    );
}
