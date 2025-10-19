import { Clock, Users, ChefHat } from 'lucide-react' // icons from lucide-react
import Button from './Button'

const MenuCard = ({ image, title, time, servings, difficulty }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer w-full max-w-sm mx-auto">
      <div className="relative w-full h-56">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-[#046E1B]" />
            <span className="text-[#046E1B]">{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-[#046E1B]" />
            <span className="text-[#046E1B]">{servings}</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="w-4 h-4 text-[#046E1B]" />
            <span className="text-[#046E1B]">{difficulty}</span>
          </div>
        </div>

        <h3 className="text-[32px] font-semibold text-[#000000] line-clamp-2">
          {title}
        </h3>

        <a href="#" className="text-[#F79F1A] text-[16px] font-normal">
          View Recipe
        </a>
      </div>
    </div>
  )
}

export default MenuCard
