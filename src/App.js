import React, { Component } from 'react';
import './App.css';
import ListLogs from'./ListLogs.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      customerTable:[],
      customerDetails:{
        customerName:'',
        customerBusiness:'',
        customerPaperType:'',
        customerPaperSides:'',
        customerDue:'',
        key:''
        
      },
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteLog = this.deleteLog.bind(this);
  }

  handleInput(e){
    const { name, value } = e.target;
      this.setState(prevState => ({
      customerDetails: { ...prevState.customerDetails, [name]: value , key: Date.now()}
    }));
  };

  addItem(e){
    e.preventDefault();
    const newCustomerDetails = this.state.customerDetails;
    console.log(newCustomerDetails);
    console.log(this.state.customerDetails.customerPaperType*this.state.customerDetails.customerPaperSides);
    if(this.state.customerDetails.customerPaperType !=="" && this.state.customerDetails.customerPaperSides !== "" && this.state.customerDetails.customerName!=="" && this.state.customerDetails.customerName!=="" ){
      const newRecord = [...this.state.customerTable, newCustomerDetails];
    this.setState({
      customerTable: newRecord,
      customerDetails:{
        customerName:'',
        customerBusiness:'',
        customerPaperType:'',
        customerPaperSides:'',
        key:''
      }
    })
    }
   e.target.reset(); 
  }

  deleteLog(key){
    const filteredItems = this.state.customerTable.filter(item =>
      item.key !==key);
    this.setState({
      customerTable: filteredItems
    })
  }

  render() {
    return (
      <div className="App">
      <div className="entryBlock">
      <div className="child1">
     <form onSubmit={this.addItem}>
      <div className="form-group row">
         <label for="customerName" className="col-sm-4 col-form-label" id="label">customer Name</label>
             <div class="col-sm-4">
                 <input type="text" class="form-control" id="custInput" placeholder="Name" value={this.state.customerName} name="customerName" onChange={this.handleInput}/>
             </div>
      </div>
      <div className="form-group row">
         <label for="customerBusiness" className="col-sm-4 col-form-label" id="label">Customer Business</label>
             <div class="col-sm-4">
                 <input type="text" class="form-control" id="custInput" placeholder="Business" value={this.state.customerBusiness} name="customerBusiness" onChange={this.handleInput}/>
             </div>
      </div>
      <div className="form-group row">
         <label for="papertype" className="col-sm-4 col-form-label" id="label">Paper Type</label>
              <div class="col-sm-4">
                 <select class="form-control" id="custInput" value={this.state.customerPaperType} name="customerPaperType" onChange={this.handleInput}>
                    <option value="1">Select</option>
                    <option value="2">A4/FS</option>
                    <option value="3">A3</option>
                 </select>
              </div>
      </div>

      <div class="form-group row">
         <label for="customerBusiness" class="col-sm-4 col-form-label" id="label">No Of Sides</label>
             <div className="col-sm-4">
                 <input type="text" className="form-control" id="custInput" placeholder="Sides" value={this.state.customerPaperSides} name="customerPaperSides" onChange={this.handleInput}/>
             </div>
      </div>

      <button className="col-sm-4" id="submit" type='submit'>save1</button>
    

      </form>
      </div>

      <div class="child2 dueDetails">
      <h2>Amount due</h2>
      <h3>{this.state.customerDetails.customerPaperType*this.state.customerDetails.customerPaperSides}</h3>
      </div>
      </div>

      <div className="log_details">
      <ListLogs customerTable = {this.state.customerTable}
      deleteLog = {this.deleteLog}></ListLogs>

      </div>


      </div>
    );
  }
}


export default App;
