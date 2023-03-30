import React from 'react'
import { NavLink } from 'react-router-dom'

import ProductMenu from './ProductMenu'
import ContactPopOut from './ContactPopOut'
import DropDown from './DropDown'
import MobileNavMenu from './MobileNavMenu'

export default class Header extends React.Component {

  topNav = new Array(
            {title: 'Blog', url: '/blog'},
            {title: 'About', url: '/about'},
          ).map((attrs) => (
            <NavLink 
              to={attrs.url}
              key={attrs.title}
              className="hidden lg:transition-all lg:flex md:items-center lg:text-base lg:font-medium lg:text-noct-teal lg:rounded-md lg:hover:text-noct-gray lg:focus:outline-none lg:focus:ring-2 lg:focus:ring-offset-2 lg:focus:ring-indigo-500"
            > 
              {attrs.title} 
            </NavLink>
          ))

  render() {
    return (
      <header>
        <div className="relative bg-noct-black h-20">
          <div className="sm:mx-20 ml-20">
            <div className="flex justify-between items-center py-5 h-20">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <NavLink to="/" className="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 526.71 138.68" className="h-8 w-auto sm:h-10">
                    <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="fill-noct-blue" d="M70.77,110.28a3.55,3.55,0,0,0-1.9,3.37h0a2.58,2.58,0,0,0,0,.64,4.35,4.35,0,0,0,.1.52,58.28,58.28,0,0,0,2.66,7.08,58.28,58.28,0,0,0,2.66-7.08c0-.17.08-.34.11-.52a2.51,2.51,0,0,0,0-.64h0C74.49,111.32,72.71,109.51,70.77,110.28Z"/><path className="fill-noct-blue" d="M70.77,110.28a3.55,3.55,0,0,0-1.9,3.37h0a2.58,2.58,0,0,0,0,.64,4.35,4.35,0,0,0,.1.52,58.28,58.28,0,0,0,2.66,7.08,58.28,58.28,0,0,0,2.66-7.08c0-.17.08-.34.11-.52a2.51,2.51,0,0,0,0-.64h0C74.49,111.32,72.71,109.51,70.77,110.28Z"/><path className="fill-noct-blue" d="M143.36,64.43c-2.5,9.24-9.24,16.26-16.12,16.66C138,72.34,145,62,141.18,42c-2.6,13.19-6.3,21.07-12.5,23.44,9.62-19.18,5.69-49.22-17.13-65.4a80.49,80.49,0,0,1,5.94,8.25c.26.46.52.92.77,1.38A53,53,0,0,1,107.46,74c-.43.4-1.49,1.23-2.8,2.2a13,13,0,0,0-5.18,11.34,12,12,0,0,0,.28,2c.15.65.28,1.31.39,2,.08.5.16,1,.23,1.51h0a38.06,38.06,0,0,1,.29,4.68q0,1.11-.06,2.19a29.7,29.7,0,0,0-1.73-4.43,28.53,28.53,0,0,0-2.31-4,29.43,29.43,0,0,0-4.13-4.85c.1-.38.17-.76.25-1.14.13-.67.24-1.34.32-2,0-.46.09-.92.12-1.39s.06-1.13.06-1.7a26.48,26.48,0,0,0-.61-5.67c-.15-.69-.32-1.37-.53-2-.19.24-.4.47-.61.7a26.86,26.86,0,0,1-8.66,6.35l-.92.41a30.12,30.12,0,0,0-7.68-1.66c-.83-.07-1.66-.1-2.5-.1h0c-.84,0-1.67,0-2.49.1a30.11,30.11,0,0,0-7.69,1.66l-.91-.41a26.79,26.79,0,0,1-8.67-6.35c-.21-.23-.41-.46-.61-.7-.2.67-.38,1.35-.53,2a26.48,26.48,0,0,0-.6,5.67c0,.57,0,1.13,0,1.7s.07.93.13,1.39c.07.69.19,1.36.32,2q.1.57.24,1.14a30.77,30.77,0,0,0-6.44,8.82,29.66,29.66,0,0,0-1.72,4.43c0-.72-.07-1.45-.07-2.19A36.19,36.19,0,0,1,43,93h0c.06-.51.14-1,.23-1.51.11-.66.23-1.32.38-2a13,13,0,0,0-.91-8.4,13,13,0,0,0-4-4.9c-1.3-1-2.36-1.8-2.79-2.2a51.86,51.86,0,0,1-4.81-5,53,53,0,0,1-6-59.34q.38-.69.78-1.38A80.49,80.49,0,0,1,31.82,0C9,16.18,5.07,46.22,14.69,65.4,8.48,63,4.78,55.15,2.18,42-1.58,62,5.35,72.34,16.12,81.09,9.24,80.69,2.5,73.67,0,64.43c1,19.4,11.81,28,22.25,32.5A18.44,18.44,0,0,1,6.93,90.37c3.74,8.18,9.25,16.44,25.39,19.19C30,110.89,26.24,111,20,109.19a74.77,74.77,0,0,0,16.6,12.92A71.43,71.43,0,0,0,48,127.27a30.18,30.18,0,0,0,23.64,11.41h0a30.12,30.12,0,0,0,23.64-11.41,71,71,0,0,0,11.44-5.16,74.77,74.77,0,0,0,16.6-12.92c-6.24,1.8-9.94,1.7-12.32.37,16.15-2.75,21.66-11,25.39-19.19a18.44,18.44,0,0,1-15.32,6.56C131.56,92.47,142.38,83.83,143.36,64.43ZM96.67,115a7.11,7.11,0,0,1-3.29,4.33,43.18,43.18,0,0,1-21.7,5.83h0A43.11,43.11,0,0,1,50,119.28a7.09,7.09,0,0,1-3.3-4.33,25.85,25.85,0,0,1-.81-6.45,25.4,25.4,0,0,1,.57-5.41,25.78,25.78,0,0,1,6.6-12.42,24,24,0,0,1,2.34-2.16,7.91,7.91,0,0,1,6.86-1.65l.21.06c.31.09.62.2.92.31a12.91,12.91,0,0,1,8.3,12.06h0A12.9,12.9,0,0,1,80,87.23c.3-.11.6-.22.91-.31l.21-.06A7.93,7.93,0,0,1,88,88.51a26.49,26.49,0,0,1,2.34,2.16,25.76,25.76,0,0,1,6.59,12.42,25.4,25.4,0,0,1,.58,5.41A25.85,25.85,0,0,1,96.67,115Z"/><path className="fill-noct-blue" d="M65.33,99.38A43.21,43.21,0,0,1,57,97.32a1.68,1.68,0,0,0-2,.76,6.27,6.27,0,1,0,11.48,5,5.84,5.84,0,0,0,.37-2A1.7,1.7,0,0,0,65.33,99.38Z"/><path className="fill-noct-blue" d="M65.33,99.38A43.21,43.21,0,0,1,57,97.32a1.68,1.68,0,0,0-2,.76,6.27,6.27,0,1,0,11.48,5,5.84,5.84,0,0,0,.37-2A1.7,1.7,0,0,0,65.33,99.38Z"/><path className="fill-noct-blue" d="M86.4,97.32A43.21,43.21,0,0,1,78,99.38,1.67,1.67,0,0,0,76.59,101h0a6.29,6.29,0,0,0,12.57.2,6.19,6.19,0,0,0-.7-3.09A1.7,1.7,0,0,0,86.4,97.32Z"/><path className="fill-noct-blue" d="M86.4,97.32A43.21,43.21,0,0,1,78,99.38,1.67,1.67,0,0,0,76.59,101h0a6.29,6.29,0,0,0,12.57.2,6.19,6.19,0,0,0-.7-3.09A1.7,1.7,0,0,0,86.4,97.32Z"/><path className="fill-noct-white" d="M205.8,71.41V109h-9.62l-24.26-24.7V109H161.34V71.41h11.6l22.28,23v-23Z"/><path className="fill-noct-white" d="M215.68,90.2c0-12.73,9.61-20,24.48-20s24.53,7.3,24.53,20-9.66,20-24.53,20S215.68,102.92,215.68,90.2Zm37.85,0c0-7.09-5.1-11.12-13.37-11.12s-13.37,4-13.37,11.12,5.1,11.11,13.37,11.11S253.53,97.29,253.53,90.2Z"/><path className="fill-noct-white" d="M308,95.57l9.4,4.83c-3.49,5.53-11.06,9.83-21.21,9.83-14.17,0-23.73-7.36-23.73-20s9.56-20,24.16-20c9.72,0,17.23,4.4,20.62,9.77l-9.45,4.84c-2.47-3.87-6.28-5.7-11.33-5.7-7.73,0-12.89,3.92-12.89,11.12s5.16,11.11,12.89,11.11C301.48,101.31,305.34,99.59,308,95.57Z"/><path className="fill-noct-white" d="M364.56,80.16H348.94V109H338V80.16H322.47V71.41h42.09Z"/><path className="fill-noct-white" d="M416,71.41V91.27c0,11.44-7.78,19-21.8,19s-21.85-7.52-21.85-19V71.41H383.3v19c0,6.55,3.65,10.8,10.9,10.8s10.85-4.25,10.85-10.8v-19Z"/><path className="fill-noct-white" d="M459.28,109l-9.94-11.87H438.28V109h-10.9V71.41h26.36c9.62,0,17.08,4.24,17.08,12.83,0,6.28-4,10.25-9.88,12L472,109Zm-6.34-19.81c3.92,0,6.76-1.08,6.76-4.73s-2.84-4.72-6.76-4.72H438.23v9.45Z"/><polygon className="fill-noct-white" points="507.28 71.41 495.31 71.41 475.87 108.99 487.36 108.99 501.21 80.7 515.06 108.99 526.71 108.99 507.28 71.41"/></g></g>
                  </svg>
                </NavLink>
              </div>
              <nav className="lg:flex space-x-10 h-full p-0">
                <DropDown 
                  buttonStyles="hidden sm:hidden lg:text-noct-teal group lg:rounded-md lg:inline-flex lg:items-center lg:text-base lg:font-medium lg:hover:text-noct-gray"
                  buttonContent={<><span>Products</span><svg className="mtext-noct-teal ml-2 md:h-5 w-5 group-hover:text-noct-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg></>}
                  menu={<ProductMenu />}
                />
                {this.topNav}
                <DropDown 
                  buttonStyles="hidden sm:hidden lg:text-noct-teal group lg:rounded-md lg:inline-flex lg:items-center lg:text-base lg:font-medium lg:hover:text-noct-gray"
                  buttonContent={<span>Contact</span>}
                  menu={<ContactPopOut />}
                />
              </nav>
              <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
                <NavLink to="/login" className="transition-all whitespace-nowrap text-base font-medium text-noct-teal hover:text-noct-gray"> 
                  Log In 
                </NavLink>
                <NavLink to="/create-account" className="ease-in duration-200 ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-full text-base font-medium text-noct-white outline outline-noct-white bg-noct-black hover:bg-noct-white hover:outline-0 hover:text-noct-black"> 
                  Create Account 
                </NavLink>
              </div>
              <DropDown
                buttonStyles=""
                buttonContent={<svg className="lg:hidden px-0 h-16 py-5 fill-noct-white" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 122.879 103.609" enableBackground="new 0 0 122.879 103.609" xmlSpace="preserve"><g><path fillRule="evenodd" clipRule="evenodd" d="M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z M10.368,82.875 h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,103.609,0,98.944,0,93.242l0,0 C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z M10.368,41.438h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,0C0,46.103,4.666,41.438,10.368,41.438 L10.368,41.438z"/></g></svg>}
                menu={<MobileNavMenu />}
              />
            </div>
          </div>
        </div>
      </header>
    )
  }
}