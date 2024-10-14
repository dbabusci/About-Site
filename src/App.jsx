//react
import { useState, useEffect, createContext } from 'react';

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

export let SelectedItems = createContext();

function App() {
	const [itemData, setItemData] = useState(d);
	const [selectedItems, setSelectedItems] = useState([]);

	useEffect(() => {
		console.log(selectedItems);
		if (selectedItems.length == 0) {
			setItemData(d);
		} else {
			let ret = Object.keys(d).reduce((acc, el) => {
				if (selectedItems.includes(d[el].cat)) {
					acc[el] = d[el]; 
				}
				return acc;
			}, {});
			setItemData(ret);
		}
	}, [selectedItems]);

	function Items({ data }) {
		let i = 0;
		return (
			<div className='cards-wrapper'>
				{
					Object.keys(data).map(el => {
						if (data[el].cat == "Experience") {
							return (
								<div key={++i}>
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
								<div key={++i}>
									<EducationCard
										title={data[el].title}
										dateRange={data[el].dateRange}
									/>
								</div>
							)
						} else {
							return (
								<div key={++i}>
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
		<SelectedItems.Provider value={{ selectedItems, setSelectedItems }}>
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
					<FilterBar />
					<Items data={itemData} />
				</ExperienceWrapper>
			</div>
		</SelectedItems.Provider>
	)
}

export default App