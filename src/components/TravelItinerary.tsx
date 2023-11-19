import React from 'react'

interface Activity {
  day: number
  description: string
  timestamp: string
}

interface TravelItineraryProps {
  activities: Activity[]
}

export const TravelItinerary: React.FC<TravelItineraryProps> = ({
  activities,
}) => {
  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center justify-center">
          <div className="mr-3 h-2 w-2 rounded-full bg-gray-300"></div>
          <div className="flex flex-1 justify-between">
            <div>{activity.description}</div>
            <div>{activity.timestamp} giorni</div>
          </div>
        </div>
      ))}
    </div>
  )
}
