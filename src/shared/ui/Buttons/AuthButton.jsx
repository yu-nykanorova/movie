
export const AuthButton = ({ className, type, onClick, children }) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      type={type}
      >
        {children}
    </button>
  )
}
