import React from 'react'
import { NavLink } from 'react-router-dom'


export default function ProductMenu() {
  const links = [
    {title: 'Nexxis', url: '/nexxis'},
    {title: 'Blog', url: '/blog'},
    {title: 'About', url: '/about'},
    {title: 'Contact', url: '/contact'},
    {title: 'Login', url:'/login'}
  ].map((attrs) => (
    <NavLink 
      to={attrs.url}
      key={attrs.title}
      className="-m-3 p-3 flex items-start rounded-lg group"
    > 
      <div className="ml-4">
        <p className="text-base font-medium text-noct-teal group-hover:text-noct-gray">
          {attrs.title} 
        </p>
      </div>
    </NavLink>
  ))

  return (
    <div className="absolute right-0 mt-80 mr-28 z-30 transform w-64">
      <div className="bg-noct-black rounded-lg ring-black ring-opacity-5 overflow-hidden pb-5">
        <div className="relative px-5 py-6 gap-8 p-8">
          {links}
        </div>
        <div className="ml-14 mt-5 pb-8">
          <NavLink to="/create-account" className="ease-in duration-200 mx-auto px-4 py-2 rounded-full text-base text-noct-white outline outline-noct-white bg-noct-black hover:bg-noct-white hover:outline-0 hover:text-noct-black"> 
            Create Account 
          </NavLink>
        </div>
      </div>
    </div>
  )
}