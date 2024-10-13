//react
import { useState } from 'react';

//external components
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

//internal components
import { ExperienceWrapper, CardWrapper, AboutWrapper } from './components/Wrappers';
import { EducationCard, ProjectCard, ExperienceCard } from './components/CardComponents';
import Carousel from './components/Carousel';
import FilterBar from './components/FilterBar';

//style
import './style/utils.css';

function App() {
	return (
		<div className='app-wrapper flex-center-x'>
			<AboutWrapper>
				<div className='flex-center-x font-white font-style fs-64 fw-bold'>Dominic Babusci</div>
				<Carousel />
				<div className='flex-center-x'>
					<IconButton href='https://github.com/dbabusci' target="_blank" rel="noopener noreferrer">
						<GitHubIcon className='font-white'/>
					</IconButton>
					<IconButton href='https://www.linkedin.com/in/dbabusci/' target="_blank" rel="noopener noreferrer">
						<LinkedInIcon className='font-white'/>
					</IconButton>
					<IconButton href='https://www.google.com' target="_blank" rel="noopener noreferrer">
						<EmailIcon className='font-white'/>
					</IconButton>
				</div>
			</AboutWrapper>
			<ExperienceWrapper>
				<FilterBar/>
				<CardWrapper>
					<EducationCard
						title='Kent State University'
						dateRange='2024-2024'
					/>
					<ProjectCard
						title='HareSVN'
						description='A hackathon project'
						hardSkills='Rust, Javascript, Tauri, Vue'
						githubLink='balls'
					/>
					<ExperienceCard
						title='Software Engineer Intern'
						dateRange='2024-2024'
						description='Hello this is my description. I am writing and talking and waffling just to extend this a bit'
						hardSkills='C#, Javascript, SQL, .Net, React, MongoDB'
					/>
				</CardWrapper>
			</ExperienceWrapper>
		</div>
	)
}

export default App
