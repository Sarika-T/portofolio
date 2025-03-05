import { useEffect, useState } from "react";
import { experiences } from "../../utils/MockData";





export default function Experience() {

    const [experience, setExperience] = useState([]);

    useEffect(() => {
        setExperience(experiences.experience.content)
    },[])

    
    return(
        <div className="experience">
            <div className="experience-page">
                <div className="experience-page-title">
                    <img src="https://media.istockphoto.com/id/1187388752/vector/white-glowing-light-explodes-on-a-transparent-background-sparkling-magical-dust-particles.jpg?s=612x612&w=0&k=20&c=BAnpvu-qesVM2Ho9QrxE70c_AuUsCaMCSuaOteoO2q8=" alt="experiencelogo"/>
                    <span className="experience-page-title-text">Experience</span>
                </div>
                <div className="experience-page-content">
                    {experience.map((exp,index) => (<div className="experience-page-content-context">
                        <div key={index} className="experience-page-content-title">{exp.title}</div>
                        <div className="experience-page-content-right">
                            <span className="experience-page-content-right-comp">{exp.company}</span>
                            <span className="experience-page-content-right-duration">{exp.duration}</span>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    )
}