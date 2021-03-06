import React,{Component} from 'react';

const TableHeader = () =>{
	return(
		<thead>
					<tr>
						<th>Name</th>
						<th>Job</th>
						<th>remove</th>
					</tr>
		</thead>
	);
}

const TableBody = (props) =>{
	const rows = props.characterData.map((row,index) =>{
		return(
			<tr key = {index}>
				<td>{row.name}</td>	
				<td>{row.job}</td>	
				<td><button onClick = {()=>props.remove(index)}>delete</button></td>
			</tr>
		)

	});
	return(
		<tbody>{rows}</tbody>
	)
}

class Table extends Component{
	render(){
		const {characterData,remove} = this.props;
		return(
			<table>
				<TableHeader/>
				<TableBody 
				characterData = {characterData}
				remove = {remove}			
				/>
				
			</table>
		)
	}

}

export default Table;