import Social from "../social";
import "./style.css"
import { Icon } from '@iconify/react';

type Props = {
  children: any,
  onClose: any,
  id: string
}

export function HeaderModal({ id = "modal", onClose = () => { }, children }: Props) {

  const handleOutsideClick = (e: { target: any; }) => {
    if (e.target.id === id) onClose();
  }


  return (
    <div id={id} className='modal' onClick={onClose}>
      <div className='modal-box'>
        <div className='content'>{children}</div>
        <div className="social-modal">

          <a href="https://github.com/AndradeJaum" target="_blank" className="box-icons-modal">
            <Icon className="icons-modal" icon="simple-line-icons:social-github" width={18} height={18} />
          </a>

          <a href="https://www.linkedin.com/in/joao-vitorandrade/" target="_blank" className="box-icons-modal">
            <Icon className="icons-modal" icon="simple-line-icons:social-linkedin" width={18} height={18} />
          </a>

          <a href="https://www.instagram.com/andrade_jaum/" target="_blank" className="box-icons-modal">
            <Icon className="icons-modal" icon="simple-line-icons:social-instagram" width={18} height={18} />
          </a>

          <a href="https://open.spotify.com/user/4jsylrelyhxxzqb28vtyj19p4" target="_blank" className="box-icons-modal">
            <Icon className="icons-modal" icon="simple-line-icons:social-spotify" width={18} height={18} />
          </a>
          
        </div>
        <div className='box-button-modal'>
          <button className='close-modal' onClick={handleOutsideClick}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderModal;