import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';


class Nav extends Component {

    state = {
        showHideNavMobile: false,
        hideMobileMenu: 1024,
    };

    componentDidMount() {
        const { hideMobileMenu } = this.state;

        //--- once
        if ( document.body.clientWidth >= hideMobileMenu ) {

            this.setState({ showHideNavMobile: true })
        }

        //---
        window.addEventListener('resize', (e) => {

            if ( e.target.outerWidth >= hideMobileMenu ) {

                this.setState({ showHideNavMobile: true })
            }
        })

    };

    showNavMobile = () => {
        this.setState({
            showHideNavMobile: !this.state.showHideNavMobile
        })
    };

    render() {

        const showHiveNav = { display: this.state.showHideNavMobile ? 'flex' : 'none' };
        const showCloseBtn = !this.state.showHideNavMobile ? '' : 'showCloseBtn';

        return (
            <nav className="nav">
                <header>
                    <Link to='/'><h1>Marek Ficht: Portfolio</h1></Link>
                </header>

                <button className={ showCloseBtn } onClick={ this.showNavMobile }>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul style={ showHiveNav }>
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