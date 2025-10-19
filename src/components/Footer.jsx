import React from 'react'
import Button from './Button'
import Logo from '../assets/logo.png'
import Salad from '../assets/Salad.png'

const Footer = () => {
  return (
    <footer className="bg-white max-w-7xl mx-auto py-12 px-6 md:px-12 lg:px-20 pb-5">
      <div className="flex items-center mb-10">
        <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
        <span className="font-bold text-green-700 text-2xl">Bites</span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 relative">
        <div>
          <h3 className="font-semibold mb-4">Menu</h3>
          <ul className="space-y-2 text-gray-800">
            {['Home', 'Recipe', 'Community', 'About Us'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#F39D1A]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-800">
            {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drink'].map(
              (item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#F39D1A]">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Social</h3>
          <ul className="space-y-2 text-gray-800">
            {['Instagram', 'Twitter', 'Youtube', 'Facebook'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#F39D1A]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 flex flex-col items-start space-y-3">
          <h3 className="font-semibold mb-2">Sign up for our newsletter</h3>
          <div className="flex w-full">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 px-4 py-2 border-b border-gray-400 focus:outline-none focus:border-green-700"
            />
            <Button variant="primary" className="ml-2 px-4 py-2 text-white">
              Submit
            </Button>
          </div>
        </div>

        {/* Fun icons */}
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl">
          🥗
        </span>
        <span className="absolute top-1/3 right-20 text-7xl">🍳</span>
        <span className="absolute bottom-20 left-20 text-5xl">
          <img src={Salad} alt="" />
        </span>
      </div>
    </footer>
  )
}

export default Footer
