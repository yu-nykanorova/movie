export const LikeBlock = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  } 
  
  return (
    <div className={`like-block ${props.className}`} onClick={handleClick}>{props.children}</div>
  )
}

