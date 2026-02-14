
import UserAvatar from './UserAvatar'
import SvgComp from './SvgComp'

function PostCreateSection() {
  return (
    <div className='p-4 border-b border-[#2f3336] flex justify-start items-center gap-4'>
        <UserAvatar ImgSize="10" />
        <div className='text-gray-500 text-xl'>
            <input type="text" placeholder="What's happening?" className='bg-transparent w-full text-gray-200 placeholder-gray-500 outline-none' />
        </div>
        <SvgComp  svgSize='25px' pathD='m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z'/>
    </div>
  )
}

export default PostCreateSection