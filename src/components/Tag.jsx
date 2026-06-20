const Tag = ({ children, className = '', onClick, active = false }) => {
  const baseClasses = 'text-sm px-3 py-1 rounded-full transition-colors';
  const activeClasses = active
    ? 'bg-accent text-bg-base'
    : 'bg-accent-muted text-accent hover:border-accent border border-transparent';

  const Component = onClick ? 'button' : 'span';

  return (
    <Component
      className={`${baseClasses} ${activeClasses} ${className}`}
      onClick={onClick}
      type={onClick ? 'button' : undefined}
    >
      {children}
    </Component>
  );
};

export default Tag;
