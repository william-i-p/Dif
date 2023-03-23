import React, { useState } from 'react'

function SearchBar({ placeholder, data }) {
   const [fillteredData, setFillteredData] = useState([])
   const handleFilter = (event) => {
      const searchWord = event.target.value
      const newFilter = data.filter((value) => {
         return value.title.toLowerCase().includes(searchWord.toLowerCase())
      })
      if (searchWord === '') {
         setFillteredData([])
      } else {
         setFillteredData(newFilter)
      }
   }
   return (
      <div className='search'>
         <div className='searchInputs'>
            <input
               type='text'
               className='border-0'
               placeholder={placeholder}
               onChange={handleFilter}
            />
         </div>
         {fillteredData.length != 0 && (
            <div className='dataResult position-absolute p-2'>
               {fillteredData.slice(0, 1).map((value, key) => {
                  return (
                     <a className='dataItem' href={value.link}>
                        <p>{value.title}</p>
                     </a>
                  )
               })}
            </div>
         )}
      </div>
   )
}

export default SearchBar
