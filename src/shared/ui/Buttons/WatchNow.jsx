import { Link } from "react-router-dom";

export const WatchNow = ({ className }) => {
  return (
    <Link to="/player"><button className={`btn ${className}`}>Watch now</button></Link>
  )
}
