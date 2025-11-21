import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  //dynamic routing
  const {userid}=useParams()
  return (
    <div className='bg-amber-200 text-black text-3xl text-center py-5'>
      User:{userid}
    </div>
  )
}

export default User
