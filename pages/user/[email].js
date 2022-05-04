import { useRouter } from 'next/router'
import UserPage from '../../src/UserPage'
import { useState, useEffect } from 'react'
const User = () => {
    const [email, setEmail] = useState([])
    const router = useRouter()

    useEffect(() => {
      setEmail(router.query.email);
  }, [router.query.email]);
console.log(email)
  
  
    
  return ( 
      <UserPage userEmail={email}/>
  )
}

export default User;