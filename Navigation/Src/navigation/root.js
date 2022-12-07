import  React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screen/Home';
import Platte from '../Screen/Platte';
import routes from '../Common/routes';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();
export default function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.Home} component={Home} 
      options={{
        header: () => null,
      }}/>
      <Stack.Screen name={routes.Platte} component={Platte} />
    </Stack.Navigator>
  );
};