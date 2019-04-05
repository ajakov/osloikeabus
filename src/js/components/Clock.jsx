import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: new Date(),
		};
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			time: new Date(),
		});
	}

	render() {
		const { props } = this;
		const { lang } = props;
		return (
			<div>
				<p>{new Intl.DateTimeFormat(lang, { weekday: 'long', month: 'long', day: 'numeric' }).format(this.state.time)}</p>
				<h2>{this.state.time.toLocaleTimeString(lang, { hour: 'numeric', minute: '2-digit' })}</h2>
			</div>
		);
	}
}

Clock.propTypes = {
	lang: PropTypes.string,
};

export default Clock;
