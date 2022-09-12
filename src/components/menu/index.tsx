import "./style.css"

function Menu() {
    return (
        <>
            <div className="header">
                    <div className="menu-language">
                        <p className="language">Language</p>
                    </div>
                    <nav className="menu">
                        <button className="button-menu">About</button>
                        <button className="button-menu">Skills</button>
                        <button className="button-menu">Work</button>
                        <button className="button-menu">Contact</button>
                    </nav>
                </div>
        </>
    )
}

export default Menu;