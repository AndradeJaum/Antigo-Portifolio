import {i18next} from "../../../components/translate/i18n"
import "./style.css"

function Work() {
    return (
        <>
            <div className="work">
                <div className="work-box">
                    <div className="work-box-header">
                        <div className="work-line"></div>
                        <h2 className="work-tittle">{i18next.t("tittles.works")}</h2>
                        <div className="work-line"></div>
                    </div>
                    <div className="card-box">
                        <div className="cards">1</div>
                        <div className="cards">2</div>
                        <div className="cards">3</div>
                        <div className="cards">4</div>
                        <div className="cards">5</div>
                        <div className="cards">6</div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Work;