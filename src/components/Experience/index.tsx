import React from 'react';
import type{CompanyType} from './Card';
import Card from './Card';

type ExperienceProps = {
	experiences: CompanyType[];
};

export default function Experience(props: ExperienceProps) {
	return (
		<section className='section'>
			<div className='container'>
				<h1 className='title'>Experience</h1>
				<hr />
				{
					props.experiences.map((e: CompanyType) => (
						<Card key={Math.random()} name={e.name} datetime={e.datetime} logo={e.logo} content={e.content} />
					))
				}
			</div>
		</section>
	);
}
