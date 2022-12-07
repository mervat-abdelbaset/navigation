import { View, Text } from 'react-native'
import React from 'react'
import style from './style';
import routes from '../../Common/routes';
const Home = ({navigation}) => {
  const { navigate } = navigation();
  const schemeList = [
    {
      scheme: twitterColors,
      title: 'Twitter Colors',
    },
    {
      scheme: solarizedColors,
      title: 'Solarized Colors',
    },
  ];
  return (
    <View style={style.containerStyle}>
    {schemeList.map(({ scheme, title }) => (
      <Pressable onPress={()=> navigate(routes.palette, { name: title, colors: scheme })}
      style={[style.itemContainer,{ backgroundColor: scheme[3].hexCode,},]}>
      <Text style={style.titleStyle}>{title}</Text>
        <View style={style.colorsContainer}>
          {scheme.slice(0, 3).map(({ hexCode }) => (
          <View style={[style.colorItem, { backgroundColor: hexCode }]}key={hexCode}/>
))};
      </View>
      </Pressable>
))};
      </View>
);
};
export default Home;