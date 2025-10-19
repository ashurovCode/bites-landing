import AboutBgimg from '../assets/aboutusimg.png'
import Button from './Button'

const About = () => {
  return (
    <section
      className="w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${AboutBgimg})` }}
    >
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 flex justify-center">
        <div className="bg-white rounded-2xl shadow-lg w-full md:w-2/3 lg:w-1/2 p-6 md:p-10 relative">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            About Us
          </h2>
          <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed mt-4">
            Our recipes are the heart and soul of our culinary community, and
            they reflect our commitment to providing you with memorable and
            delightful dining experiences.
          </p>
          <Button variant="primary" size="md" className="mt-6">
            Learn More
          </Button>

          <div className="absolute -bottom-10 left-4 md:-bottom-12 md:left-6 bg-white rounded-2xl px-4 py-3 md:px-6 md:py-4 text-[#046E1B] shadow-lg text-center md:text-left w-[200px] md:w-[250px]">
            <h3 className="text-sm md:text-base lg:text-lg font-semibold">
              50+ Quick Food Recipes That Are Easy To Do!
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
