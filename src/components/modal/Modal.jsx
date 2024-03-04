import './modal.css';
import PropTypes from 'prop-types'

function Modal({ action, text }) {
    return (
        <div className='overlay'>
            <div className='modal'>
                <p className='closeModal' onClick={action}> x</p>
                <p>{text}</p>
            </div>
        </div>
    )
}
Modal.propTypes = {
    action: PropTypes.func,
    text: PropTypes.string,
}
export default Modal