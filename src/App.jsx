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

//data
import d from './data/items.json';

//style
import './style/utils.css';

function App() {
	const [data, setData] = useState(d);
	function Items() {
		return (
			<div className='cards-wrapper flex-around-center f-dir-c'>
				{
					Object.keys(data).map(el => {
						if (data[el].cat == "Experience") {
							return (
								<div>
									<ExperienceCard
										title={data[el].title}
										dateRange={data[el].dateRange}
										description={data[el].description}
										hardSkills={data[el].skills}
									/>
								</div>
							);
						} else if (data[el].cat == "Education") {
							return (
								<div>
									<EducationCard
										title={data[el].title}
										dateRange={data[el].dateRange}
									/>
								</div>
							)
						} else {
							return (
								<div>
									<ProjectCard
										title={data[el].title}
										description={data[el].description}
										hardSkills={data[el].skills}
										githubLink={data[el].link}
									/>
								</div>
							)
						}
					})
				}
			</div>
		);
	}
	return (
		<div className='app-wrapper flex-center-x'>
			<AboutWrapper>
				<div className='flex-center-x font-white font-style fs-64 fw-bold'>Dominic Babusci</div>
				<Carousel />
				<div className='flex-center-x'>
					<IconButton href='https://github.com/dbabusci' target="_blank" rel="noopener noreferrer">
						<GitHubIcon className='font-white' />
					</IconButton>
					<IconButton href='https://www.linkedin.com/in/dbabusci/' target="_blank" rel="noopener noreferrer">
						<LinkedInIcon className='font-white' />
					</IconButton>
					<IconButton href='https://www.google.com' target="_blank" rel="noopener noreferrer">
						<EmailIcon className='font-white' />
					</IconButton>
				</div>
			</AboutWrapper>
			<ExperienceWrapper>
				<FilterBar/>
				<Items/>
			</ExperienceWrapper>
		</div>
	)
}

export default App