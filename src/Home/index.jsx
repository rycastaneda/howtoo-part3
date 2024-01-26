import { Link, useLocation } from "react-router-dom"
import Modal from "../Modal";
import { useState } from "react";

function Home() {
    const location = useLocation();
    const [modalOpen, setModalOpen] = useState(true);

    return (
        <div>
            { modalOpen && <Modal onClose={() => setModalOpen(false)}/> }
            <div className={`wrapper home`}>
                <div className={`sidebar home`}>
                    <img src="/logo.svg" alt="" className="logo-image" />
                    <p className="content">
                        lOREM iPSUM<br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nisl elit.<br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu leo elit. Donec condimentum odio ut ante bibendum, quis egestas quam semper.<br /><br />
                        Donec tempus cursus magna a feugiat. Morbi scelerisque euismod aliquet. Integer ut euismod risus. Aenean a diam vel nisl accumsan cursus.<br /><br />
                        Quisque ac dapibus nisl. Etiam rhoncus aliquet ligula ac convallis. Ut eleifend sit amet justo eu laoreet.
                    </p>
                </div>
                <div className='page-body'>
                </div>
                <div className='nav'>
                    <ul>
                        <li><Link to="/" className={location.pathname === '/' ? `active`: ''}><img src="/home.svg"/> Home</Link></li>
                        <li><Link to="/home-topic" className={location.pathname === '/home-topic' ? `active`: ''}>TOPIC 1</Link></li>
                        <li><Link to="/accordion" className={location.pathname === '/accordion' ? `active`: ''}>TOPIC 2</Link></li>
                        <li><a href="">TOPIC 3</a></li>
                        <li><a href="">TOPIC 4</a></li>
                        <li><a href="">TOPIC 5</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
