import './Badge.css';

const Badge = ({ label = '1', disabled = false }) => {
  return (
    <span
      className={`badge ${disabled ? 'badge--disabled' : 'badge--primary'}`}
      aria-disabled={disabled || undefined}
    >
      {label}
    </span>
  );
};

export default Badge;