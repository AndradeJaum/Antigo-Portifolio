import { i18next } from "../../../components/translate/i18n"
import "./style.css"

function Skiils() {
  return (
    <>
      <div className="skills">
        <div className="skills-box">
          <div className="skills-box-header">
            <div className="skills-line"></div>
            <h2 className="skills-tittle">{i18next.t("tittles.skills")}</h2>
            <div className="skills-line"></div>
          </div>
          <p className="skills-text">{i18next.t("messages.skiils1")}</p>
          <p className="skills-text">{i18next.t("messages.skills2")}<strong><a href="http://statusgg.s3-website-us-east-1.amazonaws.com" target="_blank" className="skills-link">Status.gg</a></strong>, {i18next.t("messages.skills3")} <strong><a href="https://github.com/AndradeJaum/STATUSGG-Back-End" target="_blank" className="skills-link">BackEnd</a></strong> {i18next.t("messages.skills4")} <strong><a href="https://github.com/AndradeJaum/STATUSGG-Front-End" target="_blank" className="skills-link">FrontEnd</a></strong> {i18next.t("messages.skills5")} </p>
        </div>

        <div className="skills-tech">
          <div className="skills-tech-header">
            <div className="skills-line"></div>
            <h3 className="skills-subtittle">{i18next.t("tittles.tech")}</h3>
            <div className="skills-line"></div>
          </div>
          <div className="skills-list-box">
            <ul className="skills-list">
              <li className="skills-itens"><a className="techs">Javascript(ES6+)</a></li>
              <li className="skills-itens"><a className="techs">React.js</a></li>
              <li className="skills-itens"><a className="techs">Typescript</a></li>
              <li className="skills-itens"><a className="techs">HTML5</a></li>
              <li className="skills-itens"><a className="techs">CSS3</a></li>
              <li className="skills-itens"><a className="techs">WordPress</a></li>
            </ul>
            <ul className="skills-list">
              <li className="skills-itens"><a className="techs">Express.js</a></li>
              <li className="skills-itens"><a className="techs">Material-UI</a></li>
              <li className="skills-itens"><a className="techs">Mongo DB</a></li>
              <li className="skills-itens"><a className="techs">AWS</a></li>
              <li className="skills-itens"><a className="techs">Node.js</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skiils;
