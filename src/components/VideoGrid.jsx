import React from 'react'
import VideoCard from './VideoCard'

export default function VideoGrid(){
    return (
        <div className='w-full'>
            <div className="
                    grid 
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                    gap-6
                  ">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <VideoCard key={i} />
                    ))}
                  </div>
        </div>
    )
}