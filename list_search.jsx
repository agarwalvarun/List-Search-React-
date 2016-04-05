/** @jsx React.DOM */

var FilteredList = React.createClass({
	filter-list : function (e) {
		var initial-list = this.state.initial-items
		updated-list = initial-list.filter(function(item){
			return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1
		})	
		this.setState({final-items: updated-list})
	},
	getInitialState : function(){
		initial-items = [
			"Steve Jobs",
			"Steve Wozniak",
			"Elon Musk",
			"Bill Gates",
			"Mark Zukerberg",
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

var List = React.createClass({
	render : function(){
		return (
			<ul>
			{
				this.props.final-items.maps(function(item){
					return <li>{item}</li>
				})
			}
			</ul>
		)
	}
});
