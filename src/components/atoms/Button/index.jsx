import PropTypes from "prop-types";

export const Button = ({
  children,
  className,
  disabled,
  size = "w-fit",
  type = "button",
  onClick = () => {},
}) => {
  return (
    <button
      className={`rounded-md px-2 py-1 transition-all ${className} ${size}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
