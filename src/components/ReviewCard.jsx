import { Star } from 'lucide-react' // or any icon library you prefer
import { ThumbsUp, Share2 } from 'lucide-react'

const ReviewCard = ({
  userImage,
  userName,
  userSub,
  rating = 5,
  reviewText,
  reviewImage,
  likes = 0,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <img
          src={userImage}
          alt={userName}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{userName}</h4>
          <p className="text-gray-500 text-sm">{userSub}</p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      <p className="text-gray-700 text-sm md:text-base">{reviewText}</p>

      {reviewImage && (
        <img
          src={reviewImage}
          alt="review"
          className="w-full h-48 object-cover rounded-lg"
        />
      )}

      <div className="flex items-center gap-4 mt-2 text-gray-500 text-sm">
        <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
          <ThumbsUp className="h-4 w-4" />
          <span>{likes}</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
