import "./style.css"
import { Icon } from '@iconify/react';

function Social() {
    return (
        <>
            <div className="social">
                <Icon className="icons" icon="simple-line-icons:social-github" width={20} height={20}  />
                <Icon className="icons" icon="simple-line-icons:social-linkedin" width={20} height={20} />
                <Icon className="icons" icon="simple-line-icons:social-instagram" width={20} height={20} />
                <Icon className="icons" icon="simple-line-icons:social-spotify" width={20} height={20} />
                <div className="barra"></div>
            </div>
        </>
    )
}

export default Social;