import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './style.scss';

class Slideshow extends Component {
	constructor(props) {
		super(props);
		this.slides = React.createRef();
		this.state = {
			offset: 0,
		};
	}

	componentDidMount() {
		if (this.props.clicks) {
			setTimeout(() => {
				this.props.clicks.forEach(c => {
					const element = document.querySelector(`[id^='${c.id}']`);
					element.style.cursor = 'pointer';
					element.style.transition = 'transform 0.4s';
					element.style.transformOrigin = 'center';
					element.addEventListener('click', e => {
						e.preventDefault();
						this.props.updateNav(c.nav);
						this.props.updateTitle(c.title);
						this.props.history.push(c.target);
					});
					element.addEventListener('mouseenter', e => {
						e.preventDefault();
						element.style.transform = 'scale(1.05)';
					});
					element.addEventListener('mouseleave', e => {
						e.preventDefault();
						element.style.transform = 'scale(1)';
					});
				});
			}, 1000);
		}
		if (this.props.menu) this.handleClick(this.props.menu);
		else this.handleClick(this.props.index);
	}

	handleClick = offset => {
		this.setState({ offset });
		this.props.updateIndex(offset);
		this.slides.current.style.transform = `translateX(-${offset * 100}%)`;
	};

	render() {
		const menuItems = this.props.slidesConf.map((s, i) => {
			const active = i === parseInt(this.state.offset, 10) ? 'slideshow__item-active' : '';
			return (
				<div
					className={`slideshow__item ${active}`}
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
