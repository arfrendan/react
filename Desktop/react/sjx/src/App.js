import React,{Component} from 'react';
import Table from './Table'
import Form from './Form'
class App extends Component{

	state ={
		characters:[
				
		]
	};

	remove = index =>{
		const {characters} = this.state;
		this.setState({
			characters: characters.filter((characters,i) =>{
				return i !== index;
			})
		});
	};

	handleSubmit = character =>{
		this.setState({characters:[...this.state.characters,character]});
	}
	render(){
		
		const {characters} = this.state;
		return(
			<div className="container">
				<Table characterData={characters}
						remove = {this.remove}
				/>
				<Form handleSubmit = {this.handleSubmit}/>
			</div>
		);
	}
}
export default App;