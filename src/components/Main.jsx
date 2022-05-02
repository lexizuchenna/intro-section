import heroImage from '../images/image-hero-desktop.png'
import heroImageMobile from '../images/image-hero-mobile.png'
import audio from '../images/client-audiophile.svg'
import dataBiz from '../images/client-databiz.svg'
import maker from '../images/client-maker.svg'
import meet from '../images/client-meet.svg'

function Main() {
  return (
    <div className='container'>
        <div className="main flex">
            <div className="text-section">
                <div>
                <div className="text">
                <h2>Make <br /> remote work</h2>
                <p>Get your team in sync, no matter your location. <br /> Streamline processes, 
                create team rituals, and <br /> watch productivity soar.</p>
                </div>
                <div className="button">
                    <button>Learn more</button>
                </div>
                <div className="brands flex">
                    <div className="image-container">
                        <img src={dataBiz} alt="" />
                    </div>
                    <div className="image-container">
                        <img src={audio} alt="" />
                    </div>
                    <div className="image-container">
                        <img src={meet} alt="" />
                    </div>
                    <div className="image-container">
                        <img src={maker} alt="" />
                    </div>
                </div>
                </div>
            </div>
            <div className="hero-image">
                <img className='desktop' src={heroImage} alt="" />
                <img className='mobile' src={heroImageMobile} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Main