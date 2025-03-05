import React from 'react';
import './MainPage.scss';
import Buttons from '../common/Buttons';
import LabTabs from '../common/Tabs';



export default function MainPage() {

    const handleClick = () => {
        console.log('Hire me button clicked');
    }

    return(
        <div className="mainpage">
            <div className="mainpage-content">
                <div className="mainpage-content-header">
                    <img src='https://i.pinimg.com/736x/3a/03/28/3a0328f59ad516bb97805dc0cabb4017.jpg' alt='logo'/>
                    <LabTabs />
                    <Buttons
                      name= "Hire me"
                      variant="contained"
                      onClick= {handleClick}
                      className= "hire-me-button"
                    />
                </div>
                <div className="mainpage-content-body">

                </div>
            </div>
        </div>
    )
}