import { useEffect, useState } from "react";
import { blogs } from "../../utils/MockData";
import Buttons from "../common/Buttons";




export default function Blog() {

    const handleClick = () => {
        console.log('View all button clicked');
    }
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        setBlogData(blogs.blog.content)
    },[])


    return(
        <div classname="blogs">
            <div className="blogs-page">
                <div className="works-page-title">
                    <img src="https://media.istockphoto.com/id/1187388752/vector/white-glowing-light-explodes-on-a-transparent-background-sparkling-magical-dust-particles.jpg?s=612x612&w=0&k=20&c=BAnpvu-qesVM2Ho9QrxE70c_AuUsCaMCSuaOteoO2q8=" alt="workslogo"/>
                    <span className="works-page-title-text">Blogs</span>
                        <div className="works-page-title-button">
                            <Buttons
                            name="view all"
                            onClick= {handleClick}
                            className= "view-button"
                            />
                        </div>
                </div>
                <div className="blogs-page-content">
                    {blogData.map((data, index) => (
                    <div className="blogs-page-content-context">
                        <div className="blogs-page-content-image">
                            <img src={data?.image} alt="workslogo" />
                        </div>
                        <div className="blogs-page-content-body">
                            <div className="blogs-page-content-body-time">{data.time}</div>
                            <div className="blogs-page-content-body-title">{data.title}</div>
                            <div className="blogs-page-content-body-des">{data.body}</div>
                            <div className="works-page-content-body-tools">
                            {data.tools.map((tool,index) => (
                                <span key={index} className="works-page-content-body-tools-tab">{tool}</span>
                            ))}
                            </div>
                        </div>
                        <div className="blogs-page-content-right">
                            <Buttons
                            name="Read"
                            variant="contained"
                            onClick= {handleClick}
                            className= "casestudy-button"
                            />
                        </div>
                    </div>))}
                </div>
            </div> 
        </div>
    )
}