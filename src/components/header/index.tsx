import { i18next } from "../translate/i18n"
import "./style.css"
import * as Scroll from 'react-scroll';
import { useEffect, useState } from "react";
let Link = Scroll.Link
let Element = Scroll.Element;

function Header() {

  const I18NEXT_STORAGE_KEY = "i18nextLng"

  const [windowMobile, setWindowMobile] = useState(window.innerWidth);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [toggled, setToggled] = useState(localStorage.getItem(I18NEXT_STORAGE_KEY) === "pt-BR" ? true : false)

  const language = toggled ? "en-US" : "pt-BR"

  const updateWidth = () => {
    setWindowMobile(window.innerWidth)
  }

  const handleSelectChange = (e: { target: any; }) => {
    setToggled(!toggled)
    i18next.changeLanguage(language)
    window.location = window.location

  }

  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header?.classList.toggle("sticky", window.scrollY > 0);
  })

  useEffect(() => {
    window.addEventListener("resize", updateWidth)
    if (windowMobile > 768) {
      setHeaderVisible(true)
    } else {
      setHeaderVisible(false)
    }
    return (() => {
      window.removeEventListener("resize", updateWidth)
    })

  }, [windowMobile])

  return (
    <>
      {headerVisible ? (
        <header className="header" >
          <div className="menu-language">
            <input type="checkbox" onChange={handleSelectChange} checked={toggled} />
            <label className="ptbtn">pt</label>
            <label className="enbtn">en</label>
          </div>
          <ul className="menu-list" >

            <Link className="anchors" to="home" spy={true} smooth={true} duration={500}>
              <li className="menu-item">
                <a className="button-menu" >{i18next.t("buttons.home")}</a>
              </li>
            </Link>
            <Link className="anchors" to="about" spy={true} smooth={true} duration={500}>
              <li className="menu-item">
                <a className="button-menu" >{i18next.t("buttons.about")}</a>
              </li>
            </Link>
            <Link className="anchors" to="skills" spy={true} smooth={true} duration={500}>
              <li className="menu-item">
                <a className="button-menu" >{i18next.t("buttons.skills")}</a>
              </li>
            </Link>
            <Link className="anchors" to="work" spy={true} smooth={true} duration={500}>
              <li className="menu-item">
                <a className="button-menu" >{i18next.t("buttons.works")}</a>
              </li>
            </Link>
            <Link className="anchors" to="contact" spy={true} smooth={true} duration={500}>
              <li className="menu-item">
                <a className="button-menu" >{i18next.t("buttons.contact")}</a>
              </li>
            </Link>
          </ul>
        </header>
      ) : null}

    </>
  )
}

export default Header;