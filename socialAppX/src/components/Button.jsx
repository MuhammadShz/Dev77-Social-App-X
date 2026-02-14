import React from 'react'

function Button(
  {
    width="60",
    bgColor="white",
    btnText="Post",
    hoverbgColor="gray",
    hoverTextColor="black"
  }
) {
  return (
    <div className={`p-3 border border-white flex justify-center rounded-4xl bg-${bgColor} text-${hoverTextColor} font-bold w-${width} mt-10 hover:bg-${hoverbgColor}-300 cursor-pointer transistion-all duration-300 text-[20px]`}>{btnText}</div>
  )
}

export default Button