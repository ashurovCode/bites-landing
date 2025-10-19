import Button from './Button.jsx'
import MenuCard from './MenuCard.jsx'
import food1 from '../assets/foods/food1.png'
import food2 from '../assets/foods/food2.png'
import food3 from '../assets/foods/food3.png'
import food4 from '../assets/foods/food4.png'
import food5 from '../assets/foods/food5.png'
import food6 from '../assets/foods/food6.png'

const Menu = () => {
  const recipes = [
    {
      image: food1,
      title: 'Creamy Salad',
      time: '10 mins',
      servings: '2 Servings',
      difficulty: 'Easy',
    },
    {
      image: food2,
      title: 'Tofu Tomatoes Soup',
      time: '15 mins',
      servings: '3 Serving',
      difficulty: 'Easy',
    },
    {
      image: food3,
      title: 'Crunchy Potatoes',
      time: '10 mins',
      servings: '2 Servings',
      difficulty: 'Easy',
    },
    {
      image: food4,
      title: 'Mushroom Soup',
      time: '25 mins',
      servings: '2 Servings',
      difficulty: 'Medium',
    },
    {
      image: food5,
      title: 'Raspberry Pancake',
      time: '30 mins',
      servings: '1 Servings',
      difficulty: 'Easy',
    },
    {
      image: food6,
      title: 'Beef Teriyaki',
      time: '20 mins',
      servings: '1 Servings',
      difficulty: 'Medium',
    },
  ]
  return (
    <section className="max-w-7xl mx-auto md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-20 md:py-24">
      <div className="flex w-full justify-between items-center">
        <div>
          <h1 className="text-[22px] md:text-[28px] lg:text-[46px] text-[#000000] font-semibold">
            Discover, Create, Share
          </h1>
          <p className="text-[#7F7D7D] font-light text-[14px] md:text-[16px] lg:text-[24px] max-w-[150px] md:max-w-[250px] lg:max-w-[450px]">
            Check our most popular recipes of this week
          </p>
        </div>
        <Button
          variant="primary"
          className="align-middle text-smpx-4 py-2 md:px-6 md:py-3 text-sm md:text-base"
        >
          See All
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-[70px]">
        {recipes.map((recipe, index) => (
          <MenuCard
            key={index}
            image={recipe.image}
            title={recipe.title}
            time={recipe.time}
            servings={recipe.servings}
            difficulty={recipe.difficulty}
            onClick={() => alert(`Opening ${recipe.title}`)}
          />
        ))}
      </div>
    </section>
  )
}

export default Menu
