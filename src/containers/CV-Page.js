import React, { Component } from 'react';

import ReactLoading from 'react-loading';
import myCV from '../files/cv-file.pdf';
import imgCV from '../files/cv-pic.png';


class CV extends Component {

    state = {
        loading: true,
    }

    componentDidMount() {
        window.scroll(0, 0);

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
            <div className='loading container-subpage'>
                <header>
                    <h3>CV</h3>
                </header>
                
                <section>

                    <div className='cv-container'>

                        <img src={imgCV} />

                        <div className='cv-btns'>
                            <form method="get" action={myCV}>
                                <button type="submit">Zobacz PDF</button>
                            </form>

                            <a href={myCV} download>Pobierz PDF</a>
                        </div>

                    </div>

                </section>
            </div>
        )
    }
}

export default CV;