import React, { Component } from 'react';

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
                <header><h1>Marek Ficht: Portfolio</h1></header>

                <button className={ showCloseBtn } onClick={ this.showNavMobile }>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul style={ showHiveNav }>
                    <li><button>O mnie</button></li>
                    <li><button>Skills</button></li>
                    <li><button>Projekty</button></li>
                    <li><button>CV</button></li>
                    <li><button>Kontakt</button></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;