import one from "../1.jpg"
import two from "../2.jpg"

function HeaderHP() {
    return (
        <section className="header-hp">
            <div>
                <h2>De l'Art et du Sublime</h2>
                <h1>Studio de photographie</h1>
                <p>"LP Photgraphie a fait de ma séance photo une expérience absolument géniale ! Des photographes talentueux, une ambiance fun et des résultats incroyables. Je les recommande vivement !"</p>
            </div>
            <div>
                <img src={one} alt="" />
                <img src={two} alt="" />
            </div>
        </section>
    )
}

export default HeaderHP