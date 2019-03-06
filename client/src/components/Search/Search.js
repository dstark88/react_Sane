import React, { Component } from "react";
// import API from "../utils/API";
import "./search.css"

class Search extends Component {
    state = {
        getSites: []
    }

    componentDidMount() {
        // API.getSites()
        //     .then(res => this.setState({ getSites: res.data.message }))
        //     .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <h2>Search</h2>
                <form>
                    <label htmlFor="site-choice">Site name:</label>
                    <input list="sitess" id="site-choice" name="site-choice" className="form-control" placeholder="Choose a Site" />
                    <datalist id="sites">
                        {this.state.getSites.map(site => <option key={site}>{site}</option>)}
                    </datalist>
                    <button type="submit" className="btn btn-success btn-block mt-2">Search</button>
                </form>
            </>
        )
    }
   
}

export default Search;