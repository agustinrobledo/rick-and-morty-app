import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CharacterList from '../screens/CharacterList'
import CharacterInfo from '../src/components/CharacterInfo'
import React from 'react'

const Stack = createNativeStackNavigator()

function MainStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            options={{
                title: 'Rick and Morty',
                headerStyle: {
                    backgroundColor: '#F4989C',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                },
            }}
            name="Home" 
            component={CharacterList} />
            <Stack.Screen
            options={{
                title: 'Character Info',
                headerStyle: {
                    backgroundColor: '#ACECF7',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                },
            }} 
            name="Character Info" 
            component={CharacterInfo} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack