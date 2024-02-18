import './input.css';
import PropTypes from 'prop-types'
const Input = ({ id, title, value, action, className }) => {
    return (
        <div className={className}>
            <input
                type={id}
                id={id}
                value={value || ''}
                onChange={action}
                placeholder={title}
            />
        </div>
    )
}
Input.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    action: PropTypes.func,
    id: PropTypes.string,
    className: PropTypes.string,
}
export default Input