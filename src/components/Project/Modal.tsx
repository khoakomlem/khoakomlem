import React from 'react';

export type ModalProps = {
	id: string;
	title: string;
	carousel: JSX.Element[];
	content: JSX.Element;
	tags: string[];
};

export default function Modal(props: ModalProps) {
	return (
		<div id={props.id} className='modal'>
			<div className='modal-background'></div>
			<div className='modal-card'>
				<header className='modal-card-head'>
					<p className='modal-card-title'>{props.title}</p>
					<button className='delete' aria-label='close'></button>
				</header>
				<section className='modal-card-body'>
					<div id={`${props.id}-carousel`} className='carousel'>
						{props.carousel.map(img => (
							<figure key={Math.random()} className='image is-4by3 carousel-cell'>
								{img}
							</figure>
						))}
					</div>
					<div className='content'>
						<p>
							{props.content}
						</p>
						<div className='tags'>
							{props.tags.map(tag => (
								<span key={Math.random()} className='tag'>{tag}</span>
							))}
						</div>
					</div>
				</section>
				<footer className='modal-card-foot'>
					<button className='button is-success'>Close</button>
				</footer>
			</div>
		</div>
	);
}
