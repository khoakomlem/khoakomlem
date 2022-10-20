import React from 'react';

type NavbarProps = {
	githubUsername: string;
};

export default function Navbar(props: NavbarProps) {
	return (
		<nav
			className='navbar is-primary'
			role='navigation'
			aria-label='main navigation'
		>
			<div className='navbar-menu'>
				<div className='navbar-end'>
					<div className='navbar-item'>
						<a
							href={`https://github.com/${props.githubUsername}`}
							className='icon is-large has-text-light'
							target='_blank'
							rel='noreferrer'
						>
							<i className='fab fa-2x fa-github'></i>
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
