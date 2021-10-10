import { Ionicons } from '@expo/vector-icons'
import { Button, FormControl, HStack, Input, VStack, Icon, View, Text } from 'native-base'
import React, { useState } from 'react'

const WordSearchForm = props => {
    const {onInputChange, fetchMovies} = props
    const [formData, setData] = useState({})
    const [errors, setErrors] = useState({})

    const onSubmit = () => {
        fetchMovies()
    }

    return (
        <VStack space={2} width='100%' py={5}>
            <FormControl isRequired>
                <FormControl.Label fontSize="sm">Search Movie/TV show name</FormControl.Label>
                <HStack width='100%' space={2}>
                    <Input 
                        placeholder='i.e. James Bond'
                        variant="filled"
                        bg="gray.200"
                        px={3}
                        width="85%"
                        /* add search icon */
                        InputLeftElement={
                            <Icon size={5} ml={2} color="gray.400" as={<Ionicons name='ios-search' />} />
                        }
                        onChangeText={value => { onInputChange(value)
                        setData({...formData, name:value})
                        }}
                    />
                    {/* add search icon */}
                    <Button onPress={onSubmit} startIcon={<Icon size={7} as={Ionicons} name='ios-search' />}>Search</Button>
                </HStack>
            </FormControl>
        </VStack>
    )
}

export default WordSearchForm