import { i18next } from "../../components/translate/i18n"
import "./style.css"
import Apresentation from "../screens/apresentation";
import About from "../screens/about";
import Skiils from "../screens/skills";
import Contact from "../screens/contact";
import Arrow from "../../components/arrow";
import Social from "../../components/social";
import Work from "../screens/work";
import HeaderModal from "../../components/headerModal";
import { useEffect, useState } from "react";
import * as Scroll from 'react-scroll';
import Header from "../../components/header";
let Link = Scroll.Link
let Element = Scroll.Element;

function Home() {

  const [windowMobile, setWindowMobile] = useState(window.innerWidth);

  const [buttonModalVisible, setButtonModalVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const updateWidth = () => {
    setWindowMobile(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth)
    if (windowMobile > 768) {
      setButtonModalVisible(false)
    } else {
      setButtonModalVisible(true)
    }
    return (() => {
      window.removeEventListener("resize", updateWidth)
    })

  }, [windowMobile])

  return (
    <>
      <div>

        {buttonModalVisible ? (
          <button className='open-modal' onClick={() => setModalVisible(true)}>|||</button>
        ) : null}

        {modalVisible ? (
          <div id='modal' className='backdrop-modal'>
            <HeaderModal onClose={() => setModalVisible(false)} id={"modal"} >
              <li className="modal-item" >
                <Link className="modal-anchors" to="home" spy={true} smooth={true} duration={500}>
                  <a className="button-modal" >{i18next.t("buttons.home")}</a>
                </Link>
              </li>

              <li className="modal-item">
                <Link className="modal-anchors" to="about" spy={true} smooth={true} duration={500}>
                  <a className="button-modal" >{i18next.t("buttons.about")}</a>
                </Link>
              </li>

              <li className="modal-item">
                <Link className="modal-anchors" to="skills" spy={true} smooth={true} duration={500}>
                  <a className="button-modal" >{i18next.t("buttons.skills")}</a>
                </Link>
              </li>

              <li className="modal-item">
                <Link className="modal-anchors" to="work" spy={true} smooth={true} duration={500}>
                  <a className="button-modal" >{i18next.t("buttons.works")}</a>
                </Link>
              </li>

              <li className="modal-item">
                <Link className="modal-anchors" to="contact" spy={true} smooth={true} duration={500}>
                  <a className="button-modal" >{i18next.t("buttons.contact")}</a>
                </Link>
              </li>
            </HeaderModal>

          </div>
        ) : null}
        <div>
          <Header />
          <Apresentation />
        </div>
        <div id="about" >
          <About />
        </div>
        <div id="skills">
          <Skiils />
        </div>
        <div >
          <Work />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Arrow />
        <div className="box-social">
          <Social setRow={true} setBar={true} />
        </div>
      </div>

    </>
  )
}

export default Home;