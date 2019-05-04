import React, { Component } from 'react'

import ReactLoading from 'react-loading'
import jsImg from '../img/js-logo.png'
import htmlImg from '../img/html-logo.png'
import cssImg from '../img/css-logo.png'
import otherImg from '../img/other-logo (3).png'


class Skills extends Component {

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
                    <h3>Skills</h3>
                </header>
                
                <section>
                    <div className='grid-skills-box'>

                        <div className='grid-skill grid-skill-1'>
                            <div className='skill-box'>
                                <div className='bg-technology'>
                                    <div className='bg-technology__text'>JS</div>
                                </div>
                                <div className='svg-technology' style={{ backgroundImage: `url(${jsImg})` }}></div>
                                <div className='star-technology'>gold</div>
                                <div className='description-technology'>
                                    <p>React</p>
                                    <p>React</p>
                                    <p>React</p>
                                    <p>React</p>
                                </div>
                            </div>
                        </div>

                        <div className='grid-skill grid-skill-2'>
                            <div className='skill-box'>
                                <div className='bg-technology'>
                                    <div className='bg-technology__text'>HTML</div>
                                </div>
                                <div className='svg-technology' style={{ backgroundImage: `url(${htmlImg})` }}></div>
                                <div className='star-technology'>gold</div>
                                <div className='description-technology'>
                                    <p>React</p>
                                    <p>React</p>
                                    <p>React</p>
                                    <p>React</p>
                                </div>
                            </div>
                        </div>

                        <div className='grid-skill grid-skill-3'>
                            <div className='skill-box'>
                                <div className='bg-technology'>
                                    <div className='bg-technology__text'>CSS</div>
                                </div>
                                <div className='svg-technology' style={{ backgroundImage: `url(${cssImg})` }}></div>
                                <div className='star-technology'>gold</div>
                                <div className='description-technology'>
                                    <p>React</p>
                                    <p>React</p>
                                    <p>React</p>
                                    <p>React</p>
                                </div>
                            </div>
                        </div>

                        <div className='grid-skill grid-skill-4'>
                            <div className='skill-box'>
                                <div className='bg-technology'>
                                    <div className='bg-technology__text'>Inne</div>
                                </div>
                                <div className='svg-technology' style={{ backgroundImage: `url(${otherImg})` }}></div>
                                <div className='star-technology'>gold</div>
                                <div className='description-technology'>
                                    <p>React</p>
                                    <p>React</p>
                                    <p>React</p>
                                    <p>React</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}

export default Skills;