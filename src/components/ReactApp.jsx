import React from 'react';
import styled from 'styled-components/macro';
import logo from '../assets/logo.svg';
import './ReactApp.css';

const App = styled('div')`
	text-align: center;
`
const AppHeader = styled('header')`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`

const ReactLogo = styled('img')`
	height: 40vmin;
	pointer-events: none;
`;

const AppLink = styled('a')`
	color: #61dafb;
`

const ReactApp = () => (
	<App>
		<AppHeader>
			<p>
				<span>This app has been generated from </span>
				<AppLink
					href="https://create-react-app.dev/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Create React App
				</AppLink>
				<span> thank you for this tool !</span>
				
			</p>
			<ReactLogo className="react-logo" src={logo} alt="logo" />
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<AppLink
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</AppLink>
		</AppHeader>
	</App>
);

export default ReactApp;
