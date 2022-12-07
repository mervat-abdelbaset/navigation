import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import style from './style';


function Box({ bgColor, title }) {
  return (
    <View
      style={StyleSheet.flatten([
        style.containerStyle,
        {
          backgroundColor: bgColor,
        },
      ])}>
      <Text style={style.titleStyle}>{title}</Text>
    </View>
  );
};

export default Box;