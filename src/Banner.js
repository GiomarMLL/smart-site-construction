import React from 'react'
import smartsite from './img/smartsite.png'

const Alo = () => {
  return (
    <>
      <div className='banner'>
        <img src={smartsite} width='150'/>
         <div>
            <h2>Página en Construcción</h2>
            <p>Muy pronto te enterarás de los servicios digitales que ofrecemos</p>
         </div> 
         <div class='progress-bar blue stripes shine'>
            <span style={{width:'40%'}}></span>
            <p>40%</p>
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
