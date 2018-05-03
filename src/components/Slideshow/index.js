import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppContext from '../App/AppContext';

import './style.scss';

class Slideshow extends Component {
	constructor(props) {
		super(props);
		this.slides = React.createRef();
		console.log(history);
	}

	componentDidMount() {
		if (this.props.clicks) {
			setTimeout(() => {
				this.props.clicks.forEach(c => {
					const element = document.querySelector(`[id^='${c.id}']`);
					element.style.cursor = 'pointer';
					element.addEventListener('click', e => {
						e.preventDefault();
						this.props.updateNav(c.nav);
						this.props.history.push(c.target);
					});
				});
			}, 1000);
		}
	}

	handleClick = offset => {
		this.slides.current.style.transform = `translateX(-${offset * 100}%)`;
	};

	render() {
		const menuItems = this.props.slidesConf.map((s, i) => {
			return (
				<div
					className="slideshow__item"
					onClick={() => this.handleClick(i)}
					key={`menu_${i}`}
				>
					<img src={s.menu.img} alt={`${s.menu.name} icon`} />
					<div className="slideshow__name">
						<div>{s.menu.name}</div>
					</div>
				</div>
			);
		});

		const slidesItems = this.props.slidesConf.map((s, i) => {
			return (
				<div className={`slideshow__slide`} key={`slide_${i}`}>
					{s.slide.content}
				</div>
			);
		});

		return (
			<div className={`page ${this.props.pageName}`}>
				<div className="slideshow__menu">{menuItems}</div>
				<div className="slideshow__slider">
					<div className="slideshow__slides" ref={this.slides}>
						{slidesItems}
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Slideshow);
