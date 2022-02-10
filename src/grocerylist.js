import { Component } from "react";
import bag from "./1.png"

export class GroceryList extends Component{
   state={
      userInput: "",
      groceryList: []
      
   }
   onChangeEvent(e){
     this.setState({userInput: e})
   }
   addItem (input){
      if (input ===""){
         alert("Plaease enter an item")
      }
      else{
let listArray = this.state.groceryList;
listArray.push(input);
this.setState({groceryList: listArray, userInput: ""})
}
   }
   crossWord(event){
const li = event.target;
li.classList.toggle("crossed");
   }
   deleteItem(){
      let listArray = this.state.groceryList;
      listArray = []
      this.setState({groceryList:listArray})
   }
   onFormSubmit(e){
      e.preventDefault()
   }
   render(){
      return(
         <div>
            <form onSubmit ={this.onFormSubmit}>
            <div className="container">
               <input type="text" 
               placeholder ="what do you want to bue?"
               onChange={ (e) => {this.onChangeEvent (e.target.value)}}
               value={this.state.userInput}/>
            </div>
            <div className="container">
               <button className="add" onClick={ ()=> this.addItem(this.state.userInput)}>Add</button>
            </div>
            <ul>
               {this.state.groceryList.map((item, index) => (<li onClick={this.crossWord} key={index}> <img src={bag} alt="bag" width="40px"/> {item}</li>))}
            </ul>
            <div className="container">
               <button className="delete" onClick={ ()=> this.deleteItem()}>Delete</button>
            </div>
            </form>
         </div>
      )
   }
}