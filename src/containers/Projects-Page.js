import React, { Component } from 'react';

import ReactLoading from 'react-loading';
import animateScrollTo from 'animated-scroll-to'
import { options, desiredOffset } from '../components/projects/animate-scroll/options'
import styled from 'styled-components'

class Projects extends Component {

    state = {
        loading: true,
        active: false,
        positionY: null
    }

    componentDidMount = () => {
        window.scroll(0, 0)

        const loadingTime = setTimeout( () => {

            this.setState({ loading: false })
            clearTimeout(loadingTime)

            // var timerID = setInterval(function () {
            //     if (window.pageYOffset <= 1500)
            //         window.scrollBy(0, 5);

            //     else
            //         clearInterval(timerID);
            // }, 1);

            let random = Math.floor(Math.random() * (6 - 0)) + 0
            animateScrollTo(desiredOffset[random], options)
        }, 500 );
    }

    navScrollAnimation = param => animateScrollTo( desiredOffset[param], options )
    

    render() {

        if ( this.state.loading ) {
            return (
                <div className='container-loader'>
                    <ReactLoading type='spinningBubbles' color='#bdbec7' width={100} />
                </div>
            )
        }

        return (
            <div className='loading container-subpage'>
                <header>
                    <h3>Projekty</h3>
                </header>

                <nav className='capsules-nav'>
                    <ul>
                        <li><button onClick={e => this.navScrollAnimation(0)}>1</button></li>
                        <li><button onClick={e => this.navScrollAnimation(1)}>2</button></li>
                        <li><button onClick={e => this.navScrollAnimation(2)}>3</button></li>
                        <li><button onClick={e => this.navScrollAnimation(3)}>4</button></li>
                        <li><button onClick={e => this.navScrollAnimation(4)}>5</button></li>
                        <li><button onClick={e => this.navScrollAnimation(5)}>6</button></li>
                    </ul>
                </nav>

                <section>

                    <div className='grid-capsules'>

                        <div className='grid-capsule grid-capsule-1'>
                            <p>Gra multiplayer w czasie rzeczywistym. Wygrywa gracz z lepszym refleksem. Są plany nad dalszym rozwojem( Dodanie Redux, użycie funkcji w FireBase, Context API, itp. )</p> 

                            <div className='repo-links'>
                                <a href='https://github.com/MarkFicht/reflex-game' target='_blank' rel="noopener noreferrer">GitHub</a>
                                <a href='https://gra-reflex.firebaseapp.com/#/' target='_blank' rel="noopener noreferrer">DEMO</a>
                            </div>

                            <span className='half-capsule-up'>Reflex Game</span>
                            <span className='half-capsule-down'>
                                <p>ReactJS</p>
                                <p>FireBase</p>
                                <p>Sass & NPM and more</p>
                            </span>
                        </div>
                        <div className='capsule-number number-1'>
                            <span>1</span>
                        </div>

                        <div className='grid-capsule grid-capsule-2'>
                            <p>Repo z zaawansowanymi stylami w CSS. Znaleźć tu można obiekty 3D, które powstały bez JSa, np. 'Future Gallery'. Strona posiada RWD i przyjazną nawigację.</p>  

                            <div className='repo-links'>
                                <a href='https://github.com/MarkFicht/css-fun' target='_blank' rel="noopener noreferrer">GitHub</a>
                                <a href='https://markficht.github.io/css-fun/build/' target='_blank' rel="noopener noreferrer">DEMO</a>
                            </div>

                            <span className='half-capsule-up'>CSS Fun</span>
                            <span className='half-capsule-down'>
                                <p>jQuery</p>
                                <p>Webpack</p>
                                <p>Babel & NPM and more</p>
                            </span>
                        </div>
                        <div className='capsule-number number-2'>
                            <span>2</span>
                        </div>

                        <div className='grid-capsule grid-capsule-3'>
                            <p>Gra singleplayer, gdzie zbieramy punkty i unikamy kolizji. Skupiłem się na paradygmacie obiektowym, zaś kod jest pisany w czystym JS.</p>

                            <div className='repo-links'>
                                <a href='https://github.com/MarkFicht/Workshop2-furry-game' target='_blank' rel="noopener noreferrer">GitHub</a>
                                <a href='https://markficht.github.io/Workshop2-furry-game/' target='_blank' rel="noopener noreferrer">DEMO</a>
                            </div>

                            <span className='half-capsule-up'>Furry Game</span>
                            <span className='half-capsule-down'>
                                <p>VanilliaJS</p>
                                <p>Webpack</p>
                                <p>NPM</p>
                            </span>
                        </div>
                        <div className='capsule-number number-3'>
                            <span>3</span>
                        </div>

                        <div className='grid-capsule grid-capsule-4'>
                            <p>Aplikacja SPA napisana w React, strona wizytówka. Repo dopiero budowane, pod Mobile First. W planach jest dodanie bazy danych oraz CMSa.</p>

                            <div className='repo-links'>
                                <a href='https://github.com/MarkFicht/karolina-site' target='_blank' rel="noopener noreferrer">GitHub</a>
                            </div>

                            <span className='half-capsule-up'>Karolina Site</span>
                            <span className='half-capsule-down'>
                                <p>ReactJS - SPA</p>
                                <p>ReactApp</p>
                                <p>Sass & NPM and more</p>
                            </span>
                        </div>
                        <div className='capsule-number number-4'>
                            <span>4</span>
                        </div>

                        <div className='grid-capsule grid-capsule-5'>
                            <p>Klasyczna To Do Lista. Celem było pokazanie zasad REST API, Ajax i Expressa. Za 'bazy danych' odpowiada plik *.json</p>

                            <div className='repo-links'>
                                <a href='https://github.com/MarkFicht/NodeJS-express-ajax-restapi' target='_blank' rel="noopener noreferrer">GitHub</a>
                            </div>

                            <span className='half-capsule-up'>ToDo Node</span>
                            <span className='half-capsule-down'>
                                <p>ExpressJS</p>
                                <p>jQ + Ajax + REST</p>
                                <p>NPM and more</p>
                            </span>
                        </div>
                        <div className='capsule-number number-5'>
                            <span>5</span>
                        </div>

                        <div className='grid-capsule grid-capsule-6'>
                            <p>Aplikacja SPA napisana w React, na której się znajdujesz :). Strona wizytówka, gdzie celem była 'prostota' oraz coś innego niż szablony czy WP.</p>

                            <div className='repo-links'>
                                <a href='https://github.com/MarkFicht/marekdev.pl' target='_blank' rel="noopener noreferrer">GitHub</a>
                                <a href='http://marekdev.pl' target='_blank' rel="noopener noreferrer">'DEMO'</a>
                            </div>

                            <span className='half-capsule-up'>My Page</span>
                            <span className='half-capsule-down'>
                                <p>ReactJS - SPA</p>
                                <p>ReactApp</p>
                                <p>Sass & NPM and more</p>
                            </span>
                        </div>
                        <div className='capsule-number number-6'>
                            <span>6</span>
                        </div>

                    </div>
                    
                </section>
            </div>
        )
    }
}

export default Projects;