import Blog from './Blog';
import Experience from './Experience';
import Expertise from './Expertise';
import FeedBack from './FeedBack';
import './Header.scss';
import Questions from './Questions';
import Works from './Works';


export default function HeaderText(){
    return(
        <div className="header-text">
            <span className="header-text-title">I am freelancer Designer from San Fransico</span>
            <div className='header-text-content'>
                <div className='header-text-content-context'>
                    <img src='https://media.istockphoto.com/id/1187388752/vector/white-glowing-light-explodes-on-a-transparent-background-sparkling-magical-dust-particles.jpg?s=612x612&w=0&k=20&c=BAnpvu-qesVM2Ho9QrxE70c_AuUsCaMCSuaOteoO2q8=' alt='logospec'/>
                    <span>doradesign</span>
                </div>
                <div className='header-text-content-context'>
                    <img src='https://img.freepik.com/premium-photo/abstract-geometric-shape-with-vshaped-design-black-background_996201-106972.jpg' alt='logospec'/>
                    <span>wave</span>
                </div>
                <div className='header-text-content-context'>
                    {/* <img src='' alt='logospec'/> */}
                    <span className='header-text-content-context-name'>Silsila</span>
                </div>
                <div className='header-text-content-context-text'>
                    <span>Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive branding and web designs, each crafted to captivative and inspire.</span>
                </div>
            </div>
            <div className='header-text-body'>
                <Expertise />
                <Works />
                <Experience />
                <Blog />
                <FeedBack />
                <Questions />
            </div>
            <div className='header-text-footer'>
                <div className='header-text-footer-context'>
                    <span className='header-text-footer-text'>webflow</span>
                    <img src="https://media.istockphoto.com/id/1187388752/vector/white-glowing-light-explodes-on-a-transparent-background-sparkling-magical-dust-particles.jpg?s=612x612&w=0&k=20&c=BAnpvu-qesVM2Ho9QrxE70c_AuUsCaMCSuaOteoO2q8=" alt="experiencelogo"/>
                    <span className='header-text-footer-text'>Figma</span>
                    <img src="https://media.istockphoto.com/id/1187388752/vector/white-glowing-light-explodes-on-a-transparent-background-sparkling-magical-dust-particles.jpg?s=612x612&w=0&k=20&c=BAnpvu-qesVM2Ho9QrxE70c_AuUsCaMCSuaOteoO2q8=" alt="experiencelogo"/>
                    <span className='header-text-footer-text'>Designer</span>
                    <img src="https://media.istockphoto.com/id/1187388752/vector/white-glowing-light-explodes-on-a-transparent-background-sparkling-magical-dust-particles.jpg?s=612x612&w=0&k=20&c=BAnpvu-qesVM2Ho9QrxE70c_AuUsCaMCSuaOteoO2q8=" alt="experiencelogo"/>
                    <span className='header-text-footer-text'>Developer</span>
                </div>
                <span className='header-text-footer-talk'>Let's talk!</span>
                <span>rehanurrehan@gmail.com</span>
                <div className='header-text-footer-bottom'>
                    <span className='header-text-footer-bottom-left'>Rehan Raihan-2023</span>
                    <div className='header-text-footer-bottom-right'>
                        <span>Dribble</span>
                        <span>Behance</span>
                        <span>Twitter</span>
                        <span>Instagram</span>
                    </div>
                </div>
            </div>
        </div>
    )
}