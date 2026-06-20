import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const variantStyles = {
  primary:
    'bg-accent text-bg-base font-semibold hover:bg-accent-hover',
  secondary:
    'border border-accent text-accent hover:bg-accent-muted',
};

const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseClasses = `inline-flex items-center justify-center px-6 py-3 rounded-lg text-base transition-colors ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link to={href} className={baseClasses} onClick={onClick}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={baseClasses}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
