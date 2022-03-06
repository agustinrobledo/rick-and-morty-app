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
            <Stack.Screen name="Home" component={CharacterList} />
            <Stack.Screen name="Character Info" component={CharacterInfo} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack