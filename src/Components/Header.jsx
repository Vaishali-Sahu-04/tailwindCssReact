import React from 'react'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

function Header() {

  const onStatus = useOnlineStatus();
  return (
    <div className='flex justify-between'>
      <div >
        <img className=" w-60 h-28 " 
        src="https://img.freepik.com/free-vector/free-delivery-logo-with-bike-man-courier_1308-48827.jpg?w=1380&t=st=1706071868~exp=1706072468~hmac=cebcc927982d7c284f2453c215fc43bf32c17ff10d7224f063414079dcf4d4c8"/>
      </div>
      <div className="flex justify-between items-center list-none text-2xl font-xs">
        <li className=' px-4'>OnlineStatus{onStatus?"🟢":"🔴"} </li>
        <li className='px-4'><Link>Home</Link></li>
        <li className='px-4'><Link to='/about'>About</Link></li>
        <li className='px-4'><Link to='/contact'>Contact</Link></li>
        <button className='px-4'
        onClick={(e)=>{
          e.target.innerHTML=e.target.innerHTML==="Login" ? "Logout" : "Login";
        }}
        >Login</button>
      </div>
    </div>
  )
}

export default Header
