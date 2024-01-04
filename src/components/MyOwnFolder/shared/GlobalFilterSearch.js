import React from 'react'

const GlobalFilterSearch = ({filter,setFilter}) => {
    const handleChange = (e)=>{
        setFilter(e.target.value)
    }
  return (
    <div>
        <h5>
          Search: {""}
            <input  value={filter || ""} onChange={handleChange}/>
        </h5>
      
    </div>
  )
}

export default GlobalFilterSearch
