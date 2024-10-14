//react
import { useState, useEffect, useContext } from "react";
import { SelectedItems } from "../App";

//external components
import { Button } from "@mui/material";

//style
import '../style/utils.css';

function FilterBar() {
    const tagsContext = useContext(SelectedItems);
    if(!tagsContext) {
        throw new Error("Context did not pass");
    }
    const { selectedItems, setSelectedItems } = tagsContext;

    function handleSelect(cat) {
        setSelectedItems(prev => [...prev, cat]);
    }

    function handleDeselect(cat) {
        setSelectedItems(prev => prev.filter((item) => item != cat));
    }

    function handler(cat) {
        selectedItems.includes(cat) ? handleDeselect(cat) : handleSelect(cat);
    } 

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
                onClick={() => handler('SchoolProject')}
            >
                School Projects
            </Button>
            <Button 
                variant='contained' 
                style={{marginLeft: '8px', marginRight: '8px', backgroundColor: '#ffffff', color: '#000000' }} 
                onClick={() => handler('HackathonProject')}
            >
                Hackathon Projects
            </Button>
        </div>
    )
}

export default FilterBar;