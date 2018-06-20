import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Player, BigPlayButton, ControlBar, PlayToggle, Shortcut } from 'video-react';

import video from './assets/video.mp4';
import './style.scss';

class Video extends Component {
	constructor(props) {
		super(props);
		this.player = React.createRef();
	}
	componentDidMount() {
		this.player.current.actions.play();
	}
	componentWillUnmount() {
		this.player.current.actions.pause();
	}
	handleClick = () => {
		this.props.history.goBack();
	};
	render() {
		return (
			<div className="video" onClick={this.handleClick}>
				<Player ref={this.player} autoplay loop src={video}>
					<BigPlayButton disabled />
					<PlayToggle disabled />
					<ControlBar disabled />
					<Shortcut disabled />
				</Player>
			</div>
		);
	}
}

export default withRouter(Video);
