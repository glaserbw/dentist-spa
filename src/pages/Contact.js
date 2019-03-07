import React from 'react';

const Contact = props => (
    <div>
        <h1>Contact Us</h1>
        <p className="subtext"> Come to our dentist office!</p>
        <img alt="more teeth" className="contact-pic" />
        <div>
            <p> Call {props.name} at {props.phone} ! </p>
            <h2> Or! </h2>
            <p>Visit Us</p>
            <p className="subtext">123 Fake St</p>
            <p className="subtext">Seattle, WA 98102</p>
        </div>
    </div>
)

export default Contact;