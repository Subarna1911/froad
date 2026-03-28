import React from 'react'
import design from "../assets/design.webp";

const Lace = () => {
  return (
    <div
              className="h-40 bg-repeat-x bg-center bg-contain"
              style={{ backgroundImage: `url(${design})` }}
            />
  )
}

export default Lace
