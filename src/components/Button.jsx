import PropTypes from 'prop-types';

const Button = ({ children, onClick, type, className, ...props }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`py-2 px-4 bg-primary text-white  rounded focus:outline-none ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
};

export default Button;
