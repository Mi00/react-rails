var Item = React.createClass({
	getInitialState(){
		return {editable: false}
	},

	handleEdit(){
		if(this.state.editable) {
			var name = this.name.value;
			var id = this.props.item.id;
			var description = this.description.value;
			var item = {id: id, name: name, description: description};
			this.props.handleUpdate(item);
		}
		this.setState({editable: !this.state.editable});
	},

	render () {
		var name = this.state.editable ? <input type='text' ref={input => this.name = input } className="form-control" defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>;
		var description = this.state.editable ? <textarea type='text' rows="6" ref={input => this.description = input } className="form-control" defaultValue={this.props.item.description} /> : <p>{this.props.item.description}</p>;
		return (
			<div>
				{name}
				{description}
				<button onClick={this.handleEdit} className='btn btn-success'> {this.state.editable ? 'Submit' : 'Edit'}</button>
				<button onClick={this.props.handleDelete} className='btn btn-warning'>Delete</button>
			</div>
			)
	}
});