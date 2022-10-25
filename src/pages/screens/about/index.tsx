import {i18next} from "../../../components/translate/i18n"
import { useEffect } from "react";
import HeaderModal from "../../../components/headerModal";
import "./style.css"

function About() {

    return (
        <>
            <div className="about">
                    <div className="about-box">
                        <div className="about-box-header">
                            <div className="about-line"></div>
                            <h2 className="about-tittle">{i18next.t("tittles.about")}</h2>
                            <div className="about-line"></div>
                        </div>
                        <p className="about-text">{i18next.t("messages.about1")} <br />
                            <br />{i18next.t("messages.about2")} </p>
                    </div>
                    <div className="about-image">
                    </div>
            </div>
        </>
    )
}

export default About;