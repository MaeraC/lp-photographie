import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <p><i className="fas fa-phone"></i> 07.58.57.42.12</p>
            <p>©️Copyrights 2021 - LP Studio. Tous droits réservés.</p>
            <p><i className="fas fa-envelope"></i><Link to="mailto:contact@lpstudio.com" target="_blank"> contact@lpstudio.com </Link></p>
        </footer>
    )
}

export default Footer 