import React, { Component } from 'react';

import ReactLoading from 'react-loading';


class AboutMe extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
        const loadingTime = setTimeout( () => {

            this.setState({ loading: false })
            clearTimeout(loadingTime);
        }, 500 );
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
            <div className='loading'>
                <h1>O mnie</h1>
            </div>
        )
    }
}

export default AboutMe;