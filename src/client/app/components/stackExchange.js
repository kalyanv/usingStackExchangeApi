import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { crud } from "../actions/crud.js";
import SearchList from './SearchList.js';

class CounterDisp extends Component {
	componentWillMount() {
		this.callPage();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps != undefined && nextProps.searchText != this.props.searchText) {
			this.props = nextProps;
			this.callPage();
		}
	}

	callPage() {
		const config = {
			method: 'GET',
			url: 'https://api.stackexchange.com/2.2/search/advanced?q='+this.props.searchText+'&min=1496275200'+'&site=stackoverflow'
		};
		const { dispatch } = this.props;

		dispatch({ type: 'FETCH_SE_DATA' });
		crud(config)
			.then(response => {
				//console.log('callPage response', response);
				dispatch({ type: 'FETCH_SE_DATA_FULFILLED', payload: response.data.items });
			})
			.catch((err) => {
				//console.log('callPage Error', err);
				dispatch({ type: 'FETCH_SE_DATA_REJECTED', payload: err });
			})
	}

	render() {		
		const { searchBox, f } = this.props;
		const isEmpty = f.search.length === 0
		return (
			<div >
				{isEmpty
					? (f.fetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
					: <div style={{ opacity: f.fetched ? 1 : 0.5 }}>
						<SearchList search={f.search} />
					</div>
				}
			</div>
		);
	}
}

CounterDisp.propTypes = {
	f: PropTypes.object.isRequired,
	dispatch: PropTypes.func.isRequired
}

export default connect((store) => {
	console.log(store)
	return {
		searchText: store.mySearchBox.text,
		f: store.myUserList
	};
})(CounterDisp);
