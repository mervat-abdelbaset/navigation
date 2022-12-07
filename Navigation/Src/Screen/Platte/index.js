import { useNavigation, useRoute } from '@react-navigation/native';
import {React, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Box from '../../Components/Box';

export default function platte() {
  const routeInformation = useRoute();
  const { setOptions } = useNavigation();
  useEffect(() => {setOptions({title: routeInformation.params.name,});}, 
  [routeInformation.params.name, setOptions]);
  useEffect(() => {
    return () => {
    console.log('Bye');
    };
    }, []);
  return (
    <FlatList data={routeInformation.params.colors} renderItem={({ item: { colorName, hexCode }})=>(
        <Box title={colorName} bgColor={hexCode} />
      )}
      keyExtractor={item => item.hexCode}
      ListHeaderComponent={
        <Text style={styles.text}> Here Are Some Boxes With Color Names </Text>
        }
      ListEmptyComponent={
        <View>
          <Text> Empty List</Text>
        </View>
      }
      style={styles.containerStyle}
    />
  );
}

const styles = StyleSheet.create({
  containerStyle: {
  padding: 15,
  backgroundColor: 'white',
  },

  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 15,
  },
});