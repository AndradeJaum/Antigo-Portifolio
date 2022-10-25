import { i18next } from "../../../components/translate/i18n"
import "./style.css"
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import MapComponent from "../../../components/maps";

function Contact() {

    const form = useRef(null)

    const [user, setUser] = useState({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        message: ""
    })
    const [status, setStatus] = useState({
        type: "",
        message: ""
    })
    const [visible, setVisible] = useState(true)

    const valueInput: any = (e: { target: { name: any; value: any; }; }) => setUser({
        ...user, [e.target.name]: e.target.value
    });

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        if (form.current) {

            emailjs.sendForm('ServicePortfolio', 'template_k50ptub', form.current, 'askpsZ_P3cBVEgcxJ')
                .then((result) => {
                    console.log(result.text);
                    setUser({
                        name: "",
                        lastname: "",
                        email: "",
                        phone: "",
                        message: ""
                    });
                    setStatus({
                        type: "success",
                        message: "Message sent successfully"
                    })
                }, (error) => {
                    console.log(error.text);
                    setStatus({
                        type: "error",
                        message: "Message not sent, review data!"
                    })
                });
        };
    }

    useEffect(() => {
        setVisible(true)
        const timer = setTimeout(() => {
            setVisible(false)
        }, 4000)

        return () => clearTimeout(timer);

    }, [status])

    return (
        <>
            <div className="contact">
                <div className="contact-form">
                    {visible && (
                        status.type === "success" ? <p className="status-message success"> {status.message}</p> :
                            status.type === "error" ? <p className="status-message error"> {status.message}</p> : ""
                    )}

                    <div className="contact-box">
                        <div className="contact-box-header">
                            <div className="contact-line"></div>
                            <h2 className="contact-tittle">{i18next.t("tittles.contact")}</h2>
                            <div className="contact-line"></div>
                        </div>
                        <form onSubmit={handleSubmit} className="form" ref={form}>
                            <input className="textField" type="text" placeholder={i18next.t("form.name")} name="name" onChange={valueInput} value={user.name} required />

                            <input className="textField" type="text" placeholder={i18next.t("form.lastname")} name="lastname" onChange={valueInput} value={user.lastname} required />

                            <input className="textField" type="email" placeholder={i18next.t("form.email")} name="email" onChange={valueInput} value={user.email} required />

                            <input className="textField" type="tel" placeholder={i18next.t("form.phone")} name="phone" onChange={valueInput} value={user.phone} required />

                            <textarea className="message" placeholder={i18next.t("form.message")} name="message" onChange={valueInput} value={user.message} required></textarea>

                            <button type="submit" className="btn-contact">{i18next.t("buttons.send")}</button>
                        </form>
                    </div>
                </div>
                <div className="contact-map">
                    <div className="map-box">
                        <MapComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;