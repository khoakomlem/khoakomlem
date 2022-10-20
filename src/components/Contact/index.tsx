import React from 'react';
import type {ContactType} from './Card';
import Card from './Card';

type ContactProps = {
	contacts: ContactType[];
};

export default function Contact(props: ContactProps) {
	return (
		<section className='section'>
			<div className='container'>
				<h1 className='title'>Contact</h1>
				<hr />
				<nav className='level'>
					{props.contacts.map(c => (
						<Card key={Math.random()} icon={c.icon} href={c.href} title={c.title} />
					))}
				</nav>
			</div>
		</section>
	);
}
