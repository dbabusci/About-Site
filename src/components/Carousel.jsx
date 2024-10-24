//react
import { useState } from 'react';

//external components
import { Icon, IconButton } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';

//style
import '../style/utils.css';

function Carousel() {
    const [imageList, setImageList] = useState(['/li.jpeg', 'dac.jpeg']);
    const [current, setCurrent] = useState(0);

    function nextImage() {
        setCurrent(current == 0 ? imageList.length - 1 : current - 1);
    }

    function previousImage() {
        setCurrent(current == imageList.length - 1 ? 0 : current + 1);
    }

    return(
        <div className='carousel-wrapper flex-center f-dir-r'>
            <IconButton onClick={previousImage}>
                <ArrowBack className='font-white' style={{ width: '32px', height: '32px' }}/>
            </IconButton>
            <img
                src={imageList[current]}
                alt='No image found'
                className='image-wrapper font-white font-style'
            />
            <IconButton onClick={nextImage}>
                <ArrowForward className='font-white' style={{ width: '32px', height: '32px' }}/>
            </IconButton>
        </div>
    );
}

export default Carousel;