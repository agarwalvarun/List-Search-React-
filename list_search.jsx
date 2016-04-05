/** @jsx React.DOM */

var FilteredList = React.createClass({
	getInitialState : function(){
		initial-items = [
			"Steve Jobs",
			"Steve Wozniak",
			"Elon Musk",
			"Bill Gates",
		]
		final-items = []
	},
	render : function(){
		<div className = "filter-list">
			<input type = "text" placeholder = "Search" onChange = {this.filter-list}/>
			<List final-items = {this.state.final-items}/>
		</div>
	}
}); 