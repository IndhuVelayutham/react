import React from 'react';
import './ListLogs.css';

function ListLogs(props){
	const  customerList= props.customerTable;
	const ListLogs = customerList.map(item=>
	{
		return <div className="list" key={item.key}>
		<p>{item.customerName}, {item.customerBusiness}, {item.customerPaperType}, {item.customerPaperSides},  {item.customerPaperType * item.customerPaperSides}<span class="glyphicon glyphicon-trash" icon="trash" onClick={()=>props.deleteLog(item.key)}>
		</span></p>
		</div>
	})
	return(
		<div>{ListLogs}</div>

		)
}
export default ListLogs;