import React from 'react';
import type {ContactType} from '../components/Contact/Card';
import type {CompanyType} from '../components/Experience/Card';
import type {ProjectType} from '../components/Project/Card';
import Modal from '../components/Project/Modal';

export type DefaultProps = {
	githubUsername: string;
	fullname: string;
	status: string;
	aboutDescription: string;
	experiences: CompanyType[];
	projects: ProjectType[];
	contacts: ContactType[];
};

export const Default: DefaultProps = {
	githubUsername: 'khoakomlem',
	fullname: 'Đậu Văn Đăng Khoa',
	status: '',
	aboutDescription: '',
	experiences: [
		{
			name: 'CronAd',
			datetime: 'April 2022 - October 2022',
			logo: (
				<img
					src='https://cronad.net/favicon.ico'
					alt='Placeholder image'
				/>
			),
			content: (
				<div className='content'>
					<p>Marketing, automation, solution for business, ...</p>
					<p>Private projects:</p>
					<ul>
						<li>Switch Proxy: An extension for switching proxy between domains</li>
						<li>Record Auto: An extension for automating your browser by connecting blocks, like <a href='https://chrome.google.com/webstore/detail/automa/infppggnoaenmfagbfknfkancpbljcca' target='_blank' rel='noreferrer'>Automa</a></li>
						<li>Introduce Site: Website that build webs by <a href='https://grapesjs.com/' target='_blank' rel='noreferrer'>grapejs</a></li>
					</ul>
					<div className='tags'>
						<span className='tag'>React</span>
						<span className='tag'>Chrome extensions</span>
						<span className='tag'>Django REST</span>
					</div>
				</div>
			),
		},
		{
			name: 'KB2A',
			datetime: 'June 2020 - April 2022',
			logo: (
				<img
					src='https://avatars.githubusercontent.com/u/75492634'
					alt='Placeholder image'
				/>
			),
			content: (
				<div className='content'>
					<p>Facebook extensions, tips and tricks, ...</p>
					<p>Private projects:</p>
					<ul>
						<li><a href='https://trainghiemso.vn/kb2a-tool-xem-tin-nhan-da-go-cua-ban-be/' target='_blank' rel='noreferrer'>KB2A Tool</a>: An extension with many features: unseen messages, history remove messages, ...</li>
					</ul>
					<p>Public projects (pet project using team name)</p>
					<ul>
						<li><a href='https://github.com/kb2ateam/kb2abot-client' target='_blank' rel='noreferrer'>KB2A bot</a>: A bot with many commands and features</li>
						<li><a href='https://github.com/kb2ateam/kb2abot' target='_blank' rel='noreferrer'>KB2A bot library</a>: A library for coding bots in many platforms: Facebook, Telegram (WIP), ...</li>
					</ul>
					<div className='tags'>
						<span className='tag'>React</span>
						<span className='tag'>Chrome extensions</span>
						<span className='tag'>Nodejs</span>
						<span className='tag'>facebook-chat-api</span>
					</div>
				</div>
			),
		},
	],
	projects: [
		{
			targetModal: 'project-1-modal',
			title: 'KB2A bot',
			logo: (
				<img
					src='https://i.imgur.com/MIe7XST.png'
				/>
			),
			modal: <Modal
				id='project-1-modal'
				title='KB2A bot'
				carousel={[
					(<img key={Math.random()} src='img/carousel/1.png' />),
					(<img key={Math.random()} src='img/carousel/2.png' />),
					(<img key={Math.random()} src='img/carousel/3.png' />),
				]}
				content={(
					<p>Bot tự động trả lời tin nhắn khi nhập lệnh<br/>
                    Reposistory: <a href='https://github.com/kb2ateam/kb2abot-client' target='_blank' rel='noreferrer'>here</a><br/>
                    Demo: Vì đây là project làm về facebook, dễ bị bế acc đi nên không có demo :(
					</p>)}
				tags={['Facebook-chat-api', 'Socket.io']}
			/>,
		},
		{
			targetModal: 'project-2-modal',
			title: 'Flapping Online',
			logo: (
				<img
					src='https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.18169-9/10003531_577064822389461_1343229127_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=x-n1lUm4ZpoAX9I1maX&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT-dtcOboaV9P3TSqvProgEOro-QMw8qVtX4SklybOYRJA&oe=6373F0C2'
				/>
			),
			modal: <Modal
				id= 'project-2-modal'
				title='KB2A bot'
				carousel={[
					(<img key={Math.random()} src='img/carousel/4.png' />),
					(<img key={Math.random()} src='img/carousel/5.png' />),
					(<img key={Math.random()} src='img/carousel/6.png' />),
				]}
				content={(
					<p>Game giống flapping online của havana24 nhưng trên web<br/>
                    Reposistory client: <a href='https://github.com/khoakomlem/flapping-online2' target='_blank' rel='noreferrer'>here</a><br/>
                    Demo: <a href='https://flapping-online.herokuapp.com/' target='_blank' rel='noreferrer'>here</a>
					</p>)}
				tags={['P5js', 'Socket.io']}
			/>,
		},
		{
			targetModal: 'project-3-modal',
			title: 'Gunsurvival',
			logo: (
				<img
					src='https://raw.githubusercontent.com/khoakomlem/gunsurvival-dedicated-server/main/main/public/images/backup/terrorist.png'
				/>
			),
			modal: <Modal
				id='project-3-modal'
				title='Gunsurvival'
				carousel={[
					(<img key={Math.random()} src='img/carousel/7.png' />),
					(<img key={Math.random()} src='img/carousel/8.png' />),
					(<img key={Math.random()} src='img/carousel/9.png' />),
				]}
				content={(
					<p>Game bắn súng 2d giống surviv.io (ảnh trên là bản đã refactor nên hơi đơn giản)<br/>Phiên bản đầu tiên đã hoàn thành, có nhiều súng và chế độ nhưng vì code xấu quá nên đã refactor lại va kết quả giờ vẫn chưa thể hoàn thành game vì thiếu kiến thức<br/>
                    Reposistory: <a href='https://github.com/khoakomlem/gunsurvival-dedicated-server' target='_blank' rel='noreferrer'>here</a><br/>
                    Demo (còn nhiều lỗi nhưng code xịn :v): <a href='http://gunsurvival.herokuapp.com/?server=http://gunsurvival.herokuapp.com' target='_blank' rel='noreferrer'>here</a>
					</p>)}
				tags={['Socket.io', 'Quadtree', 'SAT 2D', 'P5js', 'Native ES Module']}
			/>,
		},
	],
	contacts: [
		{
			icon: (
				<i className='fab fa-2x fa-github'></i>
			),
			href: 'https://github.com/khoakomlem',
			title: 'github/khoakomlem',
		},
		{
			icon: (
				<i className='fab fa-2x fa-facebook'></i>
			),
			href: 'https://facebook.com/khoakomlem2',
			title: 'facebook/khoakomlem2',
		},
		{
			icon: (
				<i className='fab fa-2x fa-google'></i>
			),
			href: 'mailto:khoakomlem@gmail.com',
			title: 'khoakomlem@gmail.com',
		},
		{
			icon: (
				<i className='fab fa-2x fa-discord'></i>
			),
			href: 'https://discord.com/users/485384564554989578',
			title: 'Discord/Mr.Bean#6384',
		},
	],
};
