import React from "react";
import ReactDOM from "react-dom";

export default class SearchList extends React.Component {
  render() {
    if (Object.getOwnPropertyNames(this.props.search).length === 0) {
      return (<div>Data not available and is empty</div>)
    }
    const searchNode = {
      background: 'antiquewhite',
      width: 400,
      textAlign: 'left',
      padding: 15,
      margin: 5
    };
    const searchNodes = this.props.search.map ((search, i) => {
      const listTagItems = search.tags.map ((t, i) => <li key={i}>{t}</li>);
	  let createdDate = new Date(search.last_activity_date) ;
	  //createdDate += new Date () ;
	  createdDate = createdDate.getDate()+"/"+(createdDate.getMonth()+1)+"/"+createdDate.getFullYear();
      return (
        <div key={i} style={searchNode}>
		 
		  <div>Question: {search.title}</div> 
		  
          <div >
			<p>Total Answer: {search.answer_count}</p>
		  
			<p>Score: {search.score}</p>
		  
			<p>Total View: {search.view_count}</p>
		  
			<p>Creation Date: {createdDate.toString()} </p>
		  
		  </div>
		  
          
		  
		  <div>Tags: {listTagItems}</div>
		  
         
	
        </div>
      )
    });
    return (
      <div>
        <center>
          <b>Search Result</b>
          <div>{searchNodes}</div>
        </center>
      </div>
    )
  }
}
