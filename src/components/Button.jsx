// Custom Button component
const Button = ({ children, variant = "outline", size = "default", onClick, className = "", ...props }) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  
    const variants = {
      outline: "border border-gray-300 bg-white hover:bg-gray-100 text-gray-700",
      solid: "bg-primary text-white hover:bg-primary/90",
    }
  
    const sizes = {
      default: "h-10 px-4 py-2",
      icon: "h-10 w-10",
    }
  
    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
    return (
      <button className={classes} onClick={onClick} {...props}>
        {children}
      </button>
    )
  }
  
export default Button
  
  