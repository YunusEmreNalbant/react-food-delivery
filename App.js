import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Restaurant, OrderDelivery, Home} from './screens';


const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown:false
              }}
              initialRouteName={"Home"}
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Restaurant" component={Restaurant} />
              <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
