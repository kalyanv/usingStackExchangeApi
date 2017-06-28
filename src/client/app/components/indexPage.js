import React, { Component } from 'react'

import SearchSE from './SearchSE'
import StackExchange from './StackExchange'

export default class IndexPage extends Component {
	render() {
		return (
			<div>
				<h1>Stack Exchange</h1>
				<SearchSE/>
				<div>					
					<StackExchange />
				</div>
			</div>
		)
	}
}