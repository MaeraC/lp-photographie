import { Link } from "react-router-dom"
import Header from "../components/Header"

function About() {
    return (
        <div>
            <Header />
            <section className="about">
                <p>Studio LP est un studio de photographes professionnel basé à Nice. Accompagnée d'une équipe talentueuse de photographes expérimentés, notre entreprise se spécialise dans la capture d'images de haute qualité pour une variété de besoins photographiques.

                    Notre objectif est de fournir des images exceptionnelles qui captent l'essence même de chaque sujet et racontent une histoire unique.

                    <br></br><br></br>Chez Studio LP, nous sommes passionnés par notre métier et nous nous engageons à offrir une expérience photographique professionnelle et personnalisée à nos clients. Nous travaillons en étroite collaboration avec eux pour comprendre leurs attentes et garantir des résultats qui dépassent leurs aspirations.

                    Nous sommes fiers de notre approche créative et de notre attention aux détails. Chaque cliché est soigneusement composé, mettant en valeur les émotions, les expressions et les moments significatifs. Nous utilisons des techniques de pointe et des équipements de qualité pour produire des images nettes et esthétiquement captivantes.


                   <br></br><br></br>Que vous ayez besoin d'un portrait professionnel, de couvrir un événement spécial ou de capturer des moments intimes, vous pouvez compter sur Studio LP pour répondre à vos besoins photographiques. Nous sommes déterminés à fournir des services de qualité et à créer des souvenirs durables pour nos clients.

                    N'hésitez pas à nous contacter pour discuter de vos projets et découvrir comment LP Studio peut vous accompagner dans la réalisation de vos aspirations photographiques.
                </p>
                <br></br><br></br>
                <Link to="mailto:contact@lpstudio.com">Contact : contact@lpstudio.com</Link>
            </section>
        </div>
    )
}

export default About