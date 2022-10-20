import React from 'react';

export type CompanyType = {
	name: string;
	datetime: string;
	logo: JSX.Element;
	content: JSX.Element;
};

export default function Card(props: CompanyType) {
	return (
		<div className='card'>
			<div className='card-content'>
				<div className='media'>
					<div className='media-left'>
						<figure className='image is-48x48'>
							{props.logo}
						</figure>
					</div>
					<div className='media-content'>
						<p className='title is-4'>{props.name}</p>
						<p className='subtitle is-6'>
							<time>{props.datetime}</time>
						</p>
					</div>
				</div>
				{props.content}
			</div>
		</div>
	);
}
