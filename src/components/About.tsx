import React from 'react';

export type AboutProps = {
	text: string;
};

export default function About(props: AboutProps) {
	return (
		<section className='section'>
			<div className='container'>
				<h1 className='title'>About Me</h1>
				<hr />
				<p>
					{props.text}
				</p>
			</div>
		</section>
	);
}
