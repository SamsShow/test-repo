import { useState } from 'react'
import './App.css'
import Map from './components/Map'
import movies from './components/movies'

function App() {
  return (
    <div className="store">
      <header className="header">
        <h1>Movie Store</h1>
      </header>
      <div className="grid">
        {movies.map((movie) => (
          <Map 
            key={movie.id} 
            image={movie.image} 
            title={movie.title} 
            language={movie.language} 
            cost={movie.cost} 
          />
        ))}
      </div>
    </div>
  )
}

export default App