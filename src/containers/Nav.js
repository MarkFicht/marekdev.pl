import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';


class Nav extends Component {

    state = {
        showNavMobile: false,
        widthNavMobile: 1024,
    };

    componentDidMount() {
        const { widthNavMobile } = this.state;

        //--- once
        if ( document.body.clientWidth >= widthNavMobile ) {

            this.setState({ showNavMobile: true })
        }

        //---
        window.addEventListener('resize', (e) => {

            if ( e.target.outerWidth >= widthNavMobile ) {

                this.setState({ showNavMobile: true })
            }
        })

    };

    handleNav = () => {
        const { widthNavMobile } = this.state;
        if ( document.body.clientWidth >= widthNavMobile ) return null;

        this.setState({
            showNavMobile: !this.state.showNavMobile
        })
    };

    render() {

        const { showNavMobile } = this.state;

        return (
            <nav className="nav">
                <header>
                    <Link to='/'><h1>Marek Ficht: Portfolio</h1></Link>
                </header>

                <button className={ showNavMobile ? 'showCloseBtn' : '' } onClick={ this.handleNav }>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul style={{ display: showNavMobile ? 'flex' : 'none' }} onClick={ this.handleNav }>
                    <li>
                        <NavLink to="/o-mnie" activeClassName='active-nav'><button>O mnie</button></NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" activeClassName='active-nav'><button>Skills</button></NavLink>
                    </li>
                    <li>
                        <NavLink to="/projekty" activeClassName='active-nav'><button>Projekty</button></NavLink>
                    </li>
                    <li>
                        <NavLink to="/cv" activeClassName='active-nav'><button>CV</button></NavLink>
                    </li>
                    <li>
                        <NavLink to="/kontakt" activeClassName='active-nav'><button>Kontakt</button></NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;