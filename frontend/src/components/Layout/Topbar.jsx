import React from 'react'
import {TbBrandMeta} from "react-icons/tb"
import {IoLogoInstagram} from "react-icons/io"
import {RiTwitterXLine} from "react-icons/ri"

const Topbar = () => {
  return (
    <div className="bg-brand-colo text-white"> 
      <div className="container mx-auto flex items-center justify-between px-4 py-1">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5"/>
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5"/>
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-5 w-5"/>
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>Pan India Delivery – Because Style Has No Boundaries</span>
        </div>
        <div className=" hidden md:block text-sm">
          <a href="tel:+1234567890" className="hover:text-gray-300"> +91 949275136</a>
        </div>
      </div>
    </div>
  )
}

export default Topbar
