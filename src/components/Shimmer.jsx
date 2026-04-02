import React from 'react'

const ShimmerCard = () => (
  <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-3">
    <div className="h-40 bg-gray-200 rounded-lg shimmer"></div>
    <div className="h-5 bg-gray-200 rounded w-3/4 shimmer"></div>
    <div className="flex flex-col gap-2">
      <div className="h-3 bg-gray-200 rounded w-full shimmer"></div>
      <div className="h-3 bg-gray-200 rounded w-5/6 shimmer"></div>
      <div className="h-3 bg-gray-200 rounded w-2/3 shimmer"></div>
    </div>
    <div className="flex gap-2 mt-1">
      <div className="h-8 flex-1 bg-gray-200 rounded-lg shimmer"></div>
      <div className="h-8 w-8 bg-gray-200 rounded-full shimmer"></div>
    </div>
  </div>
)

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(6).fill(0).map((_, i) => (
        <ShimmerCard key={i} />
      ))}
    </div>
  )
}

export default Shimmer;