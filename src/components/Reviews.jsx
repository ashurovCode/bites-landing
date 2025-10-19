import { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import ReviewCard from './ReviewCard'
import User1 from '../assets/users/user1.png'
import User2 from '../assets/users/user2.png'
import User3 from '../assets/users/user3.png'
import User4 from '../assets/users/user4.png'
import User1Review from '../assets/reviews/User1Image.png'
import User2Review from '../assets/reviews/User2Image.png'
import User3Review from '../assets/reviews/User3Image.png'
import User4Review from '../assets/reviews/User4Image.png'

const Reviews = () => {
  const sliderRef = useRef(null)

  const reviews = [
    {
      userImage: User1,
      userName: 'Spaghetti Bolognesse',
      userSub: 'Lady Rudy',
      rating: 5,
      reviewText:
        'I have to say, your Spaghetti Bolognese recipe is nothing short of amazing! I`ve always been a fan of Italian cuisine, but I was a bit intimidated by the idea of making this classic at home.',
      reviewImage: User1Review,
      likes: 2,
    },
    {
      userImage: User2,
      userName: 'Roasted Chicken',
      userSub: 'Emily Rose',
      rating: 5,
      reviewText:
        'I`ve always been a bit hesitant to roast a whole chicken, fearing it might be too complicated, but your recipe changed that for me. The instructions were so clear and easy to follow.',
      reviewImage: User2Review,
      likes: 5,
    },
    {
      userImage: User3,
      userName: 'Vegetable Pot Pie',
      userSub: 'Susan H',
      rating: 3,
      reviewText:
        'I`ve always been a fan of hearty comfort food, and the `Ultimate Vegetable Pot Pie` recipe on this platform completely exceeded my expectations.',
      reviewImage: User3Review,
      likes: 3,
    },
    {
      userImage: User4,
      userName: 'Fresh Garden Salad',
      userSub: 'Lilac Laura',
      rating: 4,
      reviewText:
        'I`ve always considered myself a salad enthusiast, and this salad recipe is nothing short of a culinary masterpiece and has taken my love for greens to a whole new level.',
      reviewImage: User4Review,
      likes: 9,
    },
  ]

  const Arrow = ({ onClick, direction }) => (
    <button
      onClick={onClick}
      className="bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100"
      aria-label={direction === 'next' ? 'Next' : 'Previous'}
    >
      {direction === 'next' ? '→' : '←'}
    </button>
  )

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: false,
    adaptiveHeight: false,
    appendDots: (dots) => (
      <div className="flex items-center justify-center space-x-4 mt-8">
        <Arrow
          direction="prev"
          onClick={() => sliderRef.current?.slickPrev()}
        />
        <ul className="flex space-x-2 m-0 p-0 list-none">{dots}</ul>
        <Arrow
          direction="next"
          onClick={() => sliderRef.current?.slickNext()}
        />
      </div>
    ),
    customPaging: () => (
      <button className="w-3 h-3 bg-gray-400 rounded-full"></button>
    ),
    dotsClass: 'slick-dots my-custom-dots',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 relative">
      <h1 className="text-3xl font-bold mb-10 text-center md:text-left">
        From Our Community
      </h1>

      <Slider ref={sliderRef} {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="px-3">
            <ReviewCard {...review} />
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default Reviews
