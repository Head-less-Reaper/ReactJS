import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {

  const data = useLoaderData();

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/Head-less-Reaper")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []); // ← IMPORTANT

  // if (!data) return <p className="text-center text-xl">Loading...</p>;

  return (
    <div className='text-center m-4 bg-gray-950 text-white p-4 text-3xl'>
      GitHub followers : {data.followers}
      <img src={data.avatar_url} width={300} alt="GitHub Avatar" />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async()=>{
  const response = await fetch("https://api.github.com/users/Head-less-Reaper")
  return response.json()
}