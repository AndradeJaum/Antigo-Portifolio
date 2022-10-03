import "./style.css"
import * as Scroll from 'react-scroll';
let Link = Scroll.Link
let Element = Scroll.Element;


function Menu() {

    window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header?.classList.toggle("sticky", window.scrollY > 0);
    })

    return (
        <>
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
        </>
    )
}

export default Menu;