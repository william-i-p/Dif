import React from 'react'
import logo from '../img/home-tracking/pprematrimoniales.png';
import inapam from '../img/home-tracking/tarjeta60ymas.jpg';
import matriminial from '../img/home-tracking/platicasPrematiminiales.jpg';

function BannerNoticias() {
  return (
    <div className='row'>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={inapam} alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={matriminial} alt="Second slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
  )
}

export default BannerNoticias;