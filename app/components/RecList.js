import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListItem from 'ListItem';

export class RecList extends Component {

	renderList = () => {
		const { recs } = this.props;
		return recs.map((rec) => (
			<li	key={rec.word} className="listItem">
				<ListItem word={rec.word}/>
			</li>
		))
	}

	render() {
		return (
			<ul className="recList">
				{this.renderList()}
			</ul>
			
		)
	}

}

const mapStateToProps = (state) => ({
	recs: state.recs
})

export default connect(mapStateToProps)(RecList)