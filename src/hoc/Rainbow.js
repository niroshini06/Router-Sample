import React from 'react';

const Rainbow = (WrappedComponent) => {
	const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'orange'];
	const randomColor = colors[Math.floor(Math.random() * 5)];
	const colorSelection = randomColor + '-text';
	return (props) => {
		return (
			<div className={colorSelection}>
				<WrappedComponent {...props} />
			</div>
		);
	};
};

export default Rainbow;
