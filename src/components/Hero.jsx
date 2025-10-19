import Button from './Button.jsx'
import HeroImg from '../assets/heroimage.png'

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-20 md:py-24">
      <div className="flex-1 text-center md:text-left space-y-6 md:pr-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Cooking Made Fun and Easy: Unleash Your Inner Chef
        </h1>

        <p className="text-[#7F7D7D] text-lg max-w-lg mx-auto md:mx-0">
          Discover more than{' '}
          <span className="font-semibold text-[#F79F1A]">10,000 recipes</span>{' '}
          in your hand with the best recipe collection. Find the easiest way to
          cook your favorite meals.
        </p>

        <div className="pt-4">
          <Button variant="primary">Explore Recipes</Button>
        </div>
      </div>

      <div className="flex-1 mt-12 md:mt-0 flex justify-center md:justify-end">
        <img
          src={HeroImg}
          alt="Cooking hero"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
        />
      </div>
    </section>
  )
}

export default Hero
