import React, { Component } from 'react';

class Services extends Component {
    render() {
        const formattedServices = this.props.ourServices.map((item, i) => {
            return <li key={'item' + i}>{item}</li>
        })
        return (
            <div>
                <h1>Our Services</h1>
                <h2>We currently offer: </h2>
                <ol>
                    {formattedServices}
                </ol>
            <hr />
            <h3>
                We aim to please
            </h3>
            <img alt="services" className="services-pic" />
            </div>
        )
    }
}

export default Services;