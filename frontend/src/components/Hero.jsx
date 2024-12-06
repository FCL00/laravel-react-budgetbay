import React from 'react'
import { FaCalendarDays } from 'react-icons/fa6';
const Hero = ({heading, subHeading, date}) => {
  return (
    <section className="hero-container">
        { date && (
          <div className="bg-yellow-600 font-semibold p-2 rounded-sm text-black flex items-center space-x-1">
            <FaCalendarDays />
            <p>{date}</p>
          </div>
        )}
        <h1 className="heading">{heading}</h1>  
        <p className="sub-heading">
          {subHeading}
        </p>
        {/* search form */}
    </section>
  )
}

export default Hero