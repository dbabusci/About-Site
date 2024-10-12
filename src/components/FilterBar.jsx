//react
import { useState, useEffect } from "react";

//external components
import { Button } from "@mui/material";

//style
import '../style/utils.css';

function FilterBar() {
    const [currentSelected, setCurrentSelected] = useState([]);

    function handleSelect(cat) {
        setCurrentSelected(prev => [...prev, cat]);
    }

    function handleDeselect(cat) {
        setCurrentSelected(prev => prev.filter((item) => item != cat));
    }

    function handler(cat) {
        currentSelected.includes(cat) ? handleDeselect(cat) : handleSelect(cat);
    } 

    useEffect(() => {
        console.log(currentSelected);
    });

    return(
        <div className='filter-bar-wrapper flex-center'>
            <Button 
                variant='contained' 
                style={{marginLeft: '8px', marginRight: '8px', backgroundColor: '#ffffff', color: '#000000' }} 
                onClick={() => handler('Experience')}
            >
                Experience
            </Button>
            <Button 
                variant='contained' 
                style={{marginLeft: '8px', marginRight: '8px', backgroundColor: '#ffffff', color: '#000000' }} 
                onClick={() => handler('Education')}
            >
                Education
            </Button>
            <Button 
                variant='contained' 
                style={{marginLeft: '8px', marginRight: '8px', backgroundColor: '#ffffff', color: '#000000' }} 
                onClick={() => handler('PersonalProject')}
            >
                Personal Projects
            </Button>
            <Button 
                variant='contained' 
                style={{marginLeft: '8px', marginRight: '8px', backgroundColor: '#ffffff', color: '#000000' }} 
                onClick={() => handler('SchoolProjects')}
            >
                School Projects
            </Button>
            <Button 
                variant='contained' 
                style={{marginLeft: '8px', marginRight: '8px', backgroundColor: '#ffffff', color: '#000000' }} 
                onClick={() => handler('HackathonProjects')}
            >
                Hackathon Projects
            </Button>
        </div>
    )
}

export default FilterBar;