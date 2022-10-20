import React from 'react';

export type ContactType = {
	icon: JSX.Element;
	href: string;
	title: string;
};

export default function Card(props: ContactType) {
	return (
		<div className='level-item has-text-centered'>
			<div>
				<a href={props.href} target='_blank' rel='noreferrer' className='icon is-large'>
					{props.icon}
				</a>
				<p className='heading'>
					<a href={props.href} target='_blank' rel='noreferrer'>
						{props.title}
					</a>
				</p>
			</div>
		</div>
	);
}
