import React, { Component } from 'react'
import './component2.css'
import Component3 from './component3'
import Search from './search'
import { useState } from 'react';
 class Componet1 extends Component {
constructor(props) {
  super(props)

  this.state = {
     load:false,
     list:[] ,
     input1:"healdine"
  }
}
async componentDidMount(){ 
  const date= new Date;
  const {search21}=this.props;
  let month=date.getMonth()+1;
  let day=date.getDate();
 let url=`https://newsapi.org/v2/everything?q="headline"&from=2023-08-${day}&sortBy=publishedAt&apiKey=bd547319cbd743d4b44039da992f0e52`
 let data=await fetch(url);
 let parsedData=await data.json()
 this.setState({  
  load:true,
  list:parsedData.articles,input1:"Headline"});
 
}

search34=async(e)=>{
  e.preventDefault();
  console.log("laude lag agye")
console.log(this.state.input1)
  const date= new Date;
  let day=date.getDate();
  let url=`https://newsapi.org/v2/everything?q=${this.state.input1}&from=2023-08-${day}&sortBy=publishedAt&apiKey=bd547319cbd743d4b44039da992f0e52`
 let data=await fetch(url);
 let parsedData=await data.json()
 this.setState({  

  list:parsedData.articles});
 }
 search3(e){
  this.setState({input1:e.target.value})
 }
  render() {
    const{load,list}=this.state;

    return (
    <div>
    <div className='search-div'>
    <form className="search-form"onSubmit={(e)=>this.search34(e)}>
   
     <input className='search-input' type="text"  value={this.state.input1} onChange={(e)=>this.search3(e)} />
     <button className="search-button" type="submit" value="Submit">Search</button>
   
 </form>
 </div>

      <div className="mainc">
         {/* <div class="search1">
        <input  placeholder="type to search" value={this.state.input1} onChange={(e)=>this.setState({
          input1:e.value
        })}/>
          </div> */}
    
     
       
    {/* <button onClick={()=>this.search34(this.state.input1)}  >click me</button> */}
  
      {list.map((item1) =><Component3  key={item1.urlToImage} article={item1} / >)}  
        </div>
        </div>
    )
  }
}
export default Componet1;