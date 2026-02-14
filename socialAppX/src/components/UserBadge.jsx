import React from 'react'

function UserBadge() {
  return (
    <div className="p-2 rounded-full hover:bg-[#212121] transistion-all duration-400 flex w-65 cursor-pointer fixed bottom-10  ">
        {/* Badge Image Div */}
    <div className="badgeImage rounded-full w-10 h-10">
        <img src="https://up.yimg.com/ib/th/id/OIP.OFMlQdJWRGUjT2PNEWN00AHaEK?pid=Api&rs=1&c=1&qlt=95&w=179&h=100" alt="" className="object-cover w-full h-full rounded-full"/>
    </div>

    {/* User detail div */}
    <div className="userDetails pl-2 pr-8 rounded-2xl text-sm">
        <p className="font-bold">UserName</p>
        <p className="text-[#71767a]">@username</p>
    </div>

    {/* More div */}
    <div className="More w-20 flex justify-end align-center rounded-2xl">
        ...
    </div>
    </div>
  )
}

export default UserBadge