import BgParallax from "./components/BgParallax"
import HeaderHP from "./components/HeaderHP"
import Presentation from "./components/Presentation"
import Types from "./components/Types"


function About() {
    return (
        <div>
            <HeaderHP />
            <BgParallax />
            <Types />
            <BgParallax />
            <Presentation />
        </div>
    )
}

export default About
