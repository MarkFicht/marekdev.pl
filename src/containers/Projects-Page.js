import React, { Component } from 'react';

import ReactLoading from 'react-loading';


class Projects extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
        window.scroll(0, 0);

        const loadingTime = setTimeout( () => {

            this.setState({ loading: false })
            clearTimeout(loadingTime);
        }, 500 );
    }

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
                

                <section className='projects-container'>
                    <div className='grid-capsules'>

                        <div className='grid-capsule grid-capsule-1'>
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
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
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
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
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
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
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
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
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
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
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
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