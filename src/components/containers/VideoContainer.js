import { Box, Button, Center, Heading, Image, Text } from 'native-base'
import React from 'react'

const VideoContainer = ({ navigation, route }) => {
    const { MovieTitle, TVTitle, firstAirDate, img, overview, popularity, releaseDate } = route.params

    return (
        <>
        <Box width="100%">
            <Center py={5}>
                {MovieTitle ?  
                        <Heading size='md' my={3}>{MovieTitle}</Heading> : 
                        <Heading size='md' my={3}>{TVTitle}</Heading>
                    }
                <Image alt={MovieTitle} source={{ uri: `http://image.tmdb.org/t/p/w500/${img}`}} size={'2xl'} />
                <Text my={3} >Popularity: {popularity}</Text>
                {releaseDate ?  
                    <Text>Release date: {releaseDate}</Text> : 
                    <Text>First air date: {firstAirDate}</Text>
                }
                <Text my={3} px={6}>Overview: {overview}</Text>
            </Center>
        </Box>
        </>
    )
}

export default VideoContainer