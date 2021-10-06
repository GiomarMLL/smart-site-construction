import React from 'react'

const Alo = () => {
  return (
    <>
      <div className='banner'>
         <div>
            <h2>Página en Construcción</h2>
            <p>El sitio web estará listo pronto</p>
         </div> 
         <div class='progress-bar blue stripes shine'>
            <span style={{width:'18%'}}></span>
            <p>10%</p>
         </div>
         <ul className='red-social'>
              <li class="list-inline-item"><a href='#'><ion-icon name="logo-instagram"></ion-icon></a></li>
              <li class="list-inline-item"><a href='#'><ion-icon name="logo-twitter"></ion-icon></a></li>
              <li class="list-inline-item"><a href='#'><ion-icon name="logo-youtube"></ion-icon></a></li>
              <li class="list-inline-item"><a href='#'><ion-icon name="logo-discord"></ion-icon></a></li>
              <li class="list-inline-item"><a href='#'><ion-icon name="logo-facebook"></ion-icon></a></li>
         </ul>
      </div> 
    </>
  )
}

export default Alo
