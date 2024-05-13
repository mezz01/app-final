import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/navbar.css'

function NavBar() {
  const location = useLocation()
  
  return (
    <div className='w-full bg-zinc-900 FlexBetween px-16 py-8 sticky top-0 z-10'>
      <Link to='/'><h1 className='h-11 text-4xl font-bold gradient-title'>SurveyApp</h1></Link>
      {location.pathname !== '/CreateSurvey' && <Link to="/CreateSurvey"><div className='primaryGreenBtn'>Create a new survey</div></Link>}
    </div>
  )
}

export default NavBar