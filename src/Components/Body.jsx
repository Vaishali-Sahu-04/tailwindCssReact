import React, { useEffect , useState} from 'react'
import Cart from './Cart'
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { CARDS_API } from '../utils/constant';
import useOnlineStatus from '../utils/useOnlineStatus';

function Body() {

    const [resList,setResList]=useState([]);
    const [dupList,setdupList]=useState([]);
    const [searchText,setSearchText]=useState("");
    
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async() => {
        const data= await fetch(CARDS_API);
        const json= await data.json();
        //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setResList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setdupList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    const onStatus = useOnlineStatus();

    if(onStatus===false) return <h1>You are offline!! Please check your internet connection</h1>

  return resList.length===0 ? <Shimmer/> : (
    <div className='body'>
      <div className="flex my-6 px-4 items-center">
        <div className=' pr-6'>
        <button className='border border-solid border-gray-700 p-1 rounded-md bg-green-100'
          onClick={()=>{
          const filtered = resList.filter((res)=>res.info.avgRating>4)
          setdupList(filtered);
        }}>Top Rated Restaurant
        </button>
        </div>
        <div className=" border-solid border-gray-700 p-1 rounded-md">
        <input className='p-1 bg-slate-100 border border-solid border-gray-500 rounded-md' 
        type="text" value={searchText}
        onChange={(e)=>{
          setSearchText(e.target.value)
        }}
        />
        <button className='border border-solid border-gray-700 p-1 rounded-md bg-green-100' onClick={()=>{
          const filtered = resList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
          setdupList(filtered);
        }}>Search</button>
        </div>
        
      </div>   
      <div className="flex flex-wrap">
        {
            dupList.map((res)=>(
              <Link key={res.info.id} to='/restaurant'>
              <Cart resData={res}/>
              </Link>
            ))
        }
      </div>
    </div>
  )
}

export default Body
