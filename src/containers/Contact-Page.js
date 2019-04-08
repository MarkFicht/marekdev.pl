import React, { Component } from 'react';

import ReactLoading from 'react-loading';

import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneSquare } from 'react-icons/fa';


class Contact extends Component {

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
                    <h3>Kontakt</h3>
                </header>
                
                <section className=''>
                    
                    <div className='contact-container'>

                        <div className='envelope-wrapper'>

                            <div className='envelope'>
                                <div className='letter-container'>

                                    <div className='letter'>
                                        <div className='contact-link'>
                                            <FaEnvelope className='my-icon' />
                                            <span>marekficht@gmail.com</span>
                                        </div>
                                        <div className='contact-link'>
                                            <FaGithub className='my-icon' />
                                            <span>github.com/MarkFicht</span>
                                        </div>
                                        <div className='contact-link'>
                                            <FaLinkedin className='my-icon' />
                                            <span>linkedin.com/in/marek-ficht</span>
                                        </div>
                                        <div className='contact-link'>
                                            <FaPhoneSquare className='my-icon' />
                                            <span>663 534 659</span>
                                        </div>
                                    </div>

                                </div>
                                <div className='left-fold'></div>
                                <div className='right-fold'></div>
                            </div>
                            <div className='top-fold'></div>
                        
                        </div>
                        <div className='envelope-shadow'></div>

                    </div>

                </section>
            </div>
        )
    }
}

export default Contact;