import React,{ useState } from 'react'
import Tours from './Tours'
import toursList from './toursList'

function App() {
  const [tours, setTours] = useState(toursList)
  const removeTour = (id) => {
    let newTours = tours.filter((tour)=>tour.id !== id);
    setTours(newTours);
  };

  return (
    <div className="container">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  )
}

export default App;
