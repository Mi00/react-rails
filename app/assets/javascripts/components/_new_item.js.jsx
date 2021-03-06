var NewItem = React.createClass({
	handleClick(){
		var name = this.name.value;
		var description = this.description.value;
		$.ajax({
			url: '/api/v1/items',
			type: 'POST',
			data: { item: { name: name, description: description } },
			success: (item) => {
				this.props.handleSubmit(item);
			}
		});
	},

	render() {
		return (
			<div className='text-center form-group'>
				<input type="text" ref={input => this.name = input } className='form-control' placeholder='Enter the name of the item' />
				<input type="text" ref={input => this.description = input } className='form-control'  placeholder='Enter the description' />
				<button onClick={this.handleClick} className='btn btn-primary'>Add new</button>
			</div>
		)
	}
});