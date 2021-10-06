import React from 'react'

const Services = ({title,descripcion,img}) => {
  return (
    <>
        <div class="col card-i">
          <div class="card card-item">
            <img src={img} width='500'class="card-img-top"/>
            <div class="card-body">
             <h4 class="card-title">{title}</h4>
             <p class="card-text">{descripcion}</p>
            </div>
         </div>
       </div> 
    </>
  )
}

export default Services
