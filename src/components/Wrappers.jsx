//style
import '../style/utils.css';

export function ExperienceWrapper({ children }) {
    return(
        <div className='experience-wrapper'>
            {children}
        </div>
    )
}

export function CardWrapper({ children }) {
    return(
        <div className='cards-wrapper flex-around-center f-dir-c'>
            {children}
        </div>
    );
}

export function AboutWrapper({ children }) {
    return(
        <div className='about-wrapper'>
            {children}
        </div>
    );
}