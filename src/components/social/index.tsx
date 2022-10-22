import "./style.css"
import { Icon } from '@iconify/react';

function Social({ setRow = false, setBar = false }) {
    return (
        <>
            <div className={setRow ? "social" : "social-modal"}>
                <a href="https://github.com/AndradeJaum" target="_blank" className="box-icons">
                    <Icon className="icons" icon="simple-line-icons:social-github" width={18} height={18} />
                </a>
                <a href="https://www.linkedin.com/in/joao-vitorandrade/" target="_blank" className="box-icons">
                    <Icon className="icons" icon="simple-line-icons:social-linkedin" width={18} height={18} />
                </a>
                <a href="https://www.instagram.com/andrade_jaum/" target="_blank" className="box-icons">
                    <Icon className="icons" icon="simple-line-icons:social-instagram" width={18} height={18} />
                </a>
                <a href="https://open.spotify.com/user/4jsylrelyhxxzqb28vtyj19p4" target="_blank" className="box-icons">
                    <Icon className="icons" icon="simple-line-icons:social-spotify" width={18} height={18} />
                </a>
                <div className={setBar ? "bar" : "bar-invisible"}></div>
            </div>
        </>
    )
}

export default Social;