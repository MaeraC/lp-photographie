import mariage from "../assets/mariage.png"
import portrait from "../assets/portraits.png"
import famille from "../assets/familles.png"
import mode from "../assets/mode(1).png"
import architecture from "../assets/architecture.png"
import five from "../5.jpg"
import six from "../6.jpg"

function Types() {
    return (
        <section className="types">
            <div>
                <figure>
                    <img src={mariage} alt="" />
                    <figcaption>Mariage</figcaption>
                </figure>
                <figure>
                    <img src={portrait} alt="" />
                    <figcaption>Portraits</figcaption>
                </figure>
                <figure>
                    <img src={famille} alt="" />
                    <figcaption>Famille</figcaption>
                </figure>
                <figure>
                    <img src={mode} alt="" />
                    <figcaption>Mode</figcaption>
                </figure>
                <figure>
                    <img src={architecture} alt="" />
                    <figcaption>Architecure</figcaption>
                </figure>
            </div>
            <div>
                <img src={six} alt="" />
                <img src={five} alt="" />
            </div>
        </section>
    )
}

export default Types