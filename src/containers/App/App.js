import React, { Component } from 'react';

import picAboutMe from '../../img/o-mnie.jpg';
import picSkills from '../../img/skills.jpg';
import picProjects from '../../img/projects.jpg';
import picResume from '../../img/resume.jpg';
import picContact from '../../img/contact.jpg';

const textAboutMe = ['Hej, jestem Marek! Młodszy programista JS. Moja przygoda z światem IT zaczęła się 2 lata temu, po godzinach.', ''];


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

    const showHiveNav = { display: this.state.showHideNavMobile ? 'flex' : 'none' };
    const slowHide = !this.state.showHideNavMobile ? '' : 'slowHide';
    const showCloseBtn = this.state.showHideNavMobile && <button onClick={ this.showNavMobile }>X</button>;

    return (
      <div className="App">
        
        <nav className="nav">
          <header><h1>Marek Ficht: Portfolio</h1></header>

          <button onClick={ this.showNavMobile }>
            <span className={ slowHide } ></span>
          </button>

          <ul style={ showHiveNav }>
            { showCloseBtn }
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
              <h3>O MNIE</h3>
              <p>{ textAboutMe[0] }</p>           
              <button>Read more</button>
              <div className='pic' style={{ backgroundImage: `url("${ picAboutMe }")` }} ></div>
              {/* <div className='pic'><img src={ picAboutMe } alt='about-me' /></div> */}
            </div>

            <div className="grid-item grid-item-2">
              <h3>PROJEKTY</h3>
              <button>Read more</button>
              <div className='pic' style={{ backgroundImage: `url("${ picProjects }")` }} ></div>
              {/* <div className='pic'><img src={ picProjects } alt='projects' /></div> */}
            </div>

            <div className="grid-item grid-item-3">
              <h3>CV</h3>
              <button>Read more</button>
              <div className='pic' style={{ backgroundImage: `url("${ picResume }")` }} ></div>
              {/* <div className='pic'><img src={ picResume } alt='resume' /></div> */}
            </div>

            <div className="grid-item grid-item-4">
              <h3>KONTAKT</h3>
              <button>Read more</button>
              <div className='pic' style={{ backgroundImage: `url("${ picContact }")` }} ></div>
              {/* <div className='pic'><img src={ picContact } alt='contact' /></div> */}
            </div>

            <div className="grid-item grid-item-5">
              <h3>SKILLS</h3>
              <button>Read more</button>
              <div className='pic' style={{ backgroundImage: `url("${picSkills}")` }} ></div>
              {/* <div className='pic'><img src={ picSkills } alt='skills' /></div> */}
            </div>

            <div className="grid-item grid-item-6">
              <h3>P1</h3>
              <button>Read more</button>
            </div>
            <div className="grid-item grid-item-7">
              <h3>P2</h3>
              <button>Read more</button>
            </div>
            <div className="grid-item grid-item-8">
              <h3>P3</h3>
              <button>Read more</button>
            </div>
            <div className="grid-item grid-item-9">
              <h3>P4</h3>
              <button>Read more</button>
            </div>
            <div className="grid-item grid-item-10">
              <h3>P5</h3>
              <button>Read more</button>
            </div>
            <div className="grid-item grid-item-11">
              <h3>P6</h3>
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
