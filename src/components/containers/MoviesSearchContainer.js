import { Center, Container } from 'native-base'
import React, { useState } from 'react'
import Form from '../forms/Form'
import WordSearchForm from '../forms/WordSearchForm'
import Loading from '../layout/loading'
import MoviesList from '../lists/MoviesList'
import { getMovies } from '../services/api'


const MoviesSearchContainer = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [movies, setMovies] = useState([])
    const [title, setTitle] = useState(null)

    const fetchMovies = () => {

        setIsLoading(true)
        getMovies(title).then (
            results => {
                setMovies(results)
                setIsLoading(false)
            },
            error => {
                alert('Error', `something went wrong ${error}`)
            }
        )
    }

    const handleInputChange = (title) => {
        setTitle(title)
    }
    
    return (
        <Container >
            <Center px={4}>
                <WordSearchForm onInputChange={handleInputChange} fetchMovies={fetchMovies} />
                {isLoading ? <Loading /> : <MoviesList movies={movies} navigation={navigation}/>}
            </Center>
        </Container>
    )
}

export default MoviesSearchContainer