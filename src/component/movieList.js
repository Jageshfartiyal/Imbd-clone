import React from 'react'

const MovieList=(props)=>{
   
    return(
        <div>
            {props.movies.map((Search,index)=>(
                <div className='image-container'>
                <img src={Search.Poster} alt='movie'></img>
                </div>
            ))}
        </div>
    )
}
export default MovieList