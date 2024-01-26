import React, { useEffect , useState} from 'react'

function About() {

  const [info,setInfo] = useState([]);
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData = async() => {
    const data = await fetch("https://api.github.com/users/Vaishali-Sahu-04")
    const json = await data.json();
    setInfo(json)
  }
  return (
    <div>
      <h1 className=' font-bold text-xl my-6'>Hellow!! Here is my Github Profile</h1>
      <h2 className=' font-medium text-md my-2'>{info.name}</h2>
      <p>{info.bio}</p>
      <img className=' w-96 mt-4' src={info.avatar_url} />
    </div>
  )
}

export default About
