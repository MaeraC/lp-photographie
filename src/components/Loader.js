import logo from '../lp-img.png'

function Loader() {
    setTimeout(() => {
        const loaderPage = document.querySelector('.loader')
        loaderPage.classList.add('fade-out')
    }, 800)

    return (
        <div className="loader">
            <div className="circle-container">
                <img src={logo} alt="loader LP Photographie" />
                <div className="circle"></div>
            </div>
        </div>
    )
}

export default Loader