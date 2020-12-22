import React from 'react'
import logo from '../images/final-dusk-coffee-logo-small.png'
import landing_image from '../images/different-coffee.jpg'

const Landing = () => {
  return (
    <div className="flex">
      <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:w-full lg:w-1/2 lg:py-24 lg:px-12">
        <div className="xl:max-w-lg xl:ml-auto">
          <img className="h-10 xl:h-20" src={logo} alt="dusk-coffee"/>
          <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden" src={landing_image} alt="coffee-table"/>
          <h1 className="mt-6 text-4xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
            We make the mornings better.
            <br className="hidden lg:inline"/><span className="text-yellow-900"> We make the nights longer.</span>
          </h1>
          <p className="mt-2 text-gray-600  sm:mt-4 sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eaque earum eligendi id magni numquam praesentium qui totam. Amet explicabo laudantium numquam odio unde. Cupiditate ipsum nam provident similique voluptas!
          </p>
          <div className="mt-4 sm:mt-4 flex justify-center lg:flex-none lg:mt-10">
            <a href="#" className="btn btn-order sm:text-base">Order your happiness</a>
            <a href="#" className="ml-2 btn-secondary btn sm:text-base">Learn More</a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 lg:relative">
        <img className="absolute inset-0 h-full w-full object-cover object-center" src={landing_image} alt="coffee-table"/>
      </div>
    </div>
  )
}

export default Landing