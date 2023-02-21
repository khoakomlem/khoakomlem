import React from 'react';

type NameStatusProps = {
	fullname: string;
	status: string;
	avatarUrl: string;
};

export default function NameStatus(props: NameStatusProps) {
	return (
		<section className='hero is-primary'>
			<div className='hero-body'>
				<div className='container'>
					<div className='level'>
						<div className='level-item has-text-centered'>
							<figure className='image is-128x128'>
								<img className='is-rounded' src={props.avatarUrl} />
							</figure>
						</div>
					</div>
					<div className='columns has-text-centered'>
						<div className='column'>
							<h1 className='title is-1'>{props.fullname}</h1>
							<h2 className='subtitle'>{props.status}</h2>
							<img
								src='https://visitor-badge.glitch.me/badge?page_id=khoakomlem.khoakomlem'
								alt='Visitors'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
