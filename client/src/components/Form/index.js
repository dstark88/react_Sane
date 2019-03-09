import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

// import React, { Component } from "react";
// // import API from "../utils/API";
// import "./search.css"

// class Search extends Component {
//     state = {
//         getSites: []
//     }

//     componentDidMount() {
//         // API.getSites()
//         //     .then(res => this.setState({ getSites: res.data.message }))
//         //     .catch(err => console.log(err));
//     }

//     render() {
//         return (
//             <>
//                 <h2>Search</h2>
//                 <form>
//                     <label htmlFor="site-choice">Site name:</label>
//                     <input list="sitess" id="site-choice" name="site-choice" className="form-control" placeholder="Choose a Site" />
//                     <datalist id="sites">
//                         {this.state.getSites.map(site => <option key={site}>{site}</option>)}
//                     </datalist>
//                     <button type="submit" className="btn btn-success btn-block mt-2">Search</button>
//                 </form>
//             </>
//         )
//     }
   
// }

// export default Search;