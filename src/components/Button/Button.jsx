import './Button.css';

const Button = ({
  label = 'Button',
  variant = 'primary',   // 'primary' | 'secondary' | 'neutral'
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={`btn btn--${variant} ${disabled ? 'btn--disabled' : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;