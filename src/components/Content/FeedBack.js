import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from "react";
import { feedbacks } from "../../utils/MockData";




export default function FeedBack() {

    const [feedback, setFeedback] = useState([]);
    const settings = {
        // arrows: true,
        // prevArrow: <button>Left</button>,
        // nextArrow: <button>Right</button>,
    };

    useEffect(()=> {
        setFeedback(feedbacks.feedback.content)
    },[])


    return(
        <div className="feedback">
            <div className="feedback-page">
                <div className="experience-page-title">
                    <img src="https://media.istockphoto.com/id/1187388752/vector/white-glowing-light-explodes-on-a-transparent-background-sparkling-magical-dust-particles.jpg?s=612x612&w=0&k=20&c=BAnpvu-qesVM2Ho9QrxE70c_AuUsCaMCSuaOteoO2q8=" alt="experiencelogo"/>
                    <span className="experience-page-title-text">What they say</span>
                </div>
                <div className="feedback-page-container">
                <Slider {...settings}>
                {feedback.map((feed, index) => (
                    <div key={index} className="feedback-page-content">
                    <div  className="feedback-page-content-image">
                        <img src={feed.image} alt="profileLogo"/>
                        <div className="feedback-page-content-image-text">
                            <span className="feedback-page-content-image-text-name">{feed.name}</span>
                            <span className="feedback-page-content-image-text-com">{feed.company}</span>
                        </div>
                    </div>
                    <div className="feedback-page-content-right">
                        <span className="feedback-page-content-right-text">{feed.feedback}</span>
                    </div>
                </div>))}
                </Slider>
                </div>
            </div>
        </div>
    )
}