import "./style.css"
import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef(null)

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();


        if (form.current) {

            emailjs.sendForm('ServicePortfolio', 'template_k50ptub', form.current, 'askpsZ_P3cBVEgcxJ')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        };
    }

    return (
        <>
            <div className="contact">
                <div className="contact-box">
                    <div className="contact-box-header">
                        <div className="contact-line"></div>
                        <h2 className="contact-tittle">Contact</h2>
                        <div className="contact-line"></div>
                    </div>
                    <form onSubmit={handleSubmit} className="form" ref={form}>
                        <input className="textField" type="text" placeholder="First Name" name="name" />

                        <input className="textField" type="text" placeholder="Last Name" name="lastName" />

                        <input className="textField" type="email" placeholder="email" name="email" />

                        <input className="textField" type="tel" placeholder="Phone Number" name="phone" />

                        <textarea className="message" placeholder="Message" name="message"></textarea>

                        <div className="box-button-contact">
                            <button type="submit" className="flat-button-contact">
                                <div className="flat-button-div-contact">
                                    <span className="fill-contact"></span>
                                    <span className="base-contact"></span>
                                    <span className="text-contact">SEND</span>
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="contact-map">
                    <h1>Map</h1>
                </div>
            </div>

        </>
    )
}

export default Contact;