import "./style.css"
import * as Scroll from 'react-scroll';
import { useEffect, useState } from "react";
let Link = Scroll.Link
let Element = Scroll.Element;


function Header() {

    const [windowMobile, setWindowMobile] = useState(window.innerWidth);
    const [headerVisible, setHeaderVisible] = useState(true);

    window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header?.classList.toggle("sticky", window.scrollY > 0);
    })

    const updateWidth = () => {
      setWindowMobile(window.innerWidth)
    }
  
    useEffect(() => {
      window.addEventListener("resize", updateWidth)
      if(windowMobile > 540) {
        setHeaderVisible(true)
      } else {
        setHeaderVisible(false)
      }
      return(() => {
        window.removeEventListener("resize", updateWidth)
      })
      
    }, [windowMobile])

    return (
        <>
        {headerVisible ? (
            <header className="header">
            <div className="menu-language">
                <a className="language">Language</a>
            </div>
            <ul className="menu-list" >

                <Link className="anchors" to="home" spy={true} smooth={true} duration={500}>
                    <li className="menu-item">
                        <a className="button-menu" >Home</a>
                    </li>
                </Link>
                <Link className="anchors" to="about" spy={true} smooth={true} duration={500}>
                    <li className="menu-item">
                        <a className="button-menu" >About</a>
                    </li>
                </Link>
                <Link className="anchors" to="skills" spy={true} smooth={true} duration={500}>
                    <li className="menu-item">
                        <a className="button-menu" >Skills</a>
                    </li>
                </Link>
                <Link className="anchors" to="work" spy={true} smooth={true} duration={500}>
                    <li className="menu-item">
                        <a className="button-menu" >Work</a>
                    </li>
                </Link>
                <Link className="anchors" to="contact" spy={true} smooth={true} duration={500}>
                    <li className="menu-item">
                        <a className="button-menu" >Contact</a>
                    </li>
                </Link>
            </ul>
        </header>
        ) : null}
            
        </>
    )
}

export default Header;