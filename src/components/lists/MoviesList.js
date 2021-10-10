import { View, Text, FlatList } from 'native-base'
import React from 'react'
import MovieCard from '../listItems/MovieCard'

const MoviesList = ({movies, navigation}) => {
    return (
        <>
        {movies ? <FlatList
            data={movies.results}
            renderItem={({ item }) => (
                <MovieCard
                img={item.poster_path}
                MovieTitle={item.original_title}
                TVTitle={item.original_name}
                firstAirDate={item.first_air_date}
                popularity={item.popularity}
                releaseDate={item.release_date}
                navigation={navigation}
                overview={item.overview}
                />
            )}
            showsVerticalScrollIndicator={false}
            /> : <View><Text>Start Searching by Category or Title</Text></View>}
        </>
    )
}

export default MoviesList