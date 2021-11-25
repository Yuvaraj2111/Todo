import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './pages/signin';
import Home from './pages/home'
const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="signin">
                <Stack.Screen name="signin" component={Signin} />
                <Stack.Screen name="home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;
