import React, { Component } from 'react'

import ReactLoading from 'react-loading'
import jsImg from '../img/js-logo.png'
import htmlImg from '../img/html-logo.png'
import cssImg from '../img/css-logo.png'
import otherImg from '../img/other-logo (3).png'
import starG from '../img/star-g.png'
import starS from '../img/star-s.png'
import starB from '../img/star-b.png'

/**
 * Images from -> https://icons8.com
 */

const jsTechList = ['NPM', 'React, jQuery', 'ES6, Babel, Bundlers', 'Design patterns']
 const htmlTechList = ['HTML5', 'Mobile first', 'Semantic', 'SEO']
 const cssTechList = ['Sass', 'Grid & Flex', 'RWD', 'Bootstrap']
 const otherTechList = ['FireBase', 'REST API', 'JSON & Json-server', 'ExpressJS']

class Skills extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
        window.scroll(0, 0)

        const loadingTime = setTimeout( () => {

            this.setState({ loading: false })
            clearTimeout(loadingTime)
        }, 500 )
    }

    divLogoTech = logo => <div className='svg-technology' style={{ backgroundImage: `url(${logo ? logo : jsImg})` }}></div>
    divStar = star => <div className='star-technology' style={{ backgroundImage: `url(${star ? star : starG})` }}></div>
    divListTech = techList => (
        <div className='description-technology'>
            { techList 
                ? techList.map( tech => <p>{tech}</p> )
                : null 
            }
        </div>
    )

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
                                { this.divLogoTech(jsImg) }
                                { this.divStar(starS) }
                                { this.divListTech(jsTechList) }
                            </div>
                        </div>

                        <div className='grid-skill grid-skill-2'>
                            <div className='skill-box'>
                                <div className='bg-technology'>
                                    <div className='bg-technology__text'>HTML</div>
                                </div>
                                { this.divLogoTech(htmlImg) }
                                { this.divStar(starG) }
                                { this.divListTech(htmlTechList) }
                            </div>
                        </div>

                        <div className='grid-skill grid-skill-3'>
                            <div className='skill-box'>
                                <div className='bg-technology'>
                                    <div className='bg-technology__text'>CSS</div>
                                </div>
                                { this.divLogoTech(cssImg) }
                                { this.divStar(starG) }
                                { this.divListTech(cssTechList) }
                            </div>
                        </div>

                        <div className='grid-skill grid-skill-4'>
                            <div className='skill-box'>
                                <div className='bg-technology'>
                                    <div className='bg-technology__text'>Inne</div>
                                </div>
                                { this.divLogoTech(otherImg) }
                                { this.divStar(starB) }
                                { this.divListTech(otherTechList) }
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}

export default Skills