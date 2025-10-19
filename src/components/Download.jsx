import Button from './Button'
import PhoneMakup from '../assets/phonemakup.png'
import AppleIcon from '../assets/applelogo.png'
import GoogleIcon from '../assets/googleplaylogo.png'

const Download = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-9 lg:px-14 py-14 md:py-9">
      <div className="bg-[#046E1B] w-full relative py-10 md:py-9 lg:py-20 px-6 sm:px-12 md:px-20 lg:px-28 rounded-[20px] overflow-hidden">
        <div className="text-white max-w-full sm:max-w-2xl space-y-6 relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            Embrace the joy of cooking with our app on your iPhone or Android.
            Your kitchen adventure begins now!
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="primary"
              leftIcon={<img src={AppleIcon} alt="Apple" className="w-5 h-5" />}
            >
              App Store
            </Button>
            <Button
              variant="primary"
              leftIcon={
                <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
              }
            >
              Google Play
            </Button>
          </div>
        </div>
        <img
          src={PhoneMakup}
          alt="Phone Mockup"
          className="absolute right-0 bottom-0 w-48 sm:w-64 md:w-80 lg:w-[480px] max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md"
        />
      </div>
    </section>
  )
}

export default Download
