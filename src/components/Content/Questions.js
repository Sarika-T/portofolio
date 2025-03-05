import { useEffect, useState } from "react";
import { questions } from "../../utils/MockData";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';



export default function Questions() {

    const [questionData, setQuestionData] = useState([]);

    useEffect(() => {
        setQuestionData(questions.question.content)
    },[])

    return(
        <div className="question">
            <div className="question-page">
                <div className="experience-page-title">
                    <img src="https://media.istockphoto.com/id/1187388752/vector/white-glowing-light-explodes-on-a-transparent-background-sparkling-magical-dust-particles.jpg?s=612x612&w=0&k=20&c=BAnpvu-qesVM2Ho9QrxE70c_AuUsCaMCSuaOteoO2q8=" alt="experiencelogo"/>
                    <span className="experience-page-title-text">Frequently asked questions</span>
                </div>
                <div className="question-page-content">
                    {questionData.map((quest, index) => (
                    <Accordion className="accordian">
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                        <Typography component="span" className="accordian-text">{quest.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="accordian-det">{quest.answer}
                        </AccordionDetails>
                </Accordion>))}
                </div>
            </div>
        </div>
    )
}