import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
	state = {
		posts: [],
	};
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/todos/').then((res) => {
			this.setState({
				posts: res.data.slice(0, 10),
			});
		});
	}

	render() {
		const posts = this.state.posts;
		const postsList = posts.length ? (
			posts.map((e) => {
				return (
					<div className="post card" key={e.id}>
						<div className="card-content">
							<Link to={'/' + e.id}>
								<span className="card-title">{e.title}</span>
							</Link>
						</div>
					</div>
				);
			})
		) : (
			<div className="center"> No posts available</div>
		);
		return (
			<div className="container">
				<h4 className="center"> Home </h4>
				{postsList}
			</div>
		);
	}
}

export default Home;
