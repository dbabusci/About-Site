//style
import '../style/utils.css';

export function EducationCard({ title, dateRange}) {
    return (
        <div className='ed-card-wrapper card-bg card-border m-8 flex-around-center'>
            <div className='font-style fs-24 fw-bold'>{title}:</div>
            <div className='font-style'>{dateRange}</div>
        </div>
    );
}

export function ExperienceCard({ title, dateRange, description, hardSkills }) {
    return (
        <div className='ex-card-wrapper card-bg card-border m-8 flex-center f-dir-c'>
            <div className='flex-around-center ex-card-title'>
                <div className='font-style fs-24 fw-bold'>{title}:</div>
                <div className='font style'>{dateRange}</div>
            </div>
            <div className='font-style ex-card-body m-8'>{description}</div>
            <div className='font-style ex-card-body'>{hardSkills}</div>
        </div>
    );
}

export function ProjectCard({ title, description, hardSkills, githubLink }) {
    return (
        <div className='pj-card-wrapper card-bg card-border m-8'>
            <div>{title}</div>
            <div>{description}</div>
            <div>{hardSkills}</div>
            <div>{githubLink ? <></> : <div>hello</div>}</div>
        </div>
    );
}