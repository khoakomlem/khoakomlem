import React from 'react';
import type {ProjectType} from './Card';
import Card from './Card';

type ProjectProps = {
	projects: ProjectType[];
};

export default function Project(props: ProjectProps) {
	return (
		<section className='section'>
			<div className='container'>
				<h1 className='title'>Projects</h1>
				<hr />
				<div className='tile is-ancestor'>
					<div className='tile is-vertical is-12'>
						<div className='tile'>
							{
								props.projects.map(p => (
									<Card key={Math.random()} targetModal={p.targetModal} title={p.title} logo={p.logo} modal={p.modal}/>
								))
							}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
