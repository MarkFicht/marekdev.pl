import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ReactLoading from 'react-loading';

import picAboutMe from '../img/o-mnie.jpg';
import picSkills from '../img/skills.jpg';
import picProjects from '../img/projects.jpg';
import picResume from '../img/resume.jpg';
import picContact from '../img/contact.jpg';
import { FaEnvelope, FaGithub } from 'react-icons/fa';

const textAboutMe = ['Hej, jestem Marek! Młodszy programista JS.', 'Przygoda z programowaniem zaczęła się 2 lata temu, po godzinach.', 'Rozwijam się w technologii ReactJS i nie tylko.', 'Jednym z celów zawodoych jest zostanie Full Stackiem.', 'W życiu staram się znaleźć balans i nie zamykać się na 1 tor myślenia. Póki co, wychodzi to nieźle.', 'Jeśli mam wolny czas, to najchętniej spędzam go na boisku, rywalizacji, grach czy medytacji.'];
const textProjects = ['Znajdziesz tu fajne komercyjne prace :).', 'UWAGA! Nie tylko powszechne ToDoListy.'];
const textResume = ['Zainteresowanych współpracą, zapraszam do przeglądu.'];
const textContact = [];
const textSkills = [];


class Home extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
        window.scroll(0, 0);

        const loadingTime = setTimeout( () => {

            this.setState({ loading: false })
            clearTimeout(loadingTime);
        }, 660 );
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
            <div className="grid">

                <div className="grid-item grid-item-1">
                    <h3>O MNIE</h3> 
                    <p>{ textAboutMe[0] }</p> 
                    <p>{ textAboutMe[1] }</p>        
                    <Link to="/o-mnie">Czytaj więcej</Link>
                    
                    <div className='pic-skew'>
                        <div className='pic' style={{ backgroundImage: `url("${picAboutMe}")` }} ></div>
                    </div>
                </div>

                <div className="grid-item grid-item-2">
                    <h3>PROJEKTY</h3>
                    <p>{ textProjects[0] }</p> 
                    <p>{ textProjects[1] }</p>            
                    <Link to="/projekty">Zobacz</Link>
                    
                    <div className='pic-skew'>
                        <div className='pic' style={{ backgroundImage: `url("${picProjects}")` }} ></div>                    
                    </div>
                </div>

                <div className="grid-item grid-item-3">
                    <h3>CV</h3>      
                    <p>{ textResume[0] }</p>   
                    <Link to="/cv">Pobierz</Link>

                    <div className='pic-skew'>
                        <div className='pic' style={{ backgroundImage: `url("${picResume}")` }} ></div>                    
                    </div>
                </div>

                <div className="grid-item grid-item-4">
                    <h3>KONTAKT</h3>
                    <div className='contact-link'>
                        <FaEnvelope className='my-icon' />
                        <span>marekficht@gmail.com</span>                       
                    </div>
                    <div className='contact-link'>
                        <FaGithub className='my-icon' />
                        <span>github.com/MarkFicht</span>
                    </div>
                    <Link to="/kontakt">Zobacz więcej</Link>
                    
                    <div className='pic-skew'>
                        <div className='pic' style={{ backgroundImage: `url("${picContact}")` }} ></div>                    
                    </div>
                </div>

                <div className="grid-item grid-item-5">
                    <h3>SKILLS</h3>          
                     <Link to="/skills">Zobacz</Link>
                    
                    <div className='pic-skew'>
                        <div className='pic' style={{ backgroundImage: `url("${picSkills}")` }} ></div>                    
                    </div>
                </div>

                <div className="grid-item grid-item-6 shake-1">
                    <h3>-Reflex-</h3>
                    <a href='https://github.com/MarkFicht/reflex-game' target='_blank' rel="noopener noreferrer">GitHub</a>
                </div>

                <div className="grid-item grid-item-7 shake-2">
                    <h3>-CSS Fun-</h3>
                    <a href='https://github.com/MarkFicht/css-fun' target='_blank' rel="noopener noreferrer">GitHub</a>
                </div>

                <div className="grid-item grid-item-8 shake-3">
                    <h3>-Furry-</h3>
                    <a href='https://github.com/MarkFicht/Workshop2-furry-game' target='_blank' rel="noopener noreferrer">GitHub</a>
                </div>

                <div className="grid-item grid-item-9 shake-4">
                    <h3>-RWD Page-</h3>
                    <a href='https://github.com/MarkFicht/karolina-site' target='_blank' rel="noopener noreferrer">GitHub</a>
                </div>

                <div className="grid-item grid-item-10 shake-5">
                    <h3>-ToDo Node-</h3>
                    <a href='https://github.com/MarkFicht/NodeJS-express-ajax-restapi' target='_blank' rel="noopener noreferrer">GitHub</a>
                </div>

                <div className="grid-item grid-item-11 shake-6">
                    <h3>-My Page-</h3>
                    <a href='https://github.com/MarkFicht/marekdev.pl' target='_blank' rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        )
    }
}

export default Home;