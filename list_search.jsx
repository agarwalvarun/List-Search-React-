
var FilteredList = React.createClass({
	filter_list : function (e) {
		var initial_list = this.state.initial_items
		var updated_list = initial_list.filter(function(item){
			return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1
		})	
		this.setState({final_items: updated_list})
	},
	getInitialState : function(){
		return {
			initial_items: [
			"Steve Jobs",
			"Steve Wozniak",
			"Elon Musk",
			"Bill Gates",
			"Mark Zukerberg",
			],
			final_items: []
		}
	},
	render : function(){
		return (
		<div className = "filter-list">
			<input type = "text" placeholder = "Search" onChange = {this.filter_list}/>
			<List final_items = {this.state.final_items}/>
		</div>
		)
	}
}); 

var List = React.createClass({
	render : function(){
		return (
			<ul>
			{
				this.props.final_items.map(function(item){
					return <li key={item}>{item}</li>
				})
			}
			</ul>
		)
	}
});

ReactDOM.render(<FilteredList />, document.getElementById('mount-point'))