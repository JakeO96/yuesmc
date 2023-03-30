import React from 'react'
import { NavLink } from 'react-router-dom'


export default function LegalFooter() {
  let links

  links = [
            {title: 'Privacy Policy', url: '/privacy-policy'},
            {title: 'Terms Of Service', url: '/terms-of-service'},
          ].map((attrs) => (
            <NavLink 
              to={attrs.url}
              key={attrs.title}
              className="rounded-lg px-3 py-2 text-slate-700 font-medium underline hover:no-underline"
            > 
              {attrs.title} 
            </NavLink>
          ))

  return (
    <div className="flex justify-center bg-noct-white w-full bottom-0">
    {links}
    </div>
  )
}
