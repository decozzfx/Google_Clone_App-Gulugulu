import React, { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Routes from './components/Routes'
import { useNavigate } from 'react-router-dom'

const App = () => {
   const [darkTheme, setDarkTheme] = useState(false)

   const Navigate = useNavigate()

   useEffect(() => {
      Navigate("/search")
   },[])

   return (
      <div className={darkTheme ? 'dark' : ''}>
         <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <Routes/>
            <Footer/>
         </div>
      </div>
   )
}

export default App
