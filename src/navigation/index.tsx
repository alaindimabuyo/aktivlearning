import React from 'react';
import {Text} from 'react-native';
import {NotFoundScreen} from '../screens/NotFoundScreen';
import {RootStackParamList} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

export default function Navigation() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Home'}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Home'}}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen
            name="NotFound"
            component={NotFoundScreen}
            options={{title: 'Oops!'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
