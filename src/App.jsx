import { useEffect, useRef, useState } from "react"
import "./App.css"
import useFetch from "./hooks/useFetch"
import getRandomNumber from "./utils/getRandomNumber"
import LocationInfo from "./components/LocationInfo"
import ResidentCard from "./components/ResidentCard"

function App() {

  const [inputValue, setInputValue] = useState(getRandomNumber(126))

  //const [currentPage, setCurrentPage] = useState(getRandomNumber)

  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'hola'}`
  const [location, getLocation, hasError] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [inputValue])

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault() // Evita la recarga de pagina cuando se ejecuta el formulario
    setInputValue(inputSearch.current.value.trim())
  }

  return (
    <div>
      <img className="imgn" src="rickAndMorty.png" alt="Rick And Morty" />
      <form onSubmit={handleSubmit}>
        <div className="gralSearch">
        <input ref={inputSearch} type="text" />
        <button>Search</button>
          </div>
      </form>
      {
       hasError
        ? <h2>❌ Hey! you must provide an id from 1 to 126😭</h2>
       : (
        <>
          <LocationInfo
            location={location} 
          />
          <div className="residents">
            {
             location?.residents.map(url => (
              <ResidentCard
                key={url}
                url={url}
              />
             ))
            }
          </div>
        </>
       )
      }
    </div>
  )
}

export default App
