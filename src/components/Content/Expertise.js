import { useEffect, useState } from "react";
import { mockData } from "../../utils/MockData";




export default function Expertise() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(mockData.expertise.content)
    },[])

    return(
        <div className="expertise">
            <div className="expertise-page">
                <div className="expertise-page-title">
                    <img src="https://media.istockphoto.com/id/1187388752/vector/white-glowing-light-explodes-on-a-transparent-background-sparkling-magical-dust-particles.jpg?s=612x612&w=0&k=20&c=BAnpvu-qesVM2Ho9QrxE70c_AuUsCaMCSuaOteoO2q8=" alt="expertislogo"/>
                    <span className="expertise-page-title-text">Expertise</span>
                </div>
                <div className="expertise-page-content">
                {data.map((list,index) => (
                    <div className="expertise-page-content-context">
                        <div key={index} className="expertise-page-content-title">
                        <ul className="expertise-page-content-title-list">
                            <li>{list.title}</li>
                        </ul>
                        </div>
                        <div className="expertise-page-content-body">
                            <p>{list.body}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}
