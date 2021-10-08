import React from 'react'
import smartsite from './img/smartsite.png'

const Alo = () => {
  return (
    <>
      <div className='banner'>
        <img style={{paddingTop:'30px'}}src={smartsite} width='150'/>
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
              <li class="list-inline-item"><a href='https://www.youtube.com/watch?v=P4UGyADvWVU'target='_blank'><ion-icon name="logo-youtube"></ion-icon></a></li>
              <li class="list-inline-item"><a href='#'><ion-icon name="logo-discord"></ion-icon></a></li>
              <li class="list-inline-item"><a href='#'><ion-icon name="logo-facebook"></ion-icon></a></li>
         </ul>
        <div className='foot'>
           <p><ion-icon name='logo-whatsapp'></ion-icon>: 985847585</p>
           <p><ion-icon name='mail-outline'></ion-icon>: smartsiteconstruction@gmail.com</p>
        </div> 
      </div> 
    </>
  )
}

export default Alo
