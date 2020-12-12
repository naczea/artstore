import React, { useEffect,  useState} from 'react';
import { Link } from 'react-router-dom';
import imagen1 from '../../../img/imagen1.jpg';
import imagen2 from '../../../img/imagen2.png';
import imagen3 from '../../../img/imagen3.jpg';

const Home = () => {

    return (
        <div className="Home_container">
            <nav className="header__nav">
                <div className="nav__logo">
                    <h1>Miell's Art</h1>
                </div>
                <div className="nav__btn">
                    <Link to="/register" className="btn btnnav">Registrarse</Link>
                    <Link to="/login" className="btn btnnav">Iniciar Sesion</Link>
                </div>
            </nav>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={imagen1} class="d-block" alt="algo" id="imgpepa"/>

                    </div>
                    <div class="carousel-item">
                    <img src={imagen2} class="d-block" alt="..." id="imgpepa"/>
                    </div>
                    <div class="carousel-item">
                    <img src={imagen3} class="d-block" alt="..." id="imgpepa"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
                <div className="gallery">
                    <h1>AQUI VA LA</h1>
                </div>
        </div>
    );
};

export default Home;