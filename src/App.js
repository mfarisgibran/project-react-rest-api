import React, { useState, useEffect } from 'react'

export default function App() {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <div>
      <h1>Project React Rest API</h1>
      <p>{isLoading && 'Loading all countries...'}</p>
      <ul>
        {countries.map((country, index) => {
          return <li key={index}>{country.name}</li>
        })}
      </ul>
    </div>
  )
}
