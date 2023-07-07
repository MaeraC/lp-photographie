import { Link } from "react-router-dom"

function Menu() {
    return (
        <ul className="menu">
            <li className="portrait"><Link to="/portraits">Portraits</Link></li>
            <li className="mariage"><Link to="/mariage">Mariage</Link></li>
            <li className="famille"><Link to="/famille">Famille</Link></li>
            <li className="mode"><Link to="/mode">Mode</Link></li>
            <li className="architecture"><Link to="/architecture">Architecture</Link></li>
        </ul>
    )
}

export default Menu