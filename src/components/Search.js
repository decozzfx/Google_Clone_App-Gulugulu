import React, {useState, useEffect } from 'react'

import { useDebounce } from 'use-debounce'

import { useResultContext } from '../context/ResultContextProvider'

import Links from './Links' 

const Search = () => {
    const { setSearchTerm } = useResultContext()
    
    const [ text, setText] = useState('')
    const [debouncedValue] = useDebounce(text, 300)

    useEffect(() => {
        if(debouncedValue) setSearchTerm(debouncedValue)
    }, [debouncedValue])

    return (
        <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
            <input type="text" value={text} className='sm:w-96 w-80 dark:bg-gray-200 rounded-full shadow-sm outline-none p-3 text-black hover:shadow-lg' placeholder='Search..' onChange={(e) => setText(e.target.value)} />
            {text && (
                <button type='button' className='absolute top-1.5 right-4 text-2xl text-gray-500 ' onClick={() => setText('')} >
                    x
                </button>
            )}
            <Links/>
        </div>
    )
}

export default Search
