import React,{ useState } from 'react'


const Tour = ({id,image,title,description,price,removeTour}) => {

  const [readMore,setReadMore] = useState(false);

  return (
  <article className="product">
    <img src={image} alt={title}></img>
    <h4>{title}</h4>
    <h4>{price}</h4>
    <p>
      {readMore ? description : `${description.substring(0,200)}...`}
      <span onClick={()=>setReadMore(!readMore)}>
        {readMore ? <b> Read Less</b> : <b> Read More</b>}
      </span>
    </p>
    <button className="btn" onClick={()=>removeTour(id)}>
      Not Interested
    </button>
  </article>
  )
}

export default Tour;