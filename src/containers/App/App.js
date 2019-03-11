import React, { Component } from 'react';

import picAboutMe from '../../img/o-mnie1.jpg';
import picSkills from '../../img/skills.jpg';
import picProjects from '../../img/projects1.jpg';
import picResume from '../../img/resume.jpg';
import picContact from '../../img/contact.jpg';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <nav className="nav">
          <header><h1>Marek Ficht - Portfolio</h1></header>

          <button><span></span></button>

          <ul className="nav-1024 nav-1680">
            <li><button>O mnie</button></li>
            <li><button>Skills</button></li>
            <li><button>Projekty</button></li>
            <li><button>CV</button></li>
            <li><button>Kontakt</button></li>
          </ul>
        </nav>

        <div className="container">
          <div className="grid">
            <div className="grid-item grid-item-1"><img src={ picAboutMe } alt='about-me' /></div>
            <div className="grid-item grid-item-2"><img src={ picSkills } alt='skills' /></div>
            <div className="grid-item grid-item-3"><img src={ picProjects } alt='projects' /></div>
            <div className="grid-item grid-item-4"><img src={ picResume } alt='resume' /></div>
            <div className="grid-item grid-item-5"><img src={ picContact } alt='contact' /></div>
            <div className="grid-item grid-item-6">P1</div>
            <div className="grid-item grid-item-7">P2</div>
            <div className="grid-item grid-item-8">P3</div>
            <div className="grid-item grid-item-9">P4</div>
            <div className="grid-item grid-item-10">P5</div>
            <div className="grid-item grid-item-11">P6</div>
          </div>
        </div>

        <footer> Marek Ficht - Front End Dev &copy; ALL RIGHTS RESERVED </footer>

      </div>
    );
  }
}

export default App;
