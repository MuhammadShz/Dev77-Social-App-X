
function Button(
  {
    width="15rem",
    bgColor="white",
    btnText="Post",
    hoverbgColor="gray",
    hoverTextColor="black",
  }
) {
  return (
    <div 
      className="p-3 border border-white flex justify-center rounded-4xl font-bold mt-10 cursor-pointer transition-all duration-300 text-[20px]"
      style={{
        backgroundColor: bgColor,
        color: hoverTextColor,
        width: width,
      }}
      onMouseEnter={(e) => e.target.style.backgroundColor = hoverbgColor}
      onMouseLeave={(e) => e.target.style.backgroundColor = bgColor}
    >
      {btnText}
    </div>
  )
}

export default Button