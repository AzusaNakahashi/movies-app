import { Center, Container } from 'native-base'
import React, { useState } from 'react'
import Form from '../forms/Form'
import Loading from '../layout/loading'
import MoviesList from '../lists/MoviesList'
import { getMovies } from '../services/api'

const MoviesContainer = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [movies, setMovies] = useState([])
    const [category, setCategory] = useState(null)

    const fetchMovies = (category) => {
        setIsLoading(true)
        getMovies(category, "movie").then (
            results => {
                setMovies(results)
                setIsLoading(false)
            },
            error => {
                alert('Error', `something went wrong ${error}`)
            }
        )
    }
    
    return (
        <Container >
            <Center px={6} >
                <Form type="movies" onCategoryChange={fetchMovies} fetchMovies={fetchMovies} />
                {isLoading ? <Loading /> : <MoviesList movies={movies} navigation={navigation}/>}
            </Center>
        </Container>
    )
}

export default MoviesContainer