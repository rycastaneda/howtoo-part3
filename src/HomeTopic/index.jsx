import { Link, useLocation } from "react-router-dom"

function HomeTopic() {
    const location = useLocation();

  return (
    <div className={`wrapper home-topic`}>
      <div className={`sidebar home-topic`}>
        <img src="/logo.svg" alt="" className="logo-image" />

        <h1>LOREM IPSUM DOLOR SIT</h1>

        <button>
          <Link to="/accordion">BEGIN</Link>
        </button>
      </div>
      <div className='page-body'>

      </div>
      <div className='nav'>
        <ul>
          <li><Link to="/" className={location.pathname === '/' ? `active` : ''}><img src="/home.svg" /> Home</Link></li>
          <li><Link to="/home-topic" className={location.pathname === '/home-topic' ? `active` : ''}>TOPIC 1</Link></li>
          <li><Link to="/accordion" className={location.pathname === '/accordion' ? `active` : ''}>TOPIC 2</Link></li>
          <li><a href="">TOPIC 3</a></li>
          <li><a href="">TOPIC 4</a></li>
          <li><a href="">TOPIC 5</a></li>
        </ul>
      </div>
    </div>
  )
}

export default HomeTopic
