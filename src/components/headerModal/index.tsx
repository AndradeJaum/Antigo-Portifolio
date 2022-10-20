import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from 'react';
import "./style.css"
import * as Scroll from 'react-scroll';
let Link = Scroll.Link
let Element = Scroll.Element;


export function HeaderModal() {

  const [modalVisible, setModalVisible] = useState(false);


  return (
    <div className='header-modal'>
      <button className='open-modal' onClick={() => setModalVisible(true)}>|||</button>

      {modalVisible ? <div id='modal' className='backdrop-modal'>
        <div className='modal-box'>
          <div className='box-itens-modal'>
            <li className="modal-item" >
              <Link className="modal-anchors" to="home" spy={true} smooth={true} duration={500}>
                <a className="button-modal" >Home</a>
              </Link>
            </li>

            <li className="modal-item">
              <Link className="modal-anchors" to="about" spy={true} smooth={true} duration={500}>
                <a className="button-modal" >About</a>
              </Link>
            </li>

            <li className="modal-item">
              <Link className="modal-anchors" to="skills" spy={true} smooth={true} duration={500}>
                <a className="button-modal" >Skills</a>
              </Link>
            </li>

            <li className="modal-item">
              <Link className="modal-anchors" to="work" spy={true} smooth={true} duration={500}>
                <a className="button-modal" >Work</a>
              </Link>
            </li>

            <li className="modal-item">
              <Link className="modal-anchors" to="contact" spy={true} smooth={true} duration={500}>
                <a className="button-modal" >Contact</a>
              </Link>
            </li>
          </div>

          <div className='box-button-modal'>
            <button className='close-modal' onClick={() => setModalVisible(false)}>Close</button>
          </div>

        </div>
      </div> : null}
    </div>
  );
}

export default HeaderModal;