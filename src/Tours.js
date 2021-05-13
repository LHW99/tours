import React from 'react';
import Tour from './Tour';

const Tours = ({tours,removeTour}) => {
  return(
    <>
      <h1>Tours</h1>
      <section className="products">
          {tours.map((tour)=>{
            return (
              <Tour key={tour.id} {...tour} removeTour={removeTour} />
            )
          })}
      </section>
    </>
  );
};

export default Tours