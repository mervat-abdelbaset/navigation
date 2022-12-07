import { View, Text } from 'react-native';
import React from 'react';
import style from './style';

const Button = () => {
  return (
    <View style={style.containerStyle}>
      <Text style={style.buttonTextStyle}>Button</Text>
    </View>
  );
};

export default Button;