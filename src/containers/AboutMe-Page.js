import React, { Component } from 'react';
import ReactLoading from 'react-loading';

import picFace from '../img/face.jpg';

const textAboutMe = ['Hej, jestem Marek! Młodszy programista JS.', 'Przygoda z programowaniem zaczęła się 2 lata temu, po godzinach.', 'Rozwijam się w technologii ReactJS i nie tylko.', 'Jednym z celów zawodoych jest zostanie Full Stackiem.', 'W życiu staram się znaleźć balans i nie zamykać się na 1 tor myślenia. Póki co, wychodzi to nieźle.', 'Jeśli mam wolny czas, to najchętniej spędzam go na boisku, rywalizacji, grach czy medytacji.'];


class AboutMe extends Component {

    state = {
        loading: true
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
                    <h3>O mnie</h3>
                </header>
                
                <section>

                    <div className='card'>
                        <header>
                            <h2>#Marek-Ficht</h2>
                        </header>

                        <div className='card-img-wrapper' >
                            <div className='card-img' style={{ backgroundImage: `url("${picFace}")` }}></div>
                        </div>

                        <div className='card-text'>
                            <p>{ textAboutMe[0] }</p>
                            <p>{ textAboutMe[1] }</p>
                            <p>{ textAboutMe[2] }</p>
                            <p>{ textAboutMe[3] }</p>
                            <p>{ textAboutMe[4] }</p>
                            <p>{ textAboutMe[5] }</p>
                        </div>
                    </div>
                    
                </section>
            </div>
        )
    }
}

export default AboutMe;