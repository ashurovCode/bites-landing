const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  className = '',
  leftIcon,
  rightIcon,
  icon,
  href,
  target,
  loading = false,
}) => {
  const variants = {
    primary: 'bg-[#F79F1A] text-white hover:[#E09016]',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700',
  }

  const sizes = {
    sm: icon ? 'p-2' : 'px-4 py-2 text-sm',
    md: icon ? 'p-3' : 'px-5 py-3 text-base',
    lg: icon ? 'p-4' : 'px-8 py-4 text-lg',
    xl: icon ? 'p-5' : 'px-10 py-5 text-xl',
  }

  const baseClasses = `
    ${variants[variant]} 
    ${sizes[size]} 
    ${fullWidth ? 'w-full' : ''}
    rounded-lg font-semibold transition-all duration-200
    disabled:cursor-not-allowed disabled:opacity-60
    inline-flex items-center justify-center gap-2
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500
    hover:scale-105 active:scale-95
    ${className}
  `

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          {!icon && <span>Loading...</span>}
        </>
      )
    }

    if (icon) {
      return icon
    }

    if (leftIcon && children) {
      return (
        <>
          {leftIcon}
          {children}
        </>
      )
    }

    if (rightIcon && children) {
      return (
        <>
          {children}
          {rightIcon}
        </>
      )
    }

    return children
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={baseClasses}
        aria-label={icon ? children : undefined}
      >
        {renderContent()}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
      aria-label={icon ? children : undefined}
    >
      {renderContent()}
    </button>
  )
}

export default Button
