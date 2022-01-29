import React, { createContext, useContext, useState } from 'react'

const ResultContext = createContext({})
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({children}) => {
   const [results, setResult] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const  [searchTerm, setSearchTerm] = useState('Elon Musk')

   // /videos, /search, /images
   const getResult = async (type) => {
      setIsLoading(true)

      const response = await fetch(`${baseUrl}${type}`, {
         method : 'GET',
         headers : {
            'x-user-agent': 'desktop',
            'x-rapidapi-host': 'google-search3.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
         }
      })

      const data = await response.json()
      
   // console.log(data)
      
      if(type.includes('/news')){
         setResult(data.entries)
      }else if(type.includes('/images')){
         setResult(data.image_results)
      }else{
         setResult(data.results)
      }
      
      setIsLoading(false)
   }

   return (
      <ResultContext.Provider value={{ getResult, results, setSearchTerm, searchTerm, isLoading }} >
         {children}
      </ResultContext.Provider>
   )
}

export const useResultContext = () => useContext(ResultContext)
