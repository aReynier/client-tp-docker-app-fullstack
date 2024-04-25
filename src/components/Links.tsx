import { Link } from 'react-router-dom';
import './links.css'

function Links() {
    return (
      <div className='links'>
        <Link to="/">Home page</Link>
        <Link to="/hello/:name">Hello page</Link>
        <Link to="/time">Time page</Link>
      </div>
    )
  }
  
  export default Links
  