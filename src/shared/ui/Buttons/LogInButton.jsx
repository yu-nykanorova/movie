
export const LogInButton = ({ className, onClick }) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      >
        Log in
    </button>
  )
}
