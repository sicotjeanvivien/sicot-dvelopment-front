import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';

import './App.css';

import About from './About/About';
import Home from './Home/Home';
import Navigation from './Layout/Navigation/Navigation';
import Project from './Project/Protject';
import Blog from './Blog/Blog';
import Crypto from './Crypto/Crypto';

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projet" element={<Project />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/blockchains" element={<Crypto />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
