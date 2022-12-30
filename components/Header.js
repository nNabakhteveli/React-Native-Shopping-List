import React from 'react';
import global from './global';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ text }) => {
   return (
      <View style={style.container}>
         <Text style={style.text}>{text}</Text>
      </View>
   );
}

Header.defaultProps = {
   text: "Shopping List"
}

const style = StyleSheet.create({
   container: {
      backgroundColor: 'darkslateblue',
      height: global.styles.header.paddingTop,
      padding: 15
   },

   text: {
      color: 'white',
      fontSize: 23,
      textAlign: 'center'
   }
});

export default Header;