import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import Root from './navigation/root';

const Appnavigation = () => {
  return (
    <NavigationContainer>
      <Root/>
    </NavigationContainer>
  )
};

export default Appnavigation;