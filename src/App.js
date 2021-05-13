import React,{ useState } from 'react'
import Tours from './Tours'
import toursList from './toursList'

function App() {
  const [tours, setTours] = useState(toursList)
  const removeTour = (id) => {
    let newTours = tours.filter((tour)=>tour.id !== id);
    setTours(newTours);
  };
  const resetTour = () =>{
    setTours(toursList)
  }

  if (tours.length === 0){
    return (
      <div className="container">
        <h4>No more tours!</h4>
        <button className="btn" onClick={()=>resetTour()}>Refresh</button>
      </div>
    )
  }

  return (
    <div className="container">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  )
}

export default App;
