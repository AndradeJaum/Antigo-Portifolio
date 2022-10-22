import "./style.css"
import { Icon } from '@iconify/react';
import Social from "../social";

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
          <Social />
        </div>
        <div className='box-button-modal'>
          <button className='close-modal' onClick={handleOutsideClick}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderModal;