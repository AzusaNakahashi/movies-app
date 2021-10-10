import { Box, Center, Divider, Heading, Image, Text, VStack, Button } from 'native-base'
import React from 'react'

const MovieCard = ({img, MovieTitle, TVTitle, popularity, releaseDate, firstAirDate, overview, navigation}) => {
    return (
        <Box>
            <VStack space={2} divider={<Divider/>}>
                <Center>
                    {MovieTitle ?  
                        <Heading size='sm'>{MovieTitle}</Heading> : 
                        <Heading size='sm'>{TVTitle}</Heading>
                    }
                    <Text>Popularity: {popularity}</Text>
                    {releaseDate ?  
                        <Text>Release date: {releaseDate}</Text> : 
                        <Text>First air date: {firstAirDate}</Text>
                    }
                </Center>
                <Box>
                    <Image alt={MovieTitle} source={{ uri: `http://image.tmdb.org/t/p/w500/${img}`}} size={'2xl'} />
                </Box>
                <Box pb={10}>
                    <Button variant="solid"
                    onPress={() => navigation.navigate('Show', {
                        img,
                        MovieTitle,
                        TVTitle,
                        popularity,
                        releaseDate,
                        overview,
                        firstAirDate                     
                    })}
                    >More Details</Button>
                </Box>
            </VStack>
        </Box>
    )
}

export default MovieCard