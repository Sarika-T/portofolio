import { useEffect, useState } from "react";
import Buttons from "../common/Buttons";
import { works } from "../../utils/MockData";




export default function Works() {

    const [workData, setWorkData] = useState([]);

    useEffect(() => {
        setWorkData(works.works.content)
    },[])
    console.log(workData)

    const handleClick = () => {
        console.log('View Case Study button clicked');
    }

    return(
        <div classname="works">
            <div className="works-page">
                <div className="works-page-title">
                    <img src="https://media.istockphoto.com/id/1187388752/vector/white-glowing-light-explodes-on-a-transparent-background-sparkling-magical-dust-particles.jpg?s=612x612&w=0&k=20&c=BAnpvu-qesVM2Ho9QrxE70c_AuUsCaMCSuaOteoO2q8=" alt="workslogo"/>
                    <span className="works-page-title-text">Works</span>
                    <div className="works-page-title-button">
                                <Buttons
                                name="view all"
                                onClick= {handleClick}
                                className= "view-button"
                                />
                    </div>
                </div>
                <div className="works-page-content">
                    {workData.map((data, index) => (<div className="works-page-content-context">
                        <div className="works-page-content-image">
                            <img src={data?.image} alt="workslogo" />
                        </div>
                        <div className="works-page-content-body">
                            <div className="works-page-content-body-title">{data.title}</div>
                            <div className="works-page-content-body-des">{data.body}</div>
                            <div className="works-page-content-body-tools">
                            {data.tools.map((tool,index) => (
                                <span key={index} className="works-page-content-body-tools-tab">{tool}</span>
                            ))}
                            </div>
                            <div className="works-page-content-body-bottom">
                                <Buttons
                                name="View Case Study"
                                variant="contained"
                                onClick= {handleClick}
                                className= "casestudy-button"
                                />
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    )
}