import {  CheckIcon, FormControl, HStack,  Select, VStack } from 'native-base'
import React, {useState} from 'react'

const Form = props => {
    const {onCategoryChange, fetchMovies, type} = props
    const [formData, setData] = useState({})
    return (
        <VStack space={2} width="100%" py={5}>
            <FormControl isRequired>
                <HStack width='100%' space={2}>

                {type === "movies" ? (
                    <Select
                    selectedValue={formData.name}
                    minWidth="100%"
                    accessibilityLabel="Choose Category"
                    placeholder="Choose Category"
                    _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                    }}
                    mt={1}
                    onValueChange={(selectValue) => {onCategoryChange(selectValue)
                    setData({...formData, name:selectValue})}}
                    
                >
                    <Select.Item label="popular" value="popular" />
                    <Select.Item label="now playing" value="now_playing" />
                    <Select.Item label="top rated" value="top_rated" />
                    <Select.Item label="upcoming" value="upcoming" />
                </Select> 
                ):(
                    <Select
                    selectedValue={formData.name}
                    width="100%"
                    accessibilityLabel="Choose Category"
                    placeholder="Choose Category"
                    _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                    }}
                    mt={1}
                    onValueChange={(selectValue) => {onCategoryChange(selectValue)
                    setData({...formData, name:selectValue})}}
                    
                >
                    <Select.Item label="popular" value="popular" width="100%"/>
                    <Select.Item label="top rated" value="top_rated" />
                    <Select.Item label="airing today" value="airing_today" />
                </Select> 
                )}


                
                    
                </HStack>
            </FormControl>
        </VStack>

    )
}

export default Form