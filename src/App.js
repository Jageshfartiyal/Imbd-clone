import React from 'react'
import axios from 'axios'
import SearchInput from './component/SearchInput'
import MovieList from './component/movieList'
import './component/style.css'


class App extends React.Component{
  state={
    movies:[]
  }

onSearchSubmit= async(entry)=>{
    
       const response=await axios.get(
            `http://www.omdbapi.com/?s=${entry}&apikey=6900cf1c`
            )

            this.setState({movies:response.data.Search})
            //console.log(this.state.movies)
  }

    render(){
      return(
        <div className='movie-app'>
            <SearchInput onSearchSubmit={this.onSearchSubmit}/>
            <div className='images'>
            <MovieList movies={this.state.movies}></MovieList>
            </div>
                
        </div>  
      )
  }
}
export default App