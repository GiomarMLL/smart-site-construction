import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Button } from 'react-bootstrap'
import Services from './Services'
import services_data from './services_data'
import Portfolio from './Portfolio'
import portfolios_data from './portfolio_data'

const App = () => {
  return (
  <>
    <nav class='navbar fixed-top navbar-expand-lg navbar-dark nav-transparent'id='navbar'>
      <div class='container'>
        <a class='navbar-brand' href='#'>
          Smart Site Construction
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-1">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
           
            <li class="nav-item">
              <a class="nav-link" href="#">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
           
          </ul>
          <ul class='navbar-nav ml-auto list-inline red-social'>
              <li class="list-inline-item"><a href='#'><ion-icon name="logo-instagram"></ion-icon></a></li>
              <li class="list-inline-item"><a href='#'><ion-icon name="logo-twitter"></ion-icon></a></li>
              <li class="list-inline-item"><a href='#'><ion-icon name="logo-youtube"></ion-icon></a></li>
              <li class="list-inline-item"><a href='#'><ion-icon name="logo-discord"></ion-icon></a></li>
              <li class="list-inline-item"><a href='#'><ion-icon name="logo-facebook"></ion-icon></a></li>
          </ul>
           
        </div>
        
      </div>

    </nav>

    <div id='intro'>
       <div class='container'>
           <div class='content-center topmargin-lg'>
               <h1>Gestión Inteligente de Proyectos de Construcción</h1>
               <p>La construcción de la mano con la tecnología</p>
               <a href='#sec-1'class='btn btn-border'>Ver más</a>
             </div>
       </div>
    </div>

    <section id='sec-1'>
      <div class='content-center'>
        <h2>¿Quiénes Somos?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget sapien eget eros dignissim congue. Proin a justo mi. Cras sem lorem, dictum varius ipsum ac, laoreet euismod magna. 
          Donec ultrices sem et feugiat dignissim. Nunc vel purus dui. Vivamus maximus massa vitae orci interdum, id varius magna iaculis. Quisque fringilla placerat velit. 
          Etiam id nunc quis sem varius auctor. Suspendisse potenti. Nam et massa non risus lobortis cursus. Mauris vitae rutrum eros. Nulla a mauris ut arcu 
        </p>
      </div>  
    </section>

    <section id='sec-services'>
        <div class="row row-cols-1 row-cols-md-4 g-4">
         {services_data.map(service_data=>{
            const {title,descripcion,img} = service_data
            return(
              <Services
                 title={title}
                 descripcion={descripcion}
                 img={img}
              />
            )
         })}   
        </div>  
    </section>

    <section id='sec-portfolio'>
      <div class='row'>
        <div class='col-md-6'>
          <Accordion class='accordion'defaultActiveKey="0">
          {portfolios_data.map(portfolio_data=>{
              const {id,title,paragraph,img} = portfolio_data
              return(
               <Portfolio
                 id={id}
                 title={title}
                 paragraph={paragraph}
                 img={img}
               />
              )
          })}  
          </Accordion> 
        </div>
        <div class='col-md-6'>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class='embed-responsive-item youtube'src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"  allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
  </>
   
  )
}

export default App
