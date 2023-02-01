import 'https://kit.fontawesome.com/4e5a72c756.js'; // Font awesome
import './App.css';

import React from 'react';
import {useParams} from 'react-router-dom';

import Navbar from './components/Navbar';
import NameStatus from './components/NameStatus';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';

import * as Variant from './variants';
import type{DefaultProps} from './variants/Default';

function getVariant(key = ''): DefaultProps {
	switch (key.toLowerCase()) {
		case 'itmc':
			return Variant.ITMC;
		case 'freelance':
			return Variant.Freelance;
		default:
			return Variant.Freelance;
	}
}

function App() {
	const {variant: variantKey} = useParams();
	const variant = getVariant(variantKey);

	return (
		<>
			<Navbar githubUsername={variant.githubUsername} />
			<NameStatus fullname={variant.fullname} status={variant.status} avatarUrl='https://avatars.githubusercontent.com/u/46867018'/>
			<About text={variant.aboutDescription}/>
			<Experience experiences={variant.experiences} />
			<Project projects={variant.projects}/>
			<Contact contacts={variant.contacts}/>
		</>
	);
}

export default App;
