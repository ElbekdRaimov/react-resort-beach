import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaPizzaSlice } from 'react-icons/fa'

export default class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktail',
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, officia.'
            },
            {
                icon: <FaHiking />,
                title: 'endless hiking',
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, officia.'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, officia.'
            },
            {
                icon: <FaPizzaSlice />,
                title: 'Free Pizza',
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, officia.'
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    { this.state.services.map( ( item, index ) => {
                        return <article key={ index } className='service'>
                            <span>{ item.icon }</span>
                            <h6>{ item.title }</h6>
                            <p>{ item.info }</p>
                        </article>
                    } ) }
                </div>
            </section>
        )
    }
}
