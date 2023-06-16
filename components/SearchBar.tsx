'use client'

import { SearchManufacturer } from "@components"
import { useState } from "react"

const SearchBar = () => {
    const [manuFacturer, setManuFacturer] = useState("")
    const handleSearch = () => {}
  return (
   <form className="searchabr" onSubmit={handleSearch}>
    <div className="searchabr__item">
        <SearchManufacturer
        manufacturer={manuFacturer}
        setManuFacturer={setManuFacturer}
        />
    </div>
   </form>
  )
}

export default SearchBar
