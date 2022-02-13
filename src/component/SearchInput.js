import React, {Component} from "react";

class SearchInput extends Component{

    state={
        entry:''
    }
    inSubmit=(event)=>{
        event.preventDefault()
        this.props.onSearchSubmit(this.state.entry)
    }
    
    
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.inSubmit} className="ui form">
                    <div className="field">
                        <div className="ui massive icon input">
                            <input type='text' placeholder="Enter the movie.." onChange={(event)=>this.setState({entry:event.target.value})}
                            value={this.state.entry}></input>
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchInput