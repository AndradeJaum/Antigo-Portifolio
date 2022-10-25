import { i18next } from "../../../components/translate/i18n"
import "./style.css"
import imgstatus from "../../../images/statusgg.png"
import imgsearchmovie from "../../../images/searchmovie.png"
import {} from "../../../components/translate/i18n"

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
                        <a href="http://statusgg.s3-website-us-east-1.amazonaws.com" target="_blank" className="cards">
                            <img src={imgstatus} className="images" />
                            <div className="works-hidden">
                                <h2 className="works-names">{i18next.t("works.statusName")}</h2>
                                <p className="works-text">
                                {i18next.t("works.statusText")}
                                </p>
                            </div>
                        </a>
                        <a href="http://searchmovie.s3-website-us-east-1.amazonaws.com" target="_blank" className="cards">
                            <img src={imgsearchmovie} className="images" />
                            <div className="works-hidden">
                                <h2 className="works-names">{i18next.t("works.searchName")}</h2>
                                <p className="works-text">
                                {i18next.t("works.searchText")}
                                </p>
                            </div>
                        </a>
                        <a className="cards">
                        <div className="works-hidden">
                                <h2 className="works-names">{i18next.t("works.comingsoon")}</h2>
                                <p className="works-text">
                                {i18next.t("works.comingsoonText")}
                                </p>
                            </div>
                        </a>
                        <a className="cards">
                        <div className="works-hidden">
                                <h2 className="works-names">{i18next.t("works.comingsoon")}</h2>
                                <p className="works-text">
                                {i18next.t("works.comingsoonText")}
                                </p>
                            </div>
                        </a>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Work;