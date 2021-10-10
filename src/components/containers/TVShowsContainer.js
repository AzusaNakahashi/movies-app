import { Center, Container } from 'native-base'
import React, { useState } from 'react'
import Form from '../forms/Form'
import Loading from '../layout/loading'
import MoviesList from '../lists/MoviesList'
import { getMovies } from '../services/api'

const TVShowsContainer = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [TVShows, setTVShows] = useState([])
    const [category, setCategory] = useState(null)
    

    const fetchMovies = (category) => {
        setIsLoading(true)
        getMovies(category, "TVShows").then (
            Results => {
                setTVShows(Results)
                setIsLoading(false)
            },
            error => {
                alert('Error', `something went wrong ${error}`)
            }
        )
    }

    
    return (
        <Container >
            <Center px={4}>
                <Form type="TVShows" onCategoryChange={fetchMovies} fetchMovies={fetchMovies} />
                {isLoading ? <Loading /> : <MoviesList movies={TVShows} navigation={navigation}/>}
            </Center>
        </Container>
    )
}

export default TVShowsContainer