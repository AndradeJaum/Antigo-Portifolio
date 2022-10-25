import { i18next } from "../translate/i18n"
import "./style.css"

function ButtonContact() {

    return (
        <>
            <div className="box-button">
                <a type="submit" className="flat-button">
                    <div className="flat-button-div">
                        <span className="fill"></span>
                        <span className="base"></span>
                        <span className="text">{i18next.t("buttons.say")}</span>
                    </div>
                </a>
            </div>
        </>
    )
}

export default ButtonContact;