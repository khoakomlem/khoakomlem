import React from 'react';

export type ProjectType = {
	targetModal: string;
	title: string;
	logo: JSX.Element;
	modal: JSX.Element;
};

export default function Card(props: ProjectType) {
	return (
		<>
			<div className='tile is-parent modal-trigger' data-target={props.targetModal}>
				<article className='tile is-child notification'>
					<p className='title' style={{textAlign: 'center'}}>{props.title}</p>
					<figure className='image card-content is-flex is-horizontal-center'>
						{props.logo}
					</figure>
				</article>
			</div>
			{props.modal}
		</>
	);
}
