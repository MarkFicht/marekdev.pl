import React, { Component } from 'react';

import picAboutMe from '../../img/o-mnie2.jpg';
import picSkills from '../../img/skills.jpg';
import picProjects from '../../img/projects1.jpg';
import picResume from '../../img/resume.jpg';
import picContact from '../../img/contact.jpg';


class App extends Component {

  state = {
    showHideNavMobile: false
  }

  showNavMobile = () => {
    this.setState({
      showHideNavMobile: !this.state.showHideNavMobile
    })
  }

  render() {
    return (
      <div className="App">
        
        <nav className="nav">
          <header><h1>Marek Ficht - Portfolio</h1></header>

          <button onClick={ this.showNavMobile }>
            <span></span>
          </button>

          <ul>
            <li><button>O mnie</button></li>
            <li><button>Skills</button></li>
            <li><button>Projekty</button></li>
            <li><button>CV</button></li>
            <li><button>Kontakt</button></li>
          </ul>
        </nav>

        <div className="container">
          <div className="grid">

            <div className="grid-item grid-item-1">
              <p>O MNIE</p>
              <button>Read more</button>
              <div className='pic'><img src={ picAboutMe } alt='about-me' /></div>
            </div>

            <div className="grid-item grid-item-2">
              <p>SKILLS</p>
              <button>Read more</button>
              <div className='pic'><img src={ picSkills } alt='skills' /></div>
            </div>

            <div className="grid-item grid-item-3">
              <p>PROJEKTY</p>
              <button>Read more</button>
              <div className='pic'><img src={ picProjects } alt='projects' /></div>
            </div>

            <div className="grid-item grid-item-4">
              <p>CV</p>
              <button>Read more</button>
              <div className='pic'><img src={ picResume } alt='resume' /></div>
            </div>

            <div className="grid-item grid-item-5">
              <p>KONTAKT</p>
              <button>Read more</button>
              <div className='pic'><img src={ picContact } alt='contact' /></div>
            </div>

            <div className="grid-item grid-item-6">
              <p>P1</p>
              <button>Read more</button>
            </div>
            <div className="grid-item grid-item-7">
              <p>P2</p>
              <button>Read more</button>
            </div>
            <div className="grid-item grid-item-8">
              <p>P3</p>
              <button>Read more</button>
            </div>
            <div className="grid-item grid-item-9">
              <p>P4</p>
              <button>Read more</button>
            </div>
            <div className="grid-item grid-item-10">
              <p>P5</p>
              <button>Read more</button>
            </div>
            <div className="grid-item grid-item-11">
              <p>P6</p>
              <button>Read more</button>
            </div>
          </div>
        </div>

        <footer> <span>Marek Ficht - Front End Dev</span> <span>&copy; ALL RIGHTS RESERVED</span> </footer>

      </div>
    );
  }
}

export default App;
