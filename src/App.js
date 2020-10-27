import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Post from './components/Post';

export class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contacts" component={Contacts} />
					<Route path="/:post_id" component={Post} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
