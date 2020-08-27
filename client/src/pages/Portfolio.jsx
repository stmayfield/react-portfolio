import React from 'react';
import Header from '../components/Header'
import Carousel from 'react-bootstrap/Carousel'
import PB3 from '../assets/img/portfolio_banner3.png'
import PB2 from '../assets/img/portfolio_banner2.png'
import PB1 from '../assets/img/music_buffet01-2.png'
import PC1 from '../assets/img/portfolio_card1.png'
import PC2 from '../assets/img/portfolio_card2.png'
import PC3 from '../assets/img/portfolio_card3.png'
function Portfolio() {

    return (

        <div>
            <Header header="Portfolio" />
            <div className="row my-4 my-md-2">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={PB3}
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={PB2}
                            alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={PB1}
                            alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div>
            <div class="row mb-2 mb-md-4 text-center">
                <div class="card-deck">
                    <div class="card">
                        <a href="#" target="_blank"><img src={PC1} class="card-img-top"
                            alt="Image of screen computer code without whitespace. Photo by Markus Spiske on Unsplash."></img></a>
                        <div class="card-body">
                            <h5 class="card-title">Project 3</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                            saepe
                            nostrum eveniet atque omnis quo provident animi, quas ut nisi soluta, officia
                                praesentium nulla excepturi? Sed, reiciendis nulla? Dolorem, eos?.</p>
                        </div>
                    </div>

                    <div class="card">
                        <a href="https://stmayfield-organize.herokuapp.com/" target="_blank"><img
                            src={PC2} class="card-img-top"
                            alt="Image of MacBook closed halfway on an office chair. Photo by Ash Edmonds on Unsplash."></img></a>
                        <div class="card-body">
                            <a href="https://stmayfield-organize.herokuapp.com/" target="_blank">
                                <h5 class="card-title">Organize</h5>
                            </a>
                            <p class="card-text">Organize is an application with a secure CMS that allows a
                            designated user to share and post information on behalf of an activist organization
                            pertaining to upcoming protests, civic events, and other opportunities for activism as
                                well as providing a place to share knowledge and resources.</p>
                        </div>
                    </div>

                    <div class="card">
                        <a href="https://gfhiebert.github.io/Music-Buffet/" target="_blank"><img
                            src={PC3} class="card-img-top"
                            alt="Image of black Android phone on wooden desk. Photo by Caspar Camille Rubin on Unsplash."></img></a>
                        <div class="card-body">
                            <a href="https://gfhiebert.github.io/Music-Buffet/" target="_blank">
                                <h5 class="card-title">Music Buffet</h5>
                            </a>
                            <p class="card-text">Music Buffet is an application that utilizes Spotify’s music
                            library to
                            allow a user to quickly navigate through artists and tracks. The application
                            provides a
                            user with options to search for artists, listen to their most popular tracks, and
                                quickly navigate between recommended/related artists for more tracks.</p>
                        </div>
                    </div>
                </div>
            </div>
            <p>
                Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
                mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
                porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
                semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
                rhoncus mollis diam, sit amet facilisis lectus blandit at.
        </p>
        </div >
    )
};

export default Portfolio;