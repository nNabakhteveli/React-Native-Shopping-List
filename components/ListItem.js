import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = ({ item, deleteItem }) => {
   return (
      <TouchableOpacity style={style.listItem}>
         <View style={style.listItemView}>
            <Text style={style.listItemText}>{item.text}</Text>
            <Text onPress={() => deleteItem(item.id)} style={style.delete}>X</Text>
         </View>
      </TouchableOpacity>
   );
}


const style = StyleSheet.create({
   listItem: {
      padding: 15,
      backgroundColor: "#f8f8f8",
      borderBottomWidth: 1,
      borderColor: '#eee'
   },
   listItemView: {
      flexDirection: 'row',
      justifyContent: 'space-between'
   },
   listItemText: {
      fontSize: 16
   },
   delete: {
      color: 'red',
      fontSize: 16
   }
});

export default ListItem;