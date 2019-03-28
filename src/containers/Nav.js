import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';


class Nav extends Component {

    state = {
        showNavMobile: false,
        widthNavMobile: 1024,
        isSticky: false,
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

        //---
        window.addEventListener('scroll', e => {

            if ( window.pageYOffset >= 110 ) {
                this.setState({ isSticky: true })
            } else {
                this.setState({ isSticky: false })                
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

        const { showNavMobile, isSticky } = this.state;
        const sticky = isSticky ? 'nav sticky' : 'nav';

        return (
            <nav className={ sticky } id='nav'>

                <header className='logo'>
                    <Link to='/'>
                        <h1>Marek Ficht Portfolio</h1>
                        <div className='letter-m'>M</div>
                        <div className='letter-f'>F</div>
                    </Link>
                </header>

                {/* <header>
                    <Link to='/'><h1>Marek Ficht Portfolio</h1></Link>
                </header> */}

                <button className={ showNavMobile ? 'showCloseBtn' : '' } onClick={ this.handleNav }>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul style={{ display: showNavMobile ? 'flex' : 'none' }} onClick={ this.handleNav }>
                    <li>
                        <NavLink to="/o-mnie" activeClassName='active-nav'>O mnie</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" activeClassName='active-nav'>Skills</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projekty" activeClassName='active-nav'>Projekty</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cv" activeClassName='active-nav'>CV</NavLink>
                    </li>
                    <li>
                        <NavLink to="/kontakt" activeClassName='active-nav'>Kontakt</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;