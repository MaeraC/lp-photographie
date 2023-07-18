import four from "../4(1).jpg"

function Presentation() {
    return (
        <section className="presentation">
            <div>
                <h2>À propos de nous</h2>
                <h3>Lila et Paulo</h3>
                <p>Bienvenue chez nous, au Studio LP Photographie ! Nous sommes un duo de photographes passionnés, prêts à capturer les moments précieux de votre vie avec créativité et sensibilité. </p>
            </div>
            <div>
                <img src={four} alt="" />
                <p>
                Permettez-nous de nous présenter : je suis Lila, spécialisée dans la photographie de portraits et d'événements. Mon objectif est de révéler la beauté unique de chaque personne à travers des clichés intemporels, empreints d'émotion et de spontanéité. Je m'attache à créer un lien de confiance avec mes sujets, afin de saisir leur essence véritable et de raconter leur histoire de manière authentique.<br></br><br></br>
                Et moi, c'est Paulo, je suis passionné par la photographie de paysages et d'architecture. J'aime explorer les moindres recoins pour capturer des scènes grandioses et des détails subtils qui évoquent l'émerveillement. Mon approche artistique vise à créer des images immersives, transportant les spectateurs dans des univers visuels captivants.<br></br><br></br>
                En tant que duo, nous combinons nos compétences complémentaires pour offrir une palette photographique variée et complète. Que vous souhaitiez immortaliser un moment intime en famille, célébrer votre mariage, ou mettre en valeur votre entreprise à travers des images percutantes, nous sommes là pour vous accompagner.<br></br><br></br>
                Notre studio est un espace chaleureux et convivial, conçu pour que vous vous sentiez à l'aise dès que vous franchissez la porte. Nous croyons en l'importance de créer une atmosphère détendue et authentique lors de nos séances photo, car c'est lorsque vous êtes vous-même que nous pouvons capturer les instants les plus mémorables.<br></br><br></br>
                laissez-nous vous accompagner dans ce voyage photographique unique. Nous sommes impatients de vous rencontrer, d'explorer vos idées créatives et de capturer des souvenirs qui resteront gravés pour toujours.
                </p>
            </div>
        </section>
    )
}

export default Presentation