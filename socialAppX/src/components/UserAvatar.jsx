import React from 'react'

function UserAvatar(
    {
        ImgSrc="https://up.yimg.com/ib/th/id/OIP.OFMlQdJWRGUjT2PNEWN00AHaEK?pid=Api&rs=1&c=1&qlt=95&w=179&h=100",
        ImgAlt="Ai Generated Girl",
        ImgSize="10"
    }
) {
  return (
    <>
      {/* Badge Image Div */}
      <div className={`UserAvatar rounded-full w-${ImgSize} h-${ImgSize}`}>
        <img src={ImgSrc} alt={ImgAlt} className="object-cover w-full h-full rounded-full"/>
      </div>
    </>
  )
}

export default UserAvatar