import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <nav className="nav">
          <header><h1>Marek Ficht - Portfolio</h1></header>

          <button><span></span></button>

          <ul className="nav-1024">
            <li><button>O mnie</button></li>
            <li><button>Umiejętności</button></li>
            <li><button>Projekty</button></li>
            <li><button>CV</button></li>
            <li><button>Kontakt</button></li>
          </ul>
        </nav>

        <div className="container">
          <div className="grid">
            <div className="grid-item grid-item-1">O MNIE</div>
            <div className="grid-item grid-item-2">UMIEJĘTNOŚCI</div>
            <div className="grid-item grid-item-3">PROJEKTY</div>
            <div className="grid-item grid-item-4">CV</div>
            <div className="grid-item grid-item-5">KONTAKT</div>
            <div className="grid-item grid-item-6">P1</div>
            <div className="grid-item grid-item-7">P2</div>
            <div className="grid-item grid-item-8">P3</div>
            <div className="grid-item grid-item-9">P4</div>
            <div className="grid-item grid-item-10">P5</div>
            <div className="grid-item grid-item-11">P6</div>
          </div>
        </div>

        <footer> Marek Ficht &copy; ALL RIGHTS RESERVED </footer>

      </div>
    );
  }
}

export default App;
