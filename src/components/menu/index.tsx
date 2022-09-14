import "./style.css"

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
                <ul className="list">
                    <li className="item"><a className="button-menu">Home</a></li>
                    <li className="item"><a className="button-menu">About</a></li>
                    <li className="item"><a className="button-menu">Skills</a></li>
                    <li className="item"><a className="button-menu">Work</a></li>
                    <li className="item"><a className="button-menu">Contact</a></li>
                </ul>
            </header>
        </>
    )
}

export default Menu;